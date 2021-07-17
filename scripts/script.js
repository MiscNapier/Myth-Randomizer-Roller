// DOING THE DO
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

function setOutput() {
	document.getElementById("output").innerHTML = ``;
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

function buttonPress() {
	setOutput();
}

// HANDLERS
function handleSpecies() {
	return;
}

function handleGender() {
	return rngList([[50,'Male'],[100,'Female']], 100);
}

function handleStatus() {
	return 'Healthy';
}

function handleRank() {
	return rngList([[95,'Ruby Rank'],[100,'Omega Rank']], 100);
}

function handleBuild() {
	return;
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