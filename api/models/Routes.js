/**
* Routes.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	authorID		: { type: 'string' },

  	title			: { type: 'string' },
  	description		: { type: 'JSON' },

  	type			: { type: 'string' },
  	waypoints		: { type: 'JSON' },

  	comments		: { type: 'JSON' },
  	likes			: { type: 'string' },
  	ridesCounter	: { type: 'string' },
  	views			: { type: 'string' },
  	relatedRoutes	: { type: 'JSON' },

  	status			: { type: 'string' },
  	GUID			: { type: 'string' }
  	
  }
};

