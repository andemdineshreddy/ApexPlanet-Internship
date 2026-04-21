
// PRODUCTS DATA
let products = [
  {name:"Laptop", category:"electronics", price:50000, rating:4},
  {name:"Phone", category:"electronics", price:20000, rating:5},
  {name:"Shirt", category:"clothes", price:1000, rating:3},
  {name:"Jeans", category:"clothes", price:2000, rating:4}
];

// DISPLAY PRODUCTS
function displayProducts(list){
  document.getElementById("productList").innerHTML =
    list.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>⭐ ${p.rating}</p>
      </div>
    `).join("");
}

displayProducts(products);

// FILTER + SORT
document.getElementById("category").onchange = applyFilters;
document.getElementById("sort").onchange = applyFilters;

function applyFilters(){
  let cat = document.getElementById("category").value;
  let sort = document.getElementById("sort").value;

  let filtered = cat === "all" ? products : products.filter(p=>p.category===cat);

  if(sort==="price"){
    filtered.sort((a,b)=>a.price-b.price);
  }
  if(sort==="rating"){
    filtered.sort((a,b)=>b.rating-a.rating);
  }

  displayProducts(filtered);
}

// TODO (LOCAL STORAGE)
function loadTasks(){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  document.getElementById("taskList").innerHTML =
    tasks.map((t,i)=>`
      <div>${t} <button onclick="deleteTask(${i})">X</button></div>
    `).join("");
}

function addTask(){
  let input = document.getElementById("taskInput");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value="";
  loadTasks();
}

function deleteTask(i){
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(i,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

loadTasks();

// CONTACT
function submitForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  document.getElementById("msg").innerText =
    (name && email) ? "Message Sent ✅" : "Please fill all fields!";
}