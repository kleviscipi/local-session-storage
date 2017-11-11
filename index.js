/***************************************************************
*						CORE STORAGE 
* 		      		SESSION && LOCAL
*			FOR REACT DATA AND ALL JAVASCRIPT FRAMEWORK
*	SET DATA STATE VALUES TO LOCAL STORAGE  OR SESSION SORAGE
*					
*   			Author : Klevis Cipi
*   			Email  : cipiklevis@gmail.com
*
******************************************************************/

const CoreLocal 	= 'localStorage'
const CoreSession  	= 'sessionStorage'
let Storage = require('./storage/Storage');

let Store = {
	Session  	:new Storage(CoreSession),
	Local 		:new Storage(CoreLocal)
}

module.exports = Store