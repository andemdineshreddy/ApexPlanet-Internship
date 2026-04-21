// PRODUCTS DATA
let products = [
  {name:"Laptop", category:"electronics", price:50000, rating:4},
  {name:"Phone", category:"electronics", price:20000, rating:5},
  {name:"Shirt", category:"clothes", price:1000, rating:3},
  {name:"Jeans", category:"clothes", price:2000, rating:4}
];

function displayProducts(list){
  let html = "";
  list.forEach(p=>{
    html += `<div class="card">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>⭐${p.rating}</p>
    </div>`;
  });
  document.getElementById("productList").innerHTML = html;
}

displayProducts(products);

// FILTER
function filterCategory(cat){
  if(cat === "all"){
    displayProducts(products);
  } else {
    let filtered = products.filter(p => p.category === cat);
    displayProducts(filtered);
  }
}

// SORT
function sortProducts(type){
  let sorted = [...products];
  if(type === "price"){
    sorted.sort((a,b)=>a.price-b.price);
  } else if(type === "rating"){
    sorted.sort((a,b)=>b.rating-a.rating);
  }
  displayProducts(sorted);
}

// TODO WITH LOCAL STORAGE
function loadTasks(){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let html = "";
  tasks.forEach((t,i)=>{
    html += `<div class="todo-item">
      ${t}
      <button onclick="deleteTask(${i})">X</button>
    </div>`;
  });
  document.getElementById("taskList").innerHTML = html;
}

function addTask(){
  let input = document.getElementById("taskInput");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  loadTasks();
}

function deleteTask(i){
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(i,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

loadTasks();

// CONTACT FORM
function submitForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name==="" || email===""){
    document.getElementById("msg").innerText="Fill all fields!";
  } else {
    document.getElementById("msg").innerText="Submitted!";
  }
}