const Quiz = require("./Quiz.js");
const Tag = require("./Tag.js");

const quiz1 = new Quiz({
  id: 1,
  title: "Quiz de la tartif",
  description: "Blablabla",
  author_id: 1
});

console.log(quiz1);


const tag1 = new Tag({
  id: 1,
  name: "GOT"
});

console.log(tag1);