import Bg from './background.jpg';

export default function home(headerEle){

    const contentContainer=document.querySelector('#content');

    const headerElement=(function(){
        if(headerEle!=null)
            return headerEle;
        const header_container=document.createElement('div');
        header_container.classList="header";

        const title=document.createElement('h1');
        title.textContent="Gusto Haven";
        
        header_container.appendChild(title);
        header_container.appendChild(createList());
        return header_container;
    
        function createList(){
            const ul=document.createElement('ul');
    
            const homeLI=document.createElement('li');
            const menuLI=document.createElement('li');
            const contactLI=document.createElement('li');
    
            const homeBtn=document.createElement('button');
            const menuBtn=document.createElement('button');
            const contactBtn=document.createElement('button');
    
            homeBtn.id="Home";
            menuBtn.id="Menu";
            contactBtn.id="Contact";
    
            homeBtn.textContent="Home";
            menuBtn.textContent="Menu";
            contactBtn.textContent="Contact";
    
            homeLI.appendChild(homeBtn);
            menuLI.appendChild(menuBtn);
            contactLI.appendChild(contactBtn);
    
            ul.appendChild(homeLI);
            ul.appendChild(menuLI);
            ul.appendChild(contactLI);
    
            return ul;
        }
    })();

    const imageElement=(function(){
        const imageDiv=document.createElement('div');
        imageDiv.classList="image";

        const img=new Image();
        img.src=Bg;
        img.id="background";

        imageDiv.appendChild(img);
        return imageDiv;
    })();

    const aboutElement=(function(){
        const aboutDiv=document.createElement('div');
        aboutDiv.classList="about";

        const about=document.createElement('h2');
        about.textContent="About Us";
        
        const aboutPara=document.createElement('p');
        aboutPara.innerHTML="Welcome to Gusto Haven, where culinary delight meets a cozy ambience.<br>At Gusto Haven, we believe in the power of exceptional ingredients, expertly prepared to tantalize your taste buds. Our chefs curate a menu that blends international influences with local inspiration, offering a diverse range of dishes that cater to every palate. <br> Immerse yourself in the warm and inviting atmosphere of Gusto Haven. Whether you're savoring a romantic dinner, catching up with friends, or celebrating a special occasion, our attentive staff is dedicated to ensuring you have a memorable dining experience. <br>Gusto Haven is not just a restaurant; it's a haven for those who appreciate the finer things in life. Join us on a culinary journey that celebrates the joy of good food, good company, and the simple pleasure of shared moments. <br>";

        aboutDiv.appendChild(about);
        aboutDiv.appendChild(aboutPara);

        return aboutDiv;
    })();

    contentContainer.appendChild(headerElement);
    contentContainer.appendChild(imageElement);
    contentContainer.appendChild(aboutElement);

    return headerElement;
}