/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var hold = document.getElementById("todo-list");
         var checkbox = document.createElement('input');
         checkbox.type = "checkbox";
         //checkbox.onclick = alert(50);
         checkbox.name = "chkbox1";
         checkbox.id = "cbid";
         checkbox.onclick = myfunction
            
         //checkbox.onclick = "count1()";
         var label = document.createElement('label');
         //var tn = document.createTextNode("Not A RoBot");
         //label.htmlFor="cbid";
         //label.appendChild(tn); 
        //hold.appendChild(label);
         hold.appendChild(checkbox);
       // hold.checked = true;
  var para = document.createElement("button");
var node = document.createTextNode("Todo");
para.appendChild(node);
var element = document.getElementById("todo-list");  
element.appendChild(para);
//para.onclick= myfunction1;
    // document.write("<br>");
   (itemCountSpan.innerHTML)++
  //document.write("<br>");
if (!hold.checked){
  (uncheckedCountSpan.innerHTML)++
  //alert("hello")
  }
  
  //if(hold.checked==true){
  //  (uncheckedCountSpan.innerHTML)--
 // }
  }

  function myfunction(){
    if(uncheckedCountSpan.innerHTML>0)
    (uncheckedCountSpan.innerHTML)--
  }
/*  
function myfunction1(){
  document.getElementById("button").remove();
}
*/
//function count1(){
//  (uncheckedCountSpan.innerHTML)--
//}
   
console.log('hi');