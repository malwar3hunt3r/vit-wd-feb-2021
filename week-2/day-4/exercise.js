function increment() {
  // access the DOM element associated with the h1
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  console.log(numberText);
  if (numberText > 0) {
    numberText--;
  }
  h1Element.innerText = numberText;
}

function decrement() {
  // write code here
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
<<<<<<< HEAD
  numberText= numberText - 1 ;
  h1Element.innerText = numberText;

=======
  console.log(numberText);
  if (numberText < 10) {
    numberText++;
  }
  h1Element.innerText = numberText;
}
>>>>>>> 9fbcb841f482f259b23129f262be5d2db299cb82

}
// Done early? Try to add a blocker that doesnt go below 0 and above 10!




function randomize() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var myRandomNumbers = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = myRandomNumbers;
}
