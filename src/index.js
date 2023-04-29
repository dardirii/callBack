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

getData("https://jsonplaceholder.typicode.com/users", function(response){
const columns = ["ID", "Name", "Username", "Email", "Address", "Company"]
const data = response


let result = [];

for (let i = 0; i < data.length; i++) {
  let arr = [];
  arr.push(data[i].id); 
  arr.push(data[i].name);
  arr.push(data[i].username);
  arr.push(data[i].email);
  arr.push((data[i].address.street + data[i].address.suite + data[i].address.city));
  arr.push(data[i].company.name);
  result.push(arr); 
}

console.log(result)

const app = document.getElementById("app");
const table = new Table({columns, result});
table.render(app);
})

