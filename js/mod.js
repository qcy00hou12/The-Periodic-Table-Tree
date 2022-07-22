let modInfo = {
	name: "The Periodic Table Tree",
	id: "118",
	author: "Bilboy",
	pointsName: "Element(s)",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.6",
	name: "Carbon",
}

let changelog = `<h1>Changelog:</h1><br><br>
<h3>v1.6</h3><br>
		- Even newer layer!?<br>
		- Updated credits<br>
		- Added and modified vues<br>
		- Some grammatical fixes<br><br>
<h3>v1.5</h3><br>
		- Finished newest layer<br>
		- Improved particle system<br><br>
<h3>v1.4.5</h3><br>
		- Added a new layer <br>
		- Added animations (toggle in settings)<br><br>
<h3>v1.4</h3><br>
		- Added a new layer <br>
		- Updated Save Bank <br>
		- Change transparency of Achievements <br>
		- Added mobile mode (low graphics) and particles toggle in settings. <br><br>
<h3>v1.3</h3><br>
		- Added challenges to newest layer. <br>
		- Improved Particle System again. <br>
		- More mobile support again. <br>
		- QoL stuff <br><br>
	<h3>v1.2.5</h3><br>
		- Improved Particle System. <br>
		- More mobile support. <br><br>
	<h3>v1.2</h3><br>
		- MEGA REBALANCING. <br>
		- Added new layer. <br><br>
	<h3>v1.1</h3><br>
		- REBALANCING.<br><br>
	<h3>v1.0</h3><br>
		- Added new layers.<br>
		- Fixed some performance and visual issues.`

let winText = `Congratulations! You have reached the end and beaten this game, but what have you missed and what will you gain from going further in? Holy, you actually did that? You're a trooper. Anyway, for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return false
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	if (player.C.Levelptm >= 200 && player.C.Levelftm >= 200 && player.C.LevelM >= 200 && player.C.LevelE >= 200 && player.C.LevelC >= 200 && player.C.Levelp >= 200 && player.C.LevelG >= 200 && player.C.LevelJ >= 200 && player.C.LevelB >= 200 && player.C.Levelf >= 200 && player.C.LevelJB >= 200 && player.C.Levelpe >= 200 && player.C.LevelR >= 200 && player.C.LevelD >= 200 && player.C.Levelt >= 200 && player.C.LevelW >= 200) return true
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}