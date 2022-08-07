let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
  let todo = document.getElementById("todolist");
  let ul = document.getElementById("ul");
  let ul2 = document.getElementById("checked");
  let li = document.createElement("li");
  let p = document.createElement("p");
  let div = document.createElement("div");
  div.innerHTML =
    '<i class="fa-solid fa-check check" data-check=""></i>' +
    " " +
    '<i class="fa-solid fa-pen-to-square edit" data-edit=""></i>' +
    " " +
    '<i class="fa-solid fa-trash-can delete"></i>';
  if (todo.value == "") {
    alert("Do not add empty lists");
  } else {
    li.setAttribute("class", "list-items");
    let count = document.querySelectorAll("li").length;
    //console.log(count);
    temp = div.innerHTML;
    div.innerHTML = temp.replace('data-edit=""', `data-edit="${count}"`);
    div.innerHTML = temp.replace('data-check=""', `data-check="${count}"`);

    li.append(p, div);
    p.textContent = todo.value;
    p.setAttribute("data-class", count);

    ul.append(li);
    todo.value = "";
    // delete button
    let del = document.querySelectorAll(".delete");
    del.forEach((button) => {
      button.addEventListener("click", (event) => {
        let tag = event.target.parentNode.parentNode;
        tag.remove();
        //console.log(tag);
      });
    });
    //edit
    let edit = document.querySelectorAll(".edit");
    edit.forEach((button, i) => {
      button.addEventListener("click", (event) => {
        let s = button.getAttribute("data-edit");
        let d = event.target.getAttribute("data-edit");
        console.log(s + "=" + d + "=" + i + "=" + this);
        if (s == d) {
          //   let change = prompt("Edit List Name");
          //   if (change == "" || change == null) return;
          //   event.target.parentNode.parentNode.firstChild.innerText = change;
          document.querySelectorAll("[data-class]")[d].innerText = "fouzi";
          console.log(document.querySelectorAll("[data-class]")[d].innerText);
          event.target.parentNode.parentNode.firstChild.setAttribute(
            "contenteditable",
            "true"
          );
        }
      });
    });

    //check;
    let check = document.querySelectorAll(".check");
    check.forEach((button) => {
      button.addEventListener("click", (event) => {
        //p.setAttribute("style", "text-decoration: line-through");
        // button.classList.toggle("active");
        // console.log(event.target.classList.contains("active"));
        // if (event.target.classList[3] == "active") {
        //   //   let ul2 = document.getElementById("checked");
        //   let temp = event.target.parentNode.parentNode;
        //   temp.setAttribute("class", "chk");
        //   ul2.append(temp);
        //   console.log("if");
        //   button.classList.remove("active");
        //   console.log(temp);
        // } else {
        //   //let ul = document.getElementById("ul");
        //   let temp1 = event.target.parentNode.parentNode;
        //   //temp.classList.remove("chk");
        //   temp1.setAttribute("class", "list-items");
        //   ul.append(temp1);
        //   button.classList.add("active");
        //   console.log("else");
        //   console.log(temp1);
        // }
        let s = button.getAttribute("data-check");
        let d = event.target.getAttribute("data-check");
        let temp = event.target.parentNode.parentNode;
        // console.log(
        //   s + "=" + d + "=" + "=" + event.target.parentNode.classList
        // );
        // console.log(event.target);
        if (event.target.classList[3] == "active") {
          event.target.classList.remove("active");
          //   let temp = event.target.parentNode.parentNode;
          //   temp.setAttribute("class", "chk");
          ul2.appendChild(temp);
          ul.removeChild(temp);
          //console.log("if");
          //console.log(event.target.classList[3]);
        } else {
          event.target.classList.add("active");
          //   let temp1 = event.target.parentNode.parentNode;
          //   temp1.setAttribute("class", "list-items"); // active == 2nd ul2, not activde == first ul
          ul.appendChild(temp);
          ul2.removeChild(temp);
          //   console.log("else");
          //   console.log(event.target.classList[3]);
        }
      });
    });
  }
});
