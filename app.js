// Importing module
const chalk = require("chalk");

console.log(
  chalk`{bgGray Selamat Datang di }{bgBlue -= caffe mantap node.js rahman =-}`
);

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("Masukan Nama Anda : ", (nama) => {
  console.log(chalk`Silahkan Pesan {underline ${nama}}`);

  rl.close();
});
