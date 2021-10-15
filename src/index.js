import './styles.css';
import menu from './menu.json';
import menuTpls from '../src/templates/menuTpls.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeChange: document.querySelector('#theme-switch-toggle'),
  menu: document.querySelector('.js-menu'),
}

refs.themeChange.addEventListener('change', OnThemeChange);

function OnThemeChange(){
  refs.body.classList.toggle(Theme.DARK);

  if(refs.body.classList.contains(Theme.DARK)){
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const cardsMarkup = createCardsMenuMarkup(menu);

refs.menu.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMenuMarkup(menu) {
  return menuTpls(menu)
}