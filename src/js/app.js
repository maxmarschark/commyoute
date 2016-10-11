const teamMembers = ['Max', 'John', 'Sam', 'Wes'];

let team = document.createElement('ul');
team.setAttribute('id', 'team-members');

for (let i=0;i<teamMembers.length; i++) {
  const member = document.createElement('li');
  member.setAttribute('id', `member${i}`);
  member.innerText = teamMembers[i];
  team.appendChild(member);
}

let header = document.getElementById('welcome');

header.appendChild(team);
