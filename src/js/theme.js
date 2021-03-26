import clientStorage from './client-storage';
import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkbox.addEventListener('change', onThemeChange);
madeSettings();

function madeSettings() {
  if (clientStorage.getItem('theme') === Theme.DARK) {
    madeToggleClass(Theme.DARK);
    refs.checkbox.checked = true;
  } else {
    madeToggleClass(Theme.LIGHT);
  }
}

function onThemeChange(e) {
  // refs.body.classList.replace(oldClass, newClass);

  if (e.target.checked) {
    updateClass(Theme.LIGHT, Theme.DARK);
    clientStorage.setItem('theme', Theme.DARK);
  } else {
    updateClass(Theme.DARK, Theme.LIGHT);
    clientStorage.setItem('theme', Theme.LIGHT);
  }
}

function madeToggleClass(theme) {
  refs.body.classList.toggle(theme);
}

function updateClass(oldClass, newClass) {
  refs.body.classList.remove(oldClass);
  refs.body.classList.add(newClass);
}
