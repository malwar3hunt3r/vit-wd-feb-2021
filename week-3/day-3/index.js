function addItem(){

    var userInput = document.getElementById("userInput"); 

    var newItem = document.createElement('li');

    //asigns the inner Text of the element to the inserted text by the user
    newItem.innerText = userInput.value; 


    console.log("Value of DOM Item: ", newItem);



    var listItem = document.getElementById("taskList");

    listItem.appendChild(newItem);






}