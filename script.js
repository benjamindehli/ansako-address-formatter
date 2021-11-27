

const address = {
    adresselinje1: "",
    postnr: "",
    poststed: "",
    gaardsnummer: "",
    bruksnummer: "",
    kommunenavn: ""
}

document.getElementById("jsonPreview").innerText = JSON.stringify(address, null, 2);


const handleInputChange = (value, property) => {
    address[property] = value;
    document.getElementById("jsonPreview").innerText = JSON.stringify(address, null, 2);
    document.getElementById("addressPreview").innerText = formatAddress(address);

}

const formatAddress = addressObject => {
    const adresse = addressObject.adresselinje1?.length ? addressObject.adresselinje1 : null;
    const postNrSted = addressObject.postnr?.length && addressObject.poststed?.length ? `${addressObject.postnr} ${addressObject.poststed}` : null
    const kommunenavn = addressObject.kommunenavn?.length ? `${addressObject.kommunenavn} kommune` : null;
    const gnrBnrShort = addressObject.gaardsnummer && addressObject.bruksnummer ? `(${addressObject.gaardsnummer}/${addressObject.bruksnummer})` : null;
    const gnrBnrLong = addressObject.gaardsnummer && addressObject.bruksnummer ? `Gårdsnr. ${addressObject.gaardsnummer}, bruksnr. ${addressObject.bruksnummer}` : null;
    if (adresse && postNrSted) {
        return `${adresse}, ${postNrSted} ${gnrBnrShort ? gnrBnrShort : ''}`
    } else if (adresse) {
        return `${adresse}${kommunenavn ? `, ${kommunenavn}` : ''}${gnrBnrShort ? ` ${gnrBnrShort}` : ''}`
    } else if (postNrSted) {
        return `${gnrBnrLong ? `${gnrBnrLong}, ` : ''}${postNrSted}`
    } else if (gnrBnrLong || kommunenavn) {
        return `${gnrBnrLong ? `${gnrBnrLong}, ` : ''}${kommunenavn}`
    } else {
        return null
    }
}
