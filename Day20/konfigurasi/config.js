let mong = require('mongoose');

let database = {
	user : 'doni',
	pass : 'h4g4t4doniozan',
	url : 'ds113835.mlab.com:13835',
	name : 'dbpelatihan'
}

mong.connect('mongodb://'+database.user+':'+database.pass+'@'+database.url+'/'+database.name);