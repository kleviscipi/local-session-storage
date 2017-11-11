
const isactive = true;

let Debug= {
	
	show:function(txt){
		if(isactive){
			console.log("Debug is active.....")
			console.log(txt)
		}

	}
}

module.exports = Debug.show