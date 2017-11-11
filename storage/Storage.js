let Debug = require('./debug');

class Storage{
	constructor(core){
		//stafs here
		this.core = core
	}
	getLive(obj_name,callback){
		
		if(typeof callback !== "function"){
			Debug("Callback is not a function");
		}else{
			if( obj_name !=="undefined" && obj_name !== null ){
				return asyncGet(obj_name).then((values)=>{
					return asynGet(obj_name);
				}).then((values)=>{
					/***************CALLBACK FUNC******************
					*   local storage is sunc and we set a callbacn function 
					*  	for getting live values
					*
					*********************************************/
					callback(values)
				})
			}else{
				return {};
			}
		}

	}
	get(obj_name){
		if( obj_name !== "undefined" && obj_name !== null ){
			 return JSON.parse(window[this.core].getItem(obj_name));
		}else{
			Debug("Obj name is empty");
			return {};
		}
	}
	set(obj_name,values = null){
		if( obj_name !=="undefined" && obj_name !== null ){
			/*************************************
			* WE USE Object assign for merge the last obj with new
			*
			***************************************/
			let val = Object.assign({}, JSON.parse(window[this.core].getItem(obj_name)) ,values )
			window[this.core].setItem(obj_name, JSON.stringify(val));
		}else{
			Debug('undefined or null obj_name on LocalStorage.set func');
		}
	}
	clear(){
		window[this.core].clear()
	}
	remove(obj_name){
		if(obj_name !== null || typeof obj_name !== "undefined"){
			window[CORE_STORAGE].removeItem(obj_name)
		}else{
			Debug("Check the obj, it is empty  or undefined")
			Debug(obj_name)
		}
	}
	asyncSet(obj_name,value){
		/**
		* Set the promise function for resolve the live values
		*
		**/
		return  Promise.resolve().then(function(){
            window[this.core].setItem(key, value);
		})
	}
	asyncGet(obj_name){
		/**
		*
		* Set the promise function for resolve the live values
		*
		**/
		return  Promise.resolve().then(function(){
			return JSON.parse(window[this.core].getItem(obj_name))
		})
	}
	length(obj_name){
		//TODO
	}
	lengthAll(obj_name){
		//TODO
	}
	msg(){
		
		Debug("Hello from local storage");
	}
}


module.exports = Storage