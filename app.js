fetch('https://restcountries.eu/rest/v2/all')
.then (response => response.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class = "country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick = "displayCountryName('${country.name}')" >Details</button>
        `
         countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}

const displayCountryName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country =>{
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <h2>${country.capital}</h2>
        <h3>${country.area}</h3>
        <h4>${country.languages[0].name}</h4>
        <img src= "${country.flag}">

    `
}