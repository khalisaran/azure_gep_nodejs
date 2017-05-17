var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Nodeappjs_Default_ActivityController")
router.post("/Nodeappjs", controller.create_Nodeappjs);
router.get(/^\/Nodeappjs\/(\d+)$/, controller.search_Nodeappjs_for_update);
router.put("/Nodeappjs", controller.update_Nodeappjs);
router.delete(/^\/Nodeappjs\/(\d+)$/, controller.delete_Nodeappjs);
router.get("/Nodeappjs", controller.get_all_Nodeappjs);

module.exports = router;