// DOING THE DO
function constructInput() {
	this.species = document.getElementById('selectSpecies').value || false;
	this.gender = document.getElementById('selectGender').value || false;
	this.rank = document.getElementById('selectRank').value || false;
	this.build = document.getElementById('selectBuild').value || false;
	this.earTrait = document.getElementById('selectEars').value || false;
	this.tailTrait = document.getElementById('selectTail').value || false;
	this.bonusTrait = document.getElementById('selectBonusTrait').value || false;
}

function constructPup() {
	this.species = handleSpecies() || 'species';
	this.gender = handleGender() || 'gender';
	this.status = handleStatus() || 'status';
	this.rank = handleRank() || 'rank';
	this.build = handleBuild() || 'build';
	this.mutation = handleMutation() || 'mutation';
	this.genotype = handleGenotype() || 'genotype';
	this.phenotype = handlePhenotype() || 'phenotype';
	this.skills = handleSkills() || 'skills';
	this.runes = handleRunes() || 'runes';
	this.hereditaryTraits = handleHereditaryTraits() || 'hereditary traits';
}

let input = {};
function buttonPress() {
	document.getElementById("output").innerHTML = ``;
	input = new constructInput();
	const litterSize = 1;
	for (let i = 1; i <= litterSize; i++) {
		const pup = new constructPup();
		if (i > 1) { document.getElementById("output").innerHTML += `<br><br>`; }
		document.getElementById("output").innerHTML += `${i}) ${pup.species}, ${pup.gender}, ${pup.status}, ${pup.rank}
		<br>B: ${pup.build}
		<br>M: ${pup.mutation}
		<br>G: ${pup.genotype}
		<br>P: ${pup.phenotype}
		<br><b>Skills:</b> ${pup.skills}
		<br><b>Runes:</b> ${pup.runes}
		<br><b>Hereditary Traits:</b>
		${pup.hereditaryTraits}`;
	}
}

// LISTS
const species = {
	common: [
		'Velox',
		'Hexin',
		'Enquisitors',
	],
	uncommon: [
		'Arcid',
		'Zinner',
	],
	rare: [
		'Zephies',
		'Minkins',
		'Funia',
	],
};

const builds = {
	common: [
		'Natural Build',
	],
	uncommon: [
		'Sphynx Build',
		'Satin Build',
		'Ridgeback Build',
	],
	rare: [
		'Leo Build',
	],
};

const ears = [
	'Folded Ears',
	'Standard Ears',
	'Rounded Ears',
	'Pointed Ears',
	'Tipsy Ears',
	'Furred Ears',
	'Horned Ears',
];

const tails = [
	'Curled Tail',
	'Half Tail',
	'Double Tail',
	'Kyuubi Tail',
	'Fin Tail',
	'Equus Tail',
	'Leopard Tail',
	'Tuft Tail',
];

const bonusTraits = [
	'Fangs',
	'Horns',
	'Spikes',
	'Tusks',
	'Quills',
	'Elemental',
	'Theri Claws',
	'Fins',
	'Scales / Armor Plates',
	'Antennas',
	'Dragon Vines',
];

// const hereditaryTraits = {
// 	common: [
// 		'Hunter',
// 		'Feathery Flyer',
// 		'Bone Crusher',
// 		'Fisher',
// 		'Explorer',
// 		'Camper',
// 	],
// 	uncommon: [

// 	],
// 	rare: [

// 	],
// 	unique: [

// 	],
// }

// HANDLERS
function handleSpecies() {
	return input.species || randomizer(rngList([[70, species.common],[95, species.uncommon],[100, species.rare]], 100));
}

function handleGender() {
	return input.gender || rngList([[50, 'Male'],[100, 'Female']], 100);
}

function handleStatus() {
	return 'Healthy';
}

function handleRank() {
	return input.rank || rngList([[95, 'Runt Rank'],[100, 'Omega Rank']], 100);
}

function handleBuild() {
	const b = input.build || randomizer(rngList([[70, builds.common],[95, builds.uncommon],[100, builds.rare]], 100));
	const e = input.earTrait || rng(100) <= 10 && `${randomizer(ears)}` || ``;
	const t = input.tailTrait || rng(100) <= 10 && `${randomizer(tails)}` || ``;
	const bt = input.bonusTrait || rng(100) <= 10 && `${randomizer(bonusTraits)}` || ``;
	return [b, e, t, bt].filter(Boolean).join(', ');
}

function handleMutation() {
	return;
}

function handleGenotype() {
	return;
}

function handlePhenotype() {
	return;
}

function handleSkills() {
	return;
}

function handleRunes() {
	return;
}

function handleHereditaryTraits() {
	return;
}

// PAGE SETUP
populate('selectSpecies', species, 'optGroup');
populate('selectGender', ['Male','Female'], 'simple');
populate('selectRank', ['Runt Rank', 'Omega Rank'], 'simple');
populate('selectBuild', builds, 'optGroup');
populate('selectEars', ears, 'simple');
populate('selectTail', tails, 'simple');
populate('selectBonusTrait', bonusTraits, 'simple');