const devSkills = [{
    skill: 'JavaScript'
  },
  {
    skill: 'HTML'
  },
  {
    skill: 'CSS'
  },
  {
    skill: 'Node.js'
  },
  {
    skill: 'Express'
  }
];

module.exports = {
  getAll,
  getOne,
  createSkill,
  deleteOne,
  update,
};

function getAll() {
  return devSkills
}

function getOne(id) {
  return devSkills[id];
}

function createSkill(newSkill) {
  devSkills.push(newSkill);
}

function deleteOne(idx) {
  devSkills.splice(idx, 1);
}

function update(idx, updatedSkill) {
  devSkills[idx] = updatedSkill;
}