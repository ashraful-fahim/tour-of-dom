const placeList = document.getElementById('places-list');

//System-1 to add a section by JavaScript
const mainContainer = document.getElementById('main-container');

const h1 = document.createElement('h1');
const section = document.createElement('section');

h1.innerText = 'My Favourite Food';
section.append(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.append(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.append(li2);

const li3 = document.createElement('li');
li3.innerText = 'Firni';
ul.append(li3);

const li4 = document.createElement('li');
li4.innerText = 'Pudding';
ul.append(li4);

section.append(ul);
mainContainer.append(section);


// System-2 to add a section my using innerHTML

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Favorite Dresses</h1>
<ul>
<li>Shirt</li>
<li>Pant</li>
<li>Sendo Genji</li>
<li>Shorts</li>
</ul>
`

mainContainer.append(sectionDress);
