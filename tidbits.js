//Decimal to bits Converter

function bitter(num) {
  var btt = "";
  while (num != 0) {
    btt += num % 2;
    num = parseInt((num /= 2));
  }
  return btt;
}
function flip(tid) {
  var fli = "";
  for (var i = tid.length - 1; i >= 0; i--) {
    fli += tid[i];
  }
  console.log(fli);
}
var bitCon = (toy) => {
  if (toy == 0) {
    console.log("00");
  } else if (toy == 1) {
    console.log("01");
  } else {
    flip(bitter(toy));
  }
};

bitCon(10); // insert your number between the brackets to turn them to bits!