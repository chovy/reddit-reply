var fs = require('fs');
var app = exports.module = {};


app.init = function(){
	fs.writeSync('./test.log', 'daemonized!');
};
