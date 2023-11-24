import panCake from './pancake.jpg';
import hamBurger from './hamburger.jpg';
import grilledChicken from './GrilledChicken.jpg';

export default function menu(headerElement){
    const contentContainer=document.querySelector('#content');

    const menuHeadingElement=(function(){
       const headingElement=document.createElement('h1');
        headingElement.textContent="Menu";
        headingElement.classList="page-heading";

        return headingElement;
    })();

    const menuElement=(function(){
        const menuDiv=document.createElement('div');

        menuDiv.appendChild(createMenuItem(
            panCake,
            "Sliced Strawberry Pancake"
            ));

        menuDiv.appendChild(createMenuItem(
            hamBurger,
            "Hamburger and Fries"
            ));

        menuDiv.appendChild(createMenuItem(
            grilledChicken,
            "Grilled Chicken"
            ));

        function createMenuItem(foodItem,description){
            const menuItem=document.createElement('div');
            menuItem.classList="menu-item";

            const itemName=document.createElement('p');
            itemName.textContent=description;

            const menuImg=new Image();
            menuImg.src=foodItem;
            menuImg.classList="menu-image";

            menuItem.appendChild(itemName);
            menuItem.appendChild(menuImg);
            return menuItem;
        }

        return menuDiv;

    })();

    contentContainer.appendChild(headerElement);
    contentContainer.appendChild(menuHeadingElement);
    contentContainer.appendChild(menuElement);
}