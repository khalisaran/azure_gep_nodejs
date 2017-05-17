var dao = require("../daos/Nodeappjs_Default_ActivityDao")
module.exports.create_Nodeappjs = function(Nodeappjs,callback) {
  dao.create_Nodeappjs(Nodeappjs,function (nodeappjs){
    callback(nodeappjs);
  });
}
module.exports.update_Nodeappjs = function(Nodeappjs,callback) {
  dao.update_Nodeappjs(Nodeappjs,function (){
    callback();
  });
}
module.exports.search_Nodeappjs_for_update = function(Nodeappjs_id,callback) {
  dao.search_Nodeappjs_for_update(Nodeappjs_id,function (nodeappjs){
    callback(nodeappjs);
  });
}
module.exports.delete_Nodeappjs = function(Nodeappjs_id,callback) {
  dao.delete_Nodeappjs(Nodeappjs_id,function (){
    callback();
  });
}
module.exports.get_all_Nodeappjs = function(callback) {
  dao.get_all_Nodeappjs(function (nodeappjs){
    callback(nodeappjs);
  });
}