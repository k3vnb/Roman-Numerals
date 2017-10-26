// Back End
var userInput = "";
var numeralRom = [[1000, "M"], [900,"CM"],[ 500,"D"], [400,"CD"], [100,"C"], [90,"XC"], [50,"L"], [40,"XL"], [10, "X"], [9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];

var toRomanNumeral = function(int){
  if (int === 0) {
    return "";
  } else if (int > 3999) {
    return "Invalid Number";
  }
  for (var y = 0; y < numeralRom.length; y++){
      if (int >= numeralRom[y][0]){
        return numeralRom[y][1] + toRomanNumeral(int - numeralRom[y][0]);
      }
    }
};






// Front End
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#rom-num").val());
    var romanNumeral = toRomanNumeral(userInput);
    $("#result").append("<p>" + romanNumeral + "</p>")



  });
});
