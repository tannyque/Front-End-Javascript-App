document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-person-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteForm = document.querySelector('#delete')
  deleteForm.addEventListener('click', handleDeleteAll);

  document.getElementById("defaultOpen").click();

  renderList();
});

const getList = function() {
  if (JSON.parse(localStorage.getItem('persons')) !== null) {
    return JSON.parse(localStorage.getItem('persons'));
  } else {
    return [];
  };
};

const handleFormSubmit = function(event) {
  event.preventDefault();
  personsList = getList();
  const newPerson = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    role: event.target.role.value,
    language: event.target.language.value,
    birthday: event.target.birthday.value
  };

  personsList.push(newPerson);
  localStorage.setItem('persons', JSON.stringify(personsList));
  renderList();
  event.target.reset();
};

const buildList = function(person) {
  const personUl = document.createElement('ul');
  const firstNameLi = document.createElement('li');
  firstNameLi.textContent = `First Name: ${person.firstName}`;
  const lastNameLi = document.createElement('li');
  lastNameLi.textContent = `Last Name: ${person.lastName}`;
  const roleLi = document.createElement('li');
  roleLi.textContent = `Role: ${person.role}`;
  const languageLi = document.createElement('li');
  languageLi.textContent = `Favourite Language: ${person.language}`;
  const dateOfBirthLi = document.createElement('li');
  const birthdayLi = document.createElement('li');
  birthdayLi.textContent = `Date of Birth: ${person.birthday}`;

  personUl.appendChild(firstNameLi)
  personUl.appendChild(lastNameLi)
  personUl.appendChild(roleLi)
  personUl.appendChild(languageLi)
  personUl.appendChild(birthdayLi)

  return personUl;
};

const handleDeleteAll = function() {
  localStorage.clear()
  renderList();
}

const renderList = function() {
  const g7Div = document.querySelector('#g7-list');
  g7Div.innerHTML = "";
  const personList = getList();
  personList.forEach((person) => {
    personUl = buildList(person);
    g7Div.appendChild(personUl);
  });
};

function openForm(event, forms) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(forms).style.display = "block";
  event.currentTarget.className += " active";
}
