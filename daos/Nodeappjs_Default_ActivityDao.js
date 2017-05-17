var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Nodeappjs_Default_Activity_SQL.properties');
module.exports.create_Nodeappjs = function(Nodeappjs,callback) {
  var create_query = sqlQuery._properties.create_Nodeappjs;
  sequelize.query(create_query, {
    replacements: {
    	name : Nodeappjs.name,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Nodeappjs
  }).then(function(nodeappjs) {
		callback(nodeappjs);
	});
}
module.exports.update_Nodeappjs = function(Nodeappjs,callback) {
  var update_query = sqlQuery._properties.update_Nodeappjs;
  sequelize.query(update_query, {
    replacements: {
    	id : Nodeappjs.id,
    	name : Nodeappjs.name,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.UPDATE,
    model: models.Nodeappjs
  }).then(function() {
		callback();
	});
}
module.exports.search_Nodeappjs_for_update = function(Nodeappjs_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Nodeappjs;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Nodeappjs_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Nodeappjs
  }).then(function(nodeappjs) {
		callback(nodeappjs[0]);
	});
}
module.exports.delete_Nodeappjs = function(Nodeappjs_id,callback) {
  var delete_query = sqlQuery._properties.delete_Nodeappjs;
  sequelize.query(delete_query, {
    replacements: {
    	id: Nodeappjs_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Nodeappjs
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Nodeappjs = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Nodeappjs;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Nodeappjs
  }).then(function(nodeappjs) {
		callback(nodeappjs);
	});
}