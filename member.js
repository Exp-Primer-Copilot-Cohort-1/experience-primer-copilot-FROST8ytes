function skillsMember() {
  var member = this;
  // ...
  member.skills = [
    { name: 'javascript', level: 3 },
    { name: 'html', level: 5 },
    { name: 'css', level: 3 }
  ];
  // ...
  member.getSkills = function() {
    return member.skills;
  };
  member.addSkill = function(skill) {
    member.skills.push(skill);
  };
  // ...
  member.removeSkill = function(skill) {
    var index = member.skills.indexOf(skill);
    member.skills.splice(index, 1);
  };
  // ...
}