let name = localStorage.getItem('name');
let mail = localStorage.getItem('mail');
let city = localStorage.getItem('city');
let checked = JSON.parse(localStorage.getItem('checked'));
let radio = localStorage.getItem('radio');

console.log(`Name: ${name} - Mail: ${mail} - City: ${city}`);
console.log(checked);
console.log(`Radio: ${radio}`);

let par = document.getElementById('p_data');
let nametxt = document.createTextNode(`Name: ${name}`);
let mailtxt = document.createTextNode(`Mail: ${mail}`);
let citytxt = document.createTextNode(`City: ${city}`);
let radiotxt = document.createTextNode(`Radio: ${radio}`);

par.appendChild(nametxt);
// get a line break
par.appendChild(document.createElement('br'));
par.appendChild(mailtxt);
par.appendChild(document.createElement('br'));
par.appendChild(citytxt);
par.appendChild(document.createElement('br'));
par.appendChild(radiotxt);
console.log(`checked.length: ${checked.length}`);
// add the checked checkboxes and create a list of key-value pairs
if  (checked !== null){
    let ui = document.createElement('ul');
    for(let key in checked){
        let li = document.createElement('li');
        let txt = document.createTextNode(`${key}: ${checked[key]}`);
        li.appendChild(txt);
        ui.appendChild(li);
    }
par.appendChild(ui);
} else {
    par.appendChild(document.createElement('br'));
    let txt = document.createTextNode('No checkboxes selected');
    par.appendChild(txt);
}

function changeCSS() {
    let stylesheet = document.getElementById('css');

    // Check the current href and toggle between stylesheets
    if (stylesheet.getAttribute('href') === 'submitted.css') {
        stylesheet.setAttribute('href', 'styles_changed.css');
    } else {
        stylesheet.setAttribute('href', 'submitted.css');
    }
}
