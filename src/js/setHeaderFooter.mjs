//Import functions from template file
import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

//Function to update header content
function setHeaderInfo(data) {
    //Select a inside disclaimer paragraph
    const disclaimer = document.querySelector(".disclaimer > a");
    //Set link destination to actual URL
    disclaimer.href = data.url;
    //Replace link text with parks full name
    disclaimer.innerHTML = data.fullName;
    //Update sites head title
    document.querySelector("head > title").textContent = data.fullName;
    //Update hero banner image to first image it can find
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    //Update hero banner info based on template
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

//Function to insert new footer data by using templates
function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

//Function to import the templates for footer and call function to update data
export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}