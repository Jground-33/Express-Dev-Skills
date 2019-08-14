var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.renderNewSkillForm);
router.get('/:id', skillsCtrl.show);
router.get('/:id/edit', skillsCtrl.editSkill);
router.post('/', skillsCtrl.createSkill);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);

module.exports = router;
