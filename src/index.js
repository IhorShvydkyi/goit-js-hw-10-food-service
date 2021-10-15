// импорт меню, хбс, стилей
import menuTpls from '../src/templates/menuTpls.hbs';
import menu from './menu.json';
import './styles.css';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// создаем рефы
const refs = {
  body: document.querySelector('body'),
  themeChange: document.querySelector('#theme-switch-toggle'),
  menu: document.querySelector('.js-menu'),
}
refs.themeChange.addEventListener('change', OnThemeChange);

// скрипт для дефолтной темы
themeDefault()

function themeDefault() {
  if (!localStorage.length) {
      localStorage.setItem('theme', Theme.LIGHT)
  };
  refs.body.classList.add(localStorage.getItem('theme'));
  
  if (refs.body.classList.contains(Theme.DARK)) {
      refs.themeChange.checked = true;
  }
}

// скрипт для переключателя
function OnThemeChange(){
  refs.body.classList.toggle(Theme.DARK);

  if(refs.body.classList.contains(Theme.DARK)){
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}




// разметка на сайт
const cardsMarkup = createCardsMenuMarkup(menu);

refs.menu.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMenuMarkup(menu) {
  return menuTpls(menu)
}