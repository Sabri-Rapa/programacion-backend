const fs = require("fs");

//SINCRÓNICO
try {
  const data = fs.readFileSync("./fyh.txt", "utf-8");
  console.log(data);
  // fs.appendFileSync('./fyh.txt', 'agregado')
  // console.log(data)
} catch (err) {
  console.log(err);
}

//ASINCRÓNICO
fs.readFile("./fyh.txt", "utf-8", (error, value) => {
  if (error) {
    console.log("algo salió mal");
  } else {
    console.log(value);
  }
});

fs.appendFile("./fyh.txt", "\nagregar algo nuevo", (error, value) => {
  if (error) {
    console.log("algo salió mal");
  } else {
    console.log(value);
  }
});

fs.promises
  .readFile("./fyh.txt", "utf-8")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("hubo error");
  });

async function read() {
  try {
    const data = await fs.promises.readFile("./fyh.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log("error");
  }
}
read()