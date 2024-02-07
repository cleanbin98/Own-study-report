//router.js에서 호출되는 서비스 기능을 구현한다.

const { ObjectId } = require("mongodb");

//글쓰기 기능
async function writePost(collection, post) {
  return await collection.insertOne(post);
}

//홈 화면의 페이지 네이션과 게시물 리스트 기능
async function list(collection) {
  const cursor = collection.find()
  const posts = await cursor.toArray();
  return [posts];
}

//상세 페이지 기능
async function getDetailPost(collection, id) {
  return await collection.findOne({ _id: ObjectId(id) });
}


// id로 게시글 데이터 불러오기 기능
async function getPostById(collection, id) {
  return await collection.findOne({ _id: ObjectId(id) });
}

// 게시글 수정 기능
async function updatePost(collection, id, post) {
  const toUpdatePost = {
    $set: {
      ...post,
    },
  };
  return await collection.updateOne({ _id: ObjectId(id) }, toUpdatePost);
}

//위 기능들을 다른 곳에서 사용하도록 노출
module.exports = {
  list,
  writePost,
  getDetailPost,
  getPostById,
  updatePost,
};