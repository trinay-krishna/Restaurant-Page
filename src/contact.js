
export default function location(headerElement){

    const contentContainer=document.querySelector('#content');

    const contactHeaderElement=(function(){
        const header=document.createElement('h1');
        header.textContent="Contact Us";
        header.classList="page-heading";
        
        return header;
    })();

    const detailsElement=(function(){
        const detailsDiv=document.createElement('div');
        detailsDiv.classList="details";

        const detailsheadingPara=document.createElement('p');
        const detailsPara=document.createElement('p');


        detailsheadingPara.textContent="Details";
        detailsPara.innerHTML="To make a reservation, call <br><span>+91 20 2345 6789</span> <br> or by an email <br>gustohaven@gmail.com";
        
        detailsDiv.appendChild(detailsheadingPara);
        detailsDiv.appendChild(detailsPara);

        return detailsDiv;
    })();

    contentContainer.appendChild(headerElement);
    contentContainer.appendChild(contactHeaderElement);
    contentContainer.appendChild(detailsElement);

}