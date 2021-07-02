// const { createQuestion, saveContact } = require("../js/contacts");
const yargs = require("yargs");
const {
  saveContact,
  listContacts,
  detailContact,
  deleteContact,
} = require("./contacts");

// const main = async () => {
//   const nama = await createQuestion("Masukkan nama anda:");
//   const noHp = await createQuestion("Masukkan telfon:");
//   const email = await createQuestion("Masukkan email:");

//   saveContact(nama, email, noHp);
// };

// main();

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomer Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      saveContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

//menampilkan daftar semua nama & no hp contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    listContacts();
  },
});

//menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

//menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus delete sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
