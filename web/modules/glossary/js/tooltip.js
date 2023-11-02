import { getGlossary } from "./utils.js";
jQuery(document).ready(async function ($) {
    const terms = fetch('http://drupal-tooltip-nestle.ddev.site/get-glossary')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    
    console.log('using jquery');
    const content = document.querySelector('.node__content');
    console.dir(content);
})