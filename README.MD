
##Web Local && Session Storage


##INSTALL
`npm install local-session-storage`


##EXAMPLES

```js
let Storage = require('local-session-storage');

or

import Storage from 'local-session-storage';

```

On React js set your storage after setState()

```js

handleChange(event){
	
	let name 	= event.target.name
	let value 	= event.target.value;
	
	this.setState((state)=>{
		return{[name]:value}
	})
	/***LOCAL**/
	Storage.Local.set('objname',{[name]:value})
	
	/***OR SESSION**/
	Storage.Session.set('objname',{[name]:value})

}

```


On React js get your storage on refresh page ore on change component and return to it

```js

	componentDidMount(){

		/*****WE USE THE LIVE FUNC******
		* On react if you use a normat localStorage.getItem you dont have the last value but one older value.
		* On package local-session-storage is used the Promise resolve
		* And for this example you can use:
		***************************/

		/******LOCAL*********/
		Storage.Local.getLive('objname',function(storage){
			/***NOW CHANGE THE STATE***/

			this.setState((state)=>{
				return Object.assign({},state,storage)
			})

			/***NOW YOU HAVE THE LAST VALUE ON STATE**/
		})

		/***SESSION*****/
		Storage.Local.getLive('objname',function(storage){
			/***NOW CHANGE THE STATE***/

			this.setState((state)=>{
				return Object.assign({},state,storage)
			})

			/***NOW YOU HAVE THE LAST VALUE ON STATE**/
		})

		/**Normaly you can use**/

		let storage = Storage.Local.get('objname');
		let session = Storage.Session.get('objname');
	}

```

Clear && Remove 

```js
	
	Storage.Local.clear(); // clear all obj on local storage for you domain
	Storage.Session.clear(); // clear all obj on local storage for you domain

	Storage.Local.remove('objname') // remove the objname name with values on local storage
	Storage.Session.remove('objname') // remove the objname name with values on session storage

```

Note: This examples are for react js but you can use this library on all js framework 



Thank You