// skills controller 
const Skill = require('../models/skill')


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        SkillNum: parseInt(req.params.id) + 1
    });
}

function renderNewSkillForm(req, res) {
    res.render('skills/new');
}

function createSkill(req, res) {
    Skill.createSkill(req.body);
    res.redirect('/skills')
}

function editSkill(req, res) {
    var skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill,
        skillIdx: req.params.id,
    });
}

function deleteSkill(req, res) {
    Skill.delete(req.params.id);
    res.redirect('/skills');
}

function update(req, res) {
    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
}


module.exports = {
    index,
    show,
    renderNewSkillForm,
    createSkill, 
    editSkill,
    delete: deleteSkill,
    update,
}
