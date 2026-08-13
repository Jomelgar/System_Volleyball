const { Router } = require("express");
const teamController = require("../controllers/team");

const router = Router();

router.get("/", teamController.getAll);
router.get("/:id", teamController.getById);
router.post("/", teamController.create);
router.put("/:id", teamController.update);
router.delete("/:id", teamController.remove);

module.exports = router;
