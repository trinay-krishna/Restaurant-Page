import './styles.css';
import setupHome from './home.js';
import setupMenu from './menu.js';

const setupNavigation=function(){

    const homeBtn=document.querySelector('#Home');
    const menuBtn=document.querySelector('#Menu');
    const LocBtn=document.querySelector('#Loc');
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

        LocBtn.addEventListener('click',
            ()=>{
                contentContainer.textContent="";
                setupLocation(headerElement);
            }
        );
    }
};

const contentContainer=document.querySelector('#content');
let headerElement=setupHome(null);
setupNavigation();
