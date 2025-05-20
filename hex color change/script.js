let changebtn = document.getElementById("change_btn");
let showHex = document.getElementById("hex_code");

function changeColor() {
  var hexCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  var hexCombination = "";

  for (var i = 0; i < 5; i++) {
    var generatedCode = Math.floor(Math.random() * hexCodes.length);

    hexCombination += hexCodes[generatedCode];

    showHex.innerHTML = hexCombination;
    document.getElementsByTagName("body")[0].style.background =
      "#" + hexCombination;
  }
}

changebtn.addEventListener("click", (ev) => {
  changeColor();
  //console.log(hexCombination);
});
