const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-Container")

function addTask(){
if(inputBox.value === ""){
  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Write Something First',
      footer: '<a href="">Why do I have this issue?</a>'
  })
}
else{
  let li = document.createElement("li")
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7"
  li.appendChild(span)

}
inputBox.value = ""
saveData()

}
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked")
  saveData()
}
else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove()
  saveData()
}
},false)

function saveData(){
  localStorage.setItem("data" , listContainer.innerHTML)
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask()


// TODO BY OWN CODE LONG METHOD

// function addTodo() {
//   var todo = document.getElementById("todo");
//   var list = document.getElementById("list");

//   console.log(todo.value);

//   var li = document.createElement("li");
//   var text = document.createTextNode(todo.value);
//   li.appendChild(text);
//   var delButton = document.createElement("button");
//   var delText = document.createTextNode("Delete");
//   delButton.appendChild(delText);
//   delButton.setAttribute("onclick", "delTodo()");
//   var editButton = document.createElement("button");
//   var editText = document.createTextNode("Edit");
//   editButton.appendChild(editText);
//   editButton.setAttribute("onclick", "editTodo()");
//   li.appendChild(delButton);
//   li.appendChild(editButton);
//   list.appendChild(li);
//   todo.value = "";
// }

// function delTodo() {
//   event.target.parentNode.remove();
// }

// function editTodo() {
//   var oldValue = event.target.parentNode.firstChild.nodeValue;
//   var editvalue = prompt("enter updated value", oldValue);
//   event.target.parentNode.firstChild.nodeValue = editvalue;
//   console.log();
// }
// function deleteAll() {
//   var list = document.getElementById("list");
//   list.innerHTML = "";
// }

// TODO BY METHOD SHORT WAY

// function addTodo() {
//   var list = document.getElementById("listContainer");
//   var todo = document.getElementById("todo");
//   listContainer.innerHTML = `
// <li>
// <input class= 'todo-input' type = 'text' value='${todo.value}' disabled/>
// <button onclick='delTodo()'>Delete</button> 
//  <button onclick='editTodo(this)'>Edit</button>
// </li>
// `

// }
// function delTodo() {
//   event.target.parentNode.remove();
// }

// var edit = false;
// function editTodo(e) {
//   //   var oldValue = event.target.parentNode.firstChild.nodeValue;
//   //   var editvalue = prompt("enter updated value", oldValue);
//   //   event.target.parentNode.firstChild.nodeValue = editvalue;
//   if (edit) {
//     e.parentNode.childNodes[1].disabled = true;
//     e.parentNode.childNodes[1].blur();
//     e.parentNode.childNodes[5].innerHTML = "Edit";
//     edit = false;
//   } else {
//     e.parentNode.childNodes[1].disabled = false;
//     e.parentNode.childNodes[1].focus();
//     e.parentNode.childNodes[5].innerHTML = "Update";
//     edit = true;
//   }
// }
// function deleteAll() {
//   var list = document.getElementById("list-container");
//   list.innerHTML = "";
// }
