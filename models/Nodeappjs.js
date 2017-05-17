'use strict';

module.exports = function(sequelize, DataTypes) {
  var Nodeappjs = sequelize.define("Nodeappjs", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    name: DataTypes.STRING
  });
  return Nodeappjs;
};