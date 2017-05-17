var service = require("../services/Nodeappjs_Default_ActivityService")
module.exports.create_Nodeappjs = function(req, res) {
  var Nodeappjs = req.body;
  service.create_Nodeappjs(Nodeappjs,function (nodeappjs){
    res.status(201);
    res.json(nodeappjs);
  });
}
module.exports.update_Nodeappjs = function(req, res) {
  var Nodeappjs = req.body;
  service.update_Nodeappjs(Nodeappjs,function (){
    res.end();
  });
}
module.exports.search_Nodeappjs_for_update = function(req, res) {
  var Nodeappjs_id = parseInt(req.params[0], 10);
  service.search_Nodeappjs_for_update(Nodeappjs_id,function (nodeappjs){
    res.json(nodeappjs);
  });
}
module.exports.delete_Nodeappjs = function(req, res) {
  var Nodeappjs_id = parseInt(req.params[0], 10);
  service.delete_Nodeappjs(Nodeappjs_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Nodeappjs = function(req, res) {
  service.get_all_Nodeappjs(function (nodeappjs){
    res.json(nodeappjs);
  });
}