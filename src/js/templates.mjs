//Function template for park info
export function parkInfoTemplate(info) {
    //Clickable link template with sub-titles
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

//Function template for media cards
export function mediaCardTemplate(info) {
    //Fills out the .info section to be used elsewhere
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
    </a>
    <p>${info.description}</p>
        </div>`;
}

//Function to get mailing address when type is "Mailing"
function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

//Function to get phone number when type is "Voice"
function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

//Function template for footer info that uses mailing and voice from above
export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
        <h3>Contact Info</h3>
        <h4>Mailing Address:</h4>
        <div>
            <p>${mailing.line1}</p>
            <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
        </div>
        <h4>Phone:</h4>
        <p>${voice}</p>
    </section>`;
}