// DOING THE DO
function constructInput() {
	this.pillCheck = getPillSelect('pillContainer');
	this.nerosLuck = this.pillCheck.indexOf('Nero\'s Luck') !== -1 ? true : false;
	this.arativasSpirit = this.pillCheck.indexOf('Arativa\'s Spirit') !== -1 ? true : false;
	this.solasdrake = this.pillCheck.indexOf('Solasdrake') !== -1 ? true : false;
	this.shadowdrake = this.pillCheck.indexOf('Shadowdrake') !== -1 ? true : false;
	this.species = document.getElementById('selectSpecies').value || false;
	this.gender = document.getElementById('selectGender').value || false;
	this.rank = document.getElementById('selectRank').value || false;
	this.build = document.getElementById('selectBuild').value || false;
	this.earTrait = document.getElementById('selectEars').value || false;
	this.tailTrait = document.getElementById('selectTail').value || false;
	this.bonusTrait = document.getElementById('selectBonusTrait').value || false;
	this.coatColour = document.getElementById('selectCoatColour').value || false;
}

function constructPup() {
	this.species = handleSpecies() || 'species';
	this.gender = handleGender() || 'gender';
	this.status = handleStatus() || 'status';
	this.rank = handleRank() || 'rank';
	this.build = handleBuild() || 'build';
	this.mutation = handleMutation();
	this.genotype = handleGenotype() || 'genotype';
	this.phenotype = handlePhenotype() || 'phenotype';
	this.skills = handleSkills() || 'skills';
	this.runes = handleRunes() || 'runes';
	this.hereditaryTraits = handleHereditaryTraits();
}

let input = {};
function buttonPress() {
	document.getElementById("output").innerHTML = ``;
	input = new constructInput();
	const litterSize = 1;
	for (let i = 1; i <= litterSize; i++) {
		const pup = new constructPup();
		document.getElementById("output").innerHTML += i > 1 && `<br><br>` || ``;
		document.getElementById("output").innerHTML += `${i}) ${pup.species}, ${pup.gender}, ${pup.status}, ${pup.rank}`;
		document.getElementById("output").innerHTML += `<br>B: ${pup.build}`;
		document.getElementById("output").innerHTML += pup.mutation !== false && `<br>M: ${pup.mutation}` || ``;
		document.getElementById("output").innerHTML += `<br>G: ${pup.genotype}`;
		document.getElementById("output").innerHTML += `<br>P: ${pup.phenotype}`;
		document.getElementById("output").innerHTML += `<br><b>Skills:</b> ${pup.skills}`;
		document.getElementById("output").innerHTML += `<br><b>Runes:</b> ${pup.runes}`;
		document.getElementById("output").innerHTML += pup.hereditaryTraits !== false && `<br><b>Hereditary Traits:</b><br>${pup.hereditaryTraits}` || ``;
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

const mutationsRandom = [
	'Albino',
	'Celestial',
	'Chimera',
	'Deaf and Blind',
	'Sclera',
	'Polycoria',
];

const mutationsInbred = [
	'Amputated',
	'Angels Gift',
	'Blind and Deaf',
	'Harlequin',
	'Optical',
	'Zombified',
];

const coatColours = {
	common: [
		'Daybreak',
	],
	uncommon: [
		'Ocean',
	],
	rare: [
		'Midnight',
	],
};

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
	const modifier = input.nerosLuck && input.arativasSpirit && 0 || input.nerosLuck && !input.arativasSpirit && 10 || !input.nerosLuck && input.arativasSpirit && -10 || 0; 
	return input.gender || rngList([[50 + modifier, 'Male'],[100 + modifier, 'Female']], 100);
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
	const modifier = input.solasdrake && input.shadowdrake; 
	return input.solasdrake && !input.shadowdrake && rng(100) <= 15 && randomizer(mutationsRandom) || 
	!input.solasdrake && input.shadowdrake && rng(100) <= 15 && randomizer(mutationsInbred) || 
	rng(100) <= 5 && randomizer(mutationsRandom) ||
	false;
}

function handleGenotype() {
	return;
}

function handlePhenotype() {
	return input.coatColour || randomizer(rngList([[70, coatColours.common],[95, coatColours.uncommon],[100, coatColours.rare]], 100));;
}

function handleSkills() {
	return;
}

function handleRunes() {
	return;
}

function handleHereditaryTraits() {
	return false;
}

// PAGE SETUP
populate('pillContainer', ['Nero\'s Luck', 'Arativa\'s Spirit', 'Solasdrake', 'Shadowdrake'], 'pillSelect');
populate('selectSpecies', species, 'optGroup');
populate('selectGender', ['Male','Female'], 'simple');
populate('selectRank', ['Runt Rank', 'Omega Rank'], 'simple');
populate('selectBuild', builds, 'optGroup');
populate('selectEars', ears, 'simple');
populate('selectTail', tails, 'simple');
populate('selectBonusTrait', bonusTraits, 'simple');
populate('selectCoatColour', coatColours, 'optGroup');