//router.js
const express = require("express"); //express 모듈 불러오기
const { ObjectId } = require("mongodb"); //컬렉션 doc, 고유식별 ObjectId에 mongodb 불러오기.
const handlebars = require("express-handlebars"); //handlebars에 익스프레스 핸들바 불러오기
const mongodbConnection = require("./configs/mongoConnection"); //몽고 연결 장치 mongoConnection 불러오기
const postService = require("./services/postService"); //postService 불러오기

const router = express(); //router에 express 상위 모듈 불러오기
router.use(express.json()); //json데이터로 표현하기 위한 장치
router.use(express.urlencoded({ extended: true })); //url데이터로 압축 표현하기 위한 장치

//router의 템플릿 엔진을 handlebars 엔진으로 지정
router.engine(
  "handlebars",
  handlebars.create({
    helpers: require("./configs/customHandlebars"),
  }).engine
);
router.set("view engine", "handlebars"); //웹페이지 로드에 필요한 템플릿 엔진 설정
router.set("views", __dirname + "/views");//views 디렉터리를 절대 경로로 지정
router.get("/", async (req, res) => {
  try {
    // postService.list에서 글리스트와 페이지네이터를 가져옴
    const [posts] = await postService.list(collection);

    // 리스트 페이지 렌더링
    res.render("home", { title: "나만의 학습 리포트", posts });
  } catch (error) {
    console.error(error);
    res.render("home", { title: "나만의 학습 리포트" }); // 에러가 나는 경우는 빈값으로 렌더링
  }
});

router.get("/write", (req, res) => {
  res.render("write", { title: "학습 보고서", mode: "create" });
});

router.post("/write", async (req, res) => {
  const post = req.body;
  const result = await postService.writePost(collection, post); // 글쓰기 후 결과 반환
  res.redirect(`/detail/${result.insertedId}`); // 생성된 도큐먼트의 _id를 사용해 상세페이지로 이동
});

router.get("/detail/:id", async (req, res) => {
  // 게시글 정보 가져오기
  const post = await postService.getDetailPost(collection, req.params.id);
  console.log(post);
  res.render("detail", {post});
});

// 수정 페이지로 이동 mode는 modify
router.get("/modify/:id", async (req, res) => {
  // getPostById()  함수로 게시글 데이터를 받아옴
  const post = await postService.getPostById(collection, req.params.id);
  console.log(post);
  res.render("write", { title: "학습 보고서", mode: "modify", post });
});

// 게시글 수정 API
router.post("/modify/", async (req, res) => {
  const { id, title, content, keyword } = req.body;

  const post = {
    title,
    content,
    keyword,
  };
  // 업데이트 결과
  const result = postService.updatePost(collection, id, post);
  res.redirect(`/detail/${id}`);
});

router.delete("/delete", async (req, res) => {
  const { id } = req.body;
  try {
    // collection의 deleteOne을 사용해 게시글 하나를 삭제
    const result = await collection.deleteOne({
      _id: ObjectId(id),
    });
    // 삭제 결과가 잘 못된 경우의 처리
    if (result.deletedCount !== 1) {
      console.log("삭제 실패");
      return res.json({ isSuccess: false });
    }
    return res.json({ isSuccess: true });
  } catch (error) {
    // 에러가 난 경우의 처리
    console.error(error);
    return res.json({ isSuccess: false });
  }
});

let collection;
router.listen(3000, async () => {
  console.log("Server started");
  const mongoClient = await mongodbConnection();
  collection = mongoClient.db().collection("post");
  console.log("MongoDB connected");
});