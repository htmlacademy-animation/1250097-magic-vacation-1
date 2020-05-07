// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import headerDivision from './modules/header-division';
import bodyEvt from './modules/bodyEvt.js';

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

// init modules
bodyEvt();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
headerDivision();