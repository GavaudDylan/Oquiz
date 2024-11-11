const Level = require("./Level.js");
const User = require("./User.js");
const Tag = require("./Tag.js");

main();

async function main() {
  // const veryDiffult = new Level({ name: "très difficile" });
  // await veryDiffult.insert();
  // await veryDiffult.delete();

  // const bob = new User({ firstname: "Bob", lastname: "L'éponge", email: "bob@bikini.io", "password": "12345" });
  // await bob.insert();
  // await bob.delete();

  // const chuck = await User.findById(3);
  // await chuck.update();


  const jamy = new User({ firstname: "Jamy", lastname: "Gourmaud", email: "jammy@cestpassorcier.io", password: "C'estPasSorcierQuandMeme!" });
  await jamy.insert();

  const coreModelDifficult = new Level({ name: "On pleure" });
  await coreModelDifficult.insert();


  const cookingTag = new Tag({ name: "Cuisine" });
  await cookingTag.insert();

  const sportTag = new Tag({ name: "Sport" });
  await sportTag.insert();
  await sportTag.delete();

  const tag5 = await Tag.findById(5);
  console.log(tag5);

}