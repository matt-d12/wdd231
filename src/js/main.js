//Import functions from other mjs files
import { getParkData, parkInfoLinks, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

//Function to update the intro of a page
function setParkIntro(data) {
    //Get first element in .intro class
    const introEl = document.querySelector(".intro");     
    //Replace inside of .intro with new park name (h1) and desc (p)
    introEl.innerHTML = `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>`;
}

//Function to update page links and info
function setParkInfoLinks(data) {
    //Get first element in .info again
    const infoEl = document.querySelector(".info");
    //Get data array and run through template function
    const html = data.map(mediaCardTemplate);
    //Take array and join into one HTML string and insert at start of .info
    infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

//Call functions
init();