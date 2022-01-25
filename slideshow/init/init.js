import * as helper from "../helper.js";


export function initSlideShow() {
    helper.addCSS('init');
    const body = document.body;
    let slideshow = document.createElement('div');
    slideshow.className = 'slideshow';
    body.insertBefore(slideshow, body.firstChild);
}
