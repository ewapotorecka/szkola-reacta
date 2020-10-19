const moment = require("moment");

function logDateAndTime() {
	const now = moment( Date.now() ).format('MMMM Do YYYY, h:mm:ss a');

	console.log( now );
}

logDateAndTime();