//variables for each element in document
const outerDiv = document.createElement('div');
const contentDiv = document.createElement('div');
const titleDiv = document.createElement('div');
const descriptionDiv = document.createElement('div');
const imgDiv = document.createElement('div');
const img = document.createElement('img');

//outer div that encapsulates other divs
outerDiv.style.border = '1px solid black';
outerDiv.style.width = 'fit-content';
outerDiv.style.padding = '5px';

//title div
titleDiv.innerHTML = 'Ingate Fullstack v5';
titleDiv.style.textAlign = 'center';
titleDiv.style.fontWeight = 'bold';

//description/subtitle div
descriptionDiv.innerHTML = 'The best course ever';

//imgDiv
imgDiv.style.display = 'flex';
imgDiv.style.justifyContent = 'center';

//img
img.style.width = '32px';
img.src = 'https://raw.githubusercontent.com/ingate-educa/fullstack-assets/main/v5/Logo-short.png';

//putting the elements together (bottom-up)
imgDiv.appendChild(img);
contentDiv.appendChild(descriptionDiv);
contentDiv.appendChild(imgDiv);
outerDiv.appendChild(titleDiv);
outerDiv.appendChild(contentDiv);

document.body.appendChild(outerDiv);

console.log(outerDiv);