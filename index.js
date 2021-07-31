const chalk = require('chalk');

const styledTerminal = (e) => {
	console.log(
		chalk.black.bold.bgCyan(
			'   TMWD version terminal style   '
		)
	);
	console.log(
		chalk.magenta(
			'A simple styled terminal in process...'
		)
	);
};

module.export = styledTerminal();
