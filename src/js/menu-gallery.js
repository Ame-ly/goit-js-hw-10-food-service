import template from '../template/menu-cards.hbs';
import menuCards from '../menu.json';

const menuRef = document.querySelector('ul.js-menu');
const menuCardsMarkup = createMenuCardsMarkup(menuCards);
menuRef.insertAdjacentHTML('afterbegin', menuCardsMarkup);


function createMenuCardsMarkup(menuCards) {
    return template(menuCards);
}
