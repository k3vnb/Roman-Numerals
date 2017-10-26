// Back End
// var numeralRom = [[1000, "M"], [900,"CM"],[ 500,"D"], [400,"CD"], [100,"C"], [90,"XC"], [50,"L"], [40,"XL"], [10, "X"], [9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
var rom = ["M", "CM", "D", "CD", "C", "XC", "L","XL", "X", "IX" ,"V" ,"IV" ,"I"];
var num = [1000, 900, 500, 400, 100, 90, 50, 40, 10,  9, 5, 4, 1];

var toRomanNumeral = function(int){
  var romanNumeral = "";
  if (int === 0) {
    return "";
  } else if (int > 3999) {
    return "Invalid Number";
  }
  // for (var y = 0; y < numeralRom.length; y++){
      // if (int >= numeralRom[y][0]){
      //   return numeralRom[y][1] + toRomanNumeral(int - numeralRom[y][0]);
      // }
    // }
    for (var y = 0; y < rom.length; y++) {
      while (int >= num[y]) {
        romanNumeral += rom[y];
        int -= num[y];
      }
    } return romanNumeral;
};






// Front End
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#rom-num").val());
    var romanNumeral = toRomanNumeral(userInput);
    $("#result").append("<li>" + romanNumeral + "</li>")



  });
});
