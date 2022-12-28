const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Creating a <p> with red text in the body

const body = document.body;

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = "Hey, I'm Red!";

body.appendChild(redText);

// Creating an <h3> with blue text in the body

const blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.textContent = "Hey, I'm a blue h3!";

body.appendChild(blueText);

// Creating a div  with a black border 
// and pink background color with 
// an h1 and a p inside of it in the body 

const div = document.createElement('div');
div.style.border = 'thick solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!"

const p = document.createElement('p');
p.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(p);

body.appendChild(div);










