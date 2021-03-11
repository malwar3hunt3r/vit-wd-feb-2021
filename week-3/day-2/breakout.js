var Item = document.getElementById("username"); 



function createItem() {

    var cItem = document.getElementById("list")
    var newItem = document.createElement('p');
    newItem.innerText = username.value
    cItem.appendChild(newItem);

}


//create and append to the ul