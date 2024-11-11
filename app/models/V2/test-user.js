const User = require("./User.js");

main();


async function main() {

  // ==== INSERT ====
  const harry = new User({
    firstname: "Harry",
    lastname: "Potter",
    email: "harry@hogwarts.io",
    password: "1L0v3Griffondor!"
  });
  console.log(harry);
  console.log(harry.id);
  console.log(harry.firstname);
  await harry.insert();
  console.log(harry.id);


  // ==== UPDATE ====
  const hermione = new User({
    firstname: "Hermione",
    lastname: "Granger",
    email: "hermione@hogwarts.io",
    password: "It's leviosaaaaa"
  });
  await hermione.insert();

  hermione.email = "hermione@granger.com";
  hermione.password = "It'sL3vios4a!";

  await hermione.update();

  // ==== DELETE ====
  const voldy = new User({
    firstname: "Tom",
    lastname: "Jedusor",
    email: "voldy@darkmage.io",
    password: "Avadaaaa Kedavraa!"
  });

  await voldy.insert();
  await voldy.delete();

  // ==== FIND BY ID ====

  const unexistingUser = await User.findById(90);
  console.log(unexistingUser);

  const user3 = await User.findById(3);
  console.log(user3);

  user3.email = "chuck@norris.io";
  user3.update();

  // ==== FIND BY EMAIL ====
  const philippe = await User.findByEmail("philippe@oclock.io");
  console.log(philippe.fullname);


  // ==== FIND ALL ====
  const users = await User.findAll();
  console.log(users[5].fullname);
}

