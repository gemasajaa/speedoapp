const vc = require('./viewconfig');
const fm = require('./fileH');
module.exports = {
	go(scene,req,res){
		fm['/html'](vc[scene],res,`view`,{'content-type':'text/html'})
	}
}