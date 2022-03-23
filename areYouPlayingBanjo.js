function areYouPlayingBanjo(name) {
	if (name.charAt(0).toLowerCase() === 'r') {
		return `${name} plays`;
	} else return `${name} does not play banjo`;
}
