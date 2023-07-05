var todolist = document.getElementById("todolist");
    var addbtn = document.getElementById("addButton");
    var removeButton = document.getElementById("removeButton");
    var todoli = todolist.getElementsByTagName("li");

    addbtn.addEventListener("click", function () {
      var inputText = document.getElementById("inputBox").value;
      if (inputText != null && inputText != "") {
        var newelement = document.createElement("li");
        var delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        var textnode = document.createTextNode(inputText);

        newelement.id = "item" + (todolist.childElementCount + 1);
        let x = newelement.id;
       
        delbtn.onclick = function () {
          var y = document.getElementById(x);
          var parent = y.parentElement;
          parent.removeChild(y);
        };
        
        newelement.appendChild(textnode);
        newelement.appendChild(delbtn);
        todolist.appendChild(newelement);
      } else {
        alert("give some value");
      }
    });

    removeButton.addEventListener("click", function () {
      if (todoli.length != 0) {
        todolist.removeChild(todolist.firstElementChild);
      } else {
        alert("list is empty");
      }
    });

    var updatebtn = document.getElementById("updateButton");
    updatebtn.addEventListener("click", function () {
      var inputText = document.getElementById("inputBox").value;
      var newelement = document.createElement("li");
      var textnode = document.createTextNode(inputText);
      newelement.appendChild(textnode);
      var firstchild = todolist.firstChild;
      todolist.replaceChild(newelement, firstchild);
    });