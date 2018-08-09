const internet = 60.0;
const pet_rent = 35.0;
//var rent_util = document.getElementById("rent_util").value;
//var electricity = document.getElementById("elec").value;
var numRoommates = 2.0;

var calc = function() {
    let rent_util = document.getElementById("rent").value;
    let electricity = document.getElementById("elec").value;
    console.log(rent_util);
    console.log(electricity);
     if(rent_util.trim() == '' || electricity.trim() == '') {
         document.getElementById("value").innerHTML = "Please input a number"
         return "Please input a number"
     }
     else {
        let rent_each = (rent_util - pet_rent) / numRoommates;
        let int_each = internet / numRoommates;
        let elec_each = electricity / numRoommates;
        var kev_total = rent_each + elec_each - int_each;
        console.log(kev_total);
        document.getElementById("value").innerHTML = kev_total;
      //  document.getElementById("value").innerHTML = "test changed";
        return kev_total;
     }
}
