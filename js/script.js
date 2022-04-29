function wrap (execute) {
  console.log(execute)
  // Return modified function
  
  return(
  () => {try {
  	return execute();
  }
  catch(err) {
  	return null;
  }
  })
  	
}

var errorExec = wrap(function () {
  throw new Error('Error');
});
var resultExec = wrap(function () {
  return "Result";
});
console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"










// function sortByPriceAscending(jsonString) {
//   // Your code goes here

//   let sorted = JSON.parse(jsonString).sort((a, b) => {
    
//     if (a.price != b.price){
//       return a.price - b.price;  
//     } else {
//       return a.name > b.name ;  
//     }
    
  
//   });

//     return ( JSON.stringify(sorted));
// }

// console.log(sortByPriceAscending('[{"name":"eggs","price":9.99},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));












// function setup() {
//   // Write your code here.
  
//   document.getElementById("postComment").addEventListener('click', ()=>{
  	
//     let node = document.createElement("li");
//     console.log(node);
//     const text = document.createTextNode(document.getElementById("comment").value);
//     console.log(text);
//     node.appendChild(text);
//     console.log(node);
//     document.getElementById("commentList").appendChild(node);
    

//   });
// }

// // Example case. 
// document.body.innerHTML = `
// <ul id='commentList'>
// </ul>
// <form>
//   <input type='text' id='comment'/>
//   <input type='button' id='postComment' value='Post'/>
// </form>`;

// setup();

// document.getElementById("comment").value = "test"; 
// document.getElementById("postComment").click();
// console.log(document.body.innerHTML);

// commentList

// const node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" 