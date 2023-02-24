// start off not blank
// Simulate a button click when the page loads
window.addEventListener("load", function () {
	fn_updateAppearance();
	fn_updatePersonal();
	new ClipboardJS(".btn");
});


// Functions
function fn_updateText(id, text) {
	// Get the element to change
	let element = document.getElementById(id);
	// Change the text content of the element
	element.textContent = text;
}

function fn_updateAppearance() {
	var eyes = _.upperFirst(
		_.trim(_.sample(eyeAdj) + " " + _.sampleSize(eyeColors) + " eyes")
	);
	var hair = _.upperFirst(
		_.sample(hairLen) + " " + _.sample(hairAdj) + " " + _.sampleSize(hairColors) + " hair"
	);
	fn_updateText("attEyes", eyes);
	fn_updateText("attHair", hair);
	// add to the prompt too
	fn_updateText("appearancePrompt", _.join([eyes, hair], ", "));
}

function fn_updatePersonal() {
	var randomElements = _.map(
		_.sampleSize(attributes, _.random(2, 5)),
		_.upperFirst
	);
	let liElements = randomElements.map((text) => {
		let li = document.createElement("li");
		li.textContent = text;
		return li;
	});
	var ulElement = document.getElementById("attPersonal");
	// Clear any existing <li> elements
	ulElement.innerHTML = "";
	liElements.forEach((li) => {
		ulElement.appendChild(li);
	});
	// add to the prompt too
	fn_updateText("personalPrompt", _.join(randomElements, ", "));
}

var eyeColors = ["amber", "blue", "brown", "green", "gray", "hazel", "pink"];
var eyeAdj = [
	"calm",
	"striking",
	"piercing",
	"plain",
	"wide",
	"beautiful",
	"happy",
	"twinkling",
	"dazzling",
	"vapid",
	"watchful",
	"hopeful",
	"clear",
	"expressive",
	"magnificent",
	""
];
var hairColors = ["blue", "green", "gray", "silver", "brown", "pink", "orange"];
var hairLen = ["long", "medium", "short"];
var hairAdj = ["curly", "silky", "luscious", "delicate", "frizzy", "wavy", "straight"];
var attributes = [
	"considerate of others",
	"calm under stress",
	"silly",
	"charming",
	"always telling jokes",
	"afraid of everything",
	"always smells good",
	"loves to relax",
	"suspicious of everyone",
	"sarcastic",
	"bitter",
	"bright",
	"overcritical",
	"very emotional",
	"impulsive",
	"energetic",
	"withdrawn",
	"likeable",
	"reserved",
	"holds a grudge",
	"aloof",
	"goofy",
	"rational",
	"analytical",
	"cautious",
	"charming",
	"theatrical",
	"adaptable",
	"peaceful",
	"curious",
	"sensitive",
	"easily impressed",
	"easily discouraged",
	"easily intimidated",
	"stubborn",
	"assertive",
	"distant",
	"steadfast",
	"genuine",
	"distractable",
	"intuitive",
	"enthusiastic",
	"spontaneous",
	"lazy",
	"loyal and dependable",
	"consistent",
	"gossip prone",
	"observant",
	"crude",
	"dedicated",
	"honest",
	"dishonest",
	"hospitable",
	"careless",
	"socially awkward",
	"cunning",
	"manipulative",
	"neat and organized",
	"cluttered and disorganized",
	"hardworking"
];