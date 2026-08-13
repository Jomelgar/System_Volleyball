const { Router } = require('express');
const playerController = require('../controllers/player');

const router = Router();

router.get('/', playerController.getAll);
router.get('/:id', playerController.getById);
router.post('/', playerController.create);
router.put('/:id', playerController.update);
router.delete('/:id', playerController.remove);

module.exports = router;
