// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(name === "" || email === ""){
    errorMsg.innerText = "All fields are required!";
  }
  else if(!email.match(emailPattern)){
    errorMsg.innerText = "Invalid Email Format!";
  }
  else{
    errorMsg.style.color = "green";
    errorMsg.innerText = "Form Submitted Successfully!";
  }
});

// TODO LIST FUNCTION
function addTask(){
  let input = document.getElementById("taskInput");
  let task = input.value;

  if(task === "") return;

  let div = document.createElement("div");
  div.classList.add("todo-item");

  div.innerHTML = `
    <span>${task}</span>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  document.getElementById("taskList").appendChild(div);

  input.value = "";
}