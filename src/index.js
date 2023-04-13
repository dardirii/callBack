import Table from "./Table.js";

function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const data = getData("https://jsonplaceholder.typicode.com/users", function(data){
  console.log(data);
})

const app = document.getElementById("app");
const table = new Table({
  columns: ["Tittle", "Description"],
  data: [
    ["iPhone 9", "An apple mobile which is nothing like apple"],
    [
      "iPhone X",
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
    ],
    [
      "Huawei P30",
      "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK",
    ],
  ],
});

table.render(app);
