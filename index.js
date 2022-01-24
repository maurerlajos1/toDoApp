// document.getElementById("todoInput").addEventListener("click", myFunction);
let i=0;

function myFunction() {
    
let todoListHtml = document.getElementById("todoListContainer")
let inputValue = document.getElementsByClassName("todoInput")[0].value;

// console.log('<div class="deleteItem" onclick="deleteItem('+ i +')" >X</div>')

todoListHtml.innerHTML =  todoListHtml.innerHTML + '<div class="singleListItemContainer"> <div class="listItem">' + inputValue + '</div>' +
'<div class="deleteItem" onclick="deleteItem('+i+ ')" >X</div> </div>';



document.getElementsByClassName("todoInput")[0].value = '';
i++;
}

function deleteItem( a ){
    if(document.getElementsByClassName("singleListItemContainer")[a]){
    document.getElementsByClassName("singleListItemContainer")[a].remove();
}
    //document.getElementsByClassName("deleteItem")[a].innerHTML = '';
    
}