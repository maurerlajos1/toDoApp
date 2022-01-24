// document.getElementById("todoInput").addEventListener("click", myFunction);
let i=0;
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
if(todoList.length>0)
{
    renderItems();
}

function renderItems(){
    let todoListHtml = document.getElementById("todoListContainer");
    todoListHtml.innerHTML ='';

for (let i = 0; i < todoList.length; i++) {
    todoListHtml.innerHTML +=   '<div class="singleListItemContainer"> <div class="listItem">' + 
    todoList[i].title + '</div> <div class="description">'+
    todoList[i].description + '</div>' +   
    '<div class="deleteItem" onclick="deleteItem('+i+ ')" >X</div> </div>';
    
}
window.localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addItem() {
 
let todoListItem = {
  title: document.getElementById("todoTitle").value,
  description: document.getElementById("toDoDescription").value
};

console.log(todoListItem);

todoList.push(todoListItem)

console.log(todoList);


renderItems();




document.getElementById("todoTitle").value = '';
document.getElementById("toDoDescription").value = '';
i++;
}



function deleteItem( index ){
    let reserverdArray= [];
    for (let i = 0; i < todoList.length; i++) {
             if(i==index){

             }
             else{
                reserverdArray.push(todoList[i]);

             }
        
    }

    todoList  = reserverdArray;
    renderItems();
}
    //document.getElementsByClassName("deleteItem")[a].innerHTML = '';
    
