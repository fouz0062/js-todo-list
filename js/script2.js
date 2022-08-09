let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
  let todo = document.getElementById("todolist");
  let ul = document.getElementById("ul");
  let ul2 = document.getElementById("checked");
  let li = document.createElement("li");
  let p = document.createElement("p");
  let div = document.createElement("div");
  if (todo.value == "") {
    alert("Do not add empty lists");
    // return;
  } else {
    li.setAttribute("class", "list-items");

    //check
    let i1 = document.createElement("i");
    i1.setAttribute("class", "fa-solid fa-check check");
    i1.onclick = completeToDo;

    //edit
    // let i2 = document.createElement("i");
    // i2.setAttribute("class", "fa-solid fa-pen-to-square edit");
    // i2.onclick = editToDo;

    //delete
    let i3 = document.createElement("i");
    i3.setAttribute("class", "fa-solid fa-trash-can delete");
    i3.onclick = deleteToDo;

    div.append(i1, i3);
    li.append(p, div);
    p.textContent = todo.value;
    p.setAttribute("contenteditable", "true");

    ul.append(li);
    todo.value = "";

    //del
    function deleteToDo(event) {
      console.log(event.target.getAttribute("data-delete"));
      let tag = event.target.parentNode.parentNode;
      tag.remove();
    }

    //edit
    // function editToDo(event) {
    //   console.log(event.target.getAttribute("data-edit"));
    //   event.target.parentNode.parentNode.firstChild.setAttribute(
    //     "contenteditable",
    //     "true"
    //   );
    // }

    //check
    function completeToDo(event) {
      console.log(event.target.parentNode.parentNode);
      let temp = event.target.parentNode.parentNode;
      temp.classList.toggle("chk");
      //temp.classList.toggle("active");
      if (temp.classList.contains("chk")) ul2.appendChild(temp);
      else ul.appendChild(temp);
    }
  }
});
