import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

// const image = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
// document.body.appendChild(image);

export default () => {
    
    // Small
    const smallImage = document.createElement('img');
    smallImage.src = small;
    document.body.appendChild(smallImage);

    // Big
    const bigImage = document.createElement('img');
    bigImage.src = big;
    document.body.appendChild(bigImage);

};