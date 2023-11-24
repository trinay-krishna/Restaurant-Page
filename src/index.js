import './styles.css';
import setupHome from './home.js';

const contentContainer=document.querySelector('#content');
const headerElement=setupHome();

const setupNavigation=(function(){

    const homeBtn=document.querySelector('#Home');
    const menuBtn=document.querySelector('#Menu');
    const LocBtn=document.querySelector('#Loc');
    setupEventListeners();

    function setupEventListeners(){

        homeBtn.addEventListener('click',
            ()=>{
                contentContainer.textContent="";
                setupHome();
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


});
