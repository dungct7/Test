function checkDriverAge(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
			alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
} 
let user 
var list = ["tiger", "cat", "dog"];

var number = [1,4,3525,123];
number.sort(function(a,b) { return a - b;});

number.splice(0,1, 245); //Cắt từ vị trí 0 đi 1 phần tử và thêm vào 

var user = {
	name: "John",
	age: 14,
	isMarried: false,
	spells: ["Fire", "Water", "Earth"],
	action: function() {
		console.log("adsf");
	},
};

user.favorite = "bimbim";