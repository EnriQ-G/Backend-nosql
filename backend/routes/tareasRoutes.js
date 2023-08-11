const express = require('express');
const router = express.Router();
const {getTareas, setTarea, updateTarea, deleteTarea} = require('../controllers/tareasControlers');

router.route('/').get(getTareas).post(setTarea);
// router.get('/', getTareas);
// router.post('/', setTarea);

router.route('/:id').put(updateTarea).delete(deleteTarea);
// router.put('/:id', updateTarea);
// router.delete('/:id', deleteTarea);

module.exports = router;