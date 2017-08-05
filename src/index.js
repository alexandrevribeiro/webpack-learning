/*
-> Code before applying "Code splitting"

import sum from './sum';
import './image_viewer';

const total = sum(10, 5);
console.log(total);
*/

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    
    // Imports the "image_viewer" module when the button is clicked.
    // When building the bundles, Webpack will search for all "System.import" uses,
    // and it'll split those codes up into different bundles.
    System.import('./image_viewer').then(module => {
        // console.log(module);
        module.default();
    });
};

document.body.appendChild(button);