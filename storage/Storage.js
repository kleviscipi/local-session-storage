let Debug = require('./debug');

class Storage{
	constructor(core){
		//stafs here
		this.core = core
	}
	getLive(key,callback){
		
		if(typeof callback !== "function"){
			Debug("Callback is not a function");
		}else{
			if( typeof key !== "undefined" && key !== null && typeof key === 'string' ){
				
				let that_ = this
				return that_.asyncGet(key).then((values)=>{
					return that_.asyncGet(key);
				}).then((values)=>{
					/***************CALLBACK FUNC******************
					*   local storage is sunc and we set a callbacn function 
					*  	for getting live values
					*
					*********************************************/
					callback(values)
				})					

			}else{

				callback(null)
			}
		}

	}
	get(key){
		if( typeof key !== "undefined" && key !== null && typeof key === "string"  ){
			 return JSON.parse(window[this.core].getItem(key));
		}else{
			Debug("Key name is empty or is undefined or is not a string");
			return {};
		}
	}
	set(key,values = null){
		if( typeof key !=="undefined" && key !== null && typeof  key === "string" ){
			/*************************************
			* WE USE Object assign for merge the last obj with new
			*
			***************************************/
			let that_ = this
			let val = Object.assign({}, JSON.parse(window[that_.core].getItem(key)) ,values )
			window[that_.core].setItem(key, JSON.stringify(val));
		}else{
			Debug('undefined or null key on Storage.'+ this.core +'.set func');
		}
	}
	clear(){
		window[this.core].clear()
	}
	remove(key){
		if(key !== null && typeof key !== "undefined" && typeof key ==="string" ){
			window[this.core].removeItem(key)
		}else{
			Debug("Check the obj, it is empty  or undefined")
			Debug(key)
		}
	}
	asyncSet(key,value){
		/**
		* Set the promise function for resolve the live values
		*
		**/
		let that_ = this
		return  Promise.resolve().then(function(){
            window[that_.core].setItem(key, value);
		})
	}
	asyncGet(key){
		/**
		*
		* Set the promise function for resolve the live values
		*
		**/
		let that_ = this
		return  Promise.resolve().then(function(){
			return JSON.parse(window[that_.core].getItem(key))
		})
	}
	length(key){
		if(key !== null && typeof key !== 'undefined' && typeof key === "string"){
			let that_   = this
			let obj 	= JSON.parse(window[that_.core].getItem(key))	
			
			if( typeof obj === "object"){
				return Object.keys(obj).length
			}else if(Array.isArray(obj)){
				return obj.length
			}else{
				return 0;
			}
		}else{

			Debug("Key name is empty");
		}
		
	}
	lengthAll(){
		return window[this.core].length;
	}
	msg(){
		
		Debug("Hello from local storage");
	}
}


module.exports = Storage