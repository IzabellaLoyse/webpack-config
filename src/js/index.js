import '../sass/style.scss';
import '../assets/img/characters.svg';
import Sucess from '../template/sucess.html';
import teste from './api';

teste();

// IMPORTAÇÃO DE ARQUIVOS HTML
const body = document.querySelector('body');
body.innerHTML += Sucess;
