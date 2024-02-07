//몽고디비 사이트에서 접속 드라이버 코드를 가져옴.

const { MongoClient} = require('mongodb'); //몽고디비 패키지 임포트
//몽고디비 uri 지정
const uri = "mongodb+srv://cleanbin98:serene98116@cluster0.lbp4c9h.mongodb.net/?retryWrites=true&w=majority";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
