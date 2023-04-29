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

let data = getData("https://jsonplaceholder.typicode.com/users", function(response){
  return response;
})

console.log(data)

const columns = ["ID", "Name", "Username", "Email", "Address", "Company"]

const app = document.getElementById("app");
const table = new Table({columns, data});

table.render(app);
