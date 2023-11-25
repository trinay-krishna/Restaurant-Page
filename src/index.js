import './styles.css';
import setupHome from './home.js';
import setupMenu from './menu.js';
import setupContact from './contact.js';

const setupNavigation=function(){

    const homeBtn=document.querySelector('#Home');
    const menuBtn=document.querySelector('#Menu');
    const contactBtn=document.querySelector('#Contact');
    setupEventListeners();

    function setupEventListeners(){

        homeBtn.addEventListener('click',
            ()=>{
                contentContainer.textContent="";
                setupHome(headerElement);
            }
        );

        menuBtn.addEventListener('click',
            ()=>{
                contentContainer.textContent="";
                setupMenu(headerElement);
            }
        );

        contactBtn.addEventListener('click',
            ()=>{
                contentContainer.textContent="";
                setupContact(headerElement);
            }
        );
    }
};

const contentContainer=document.querySelector('#content');
let headerElement=setupHome(null);
setupNavigation();
