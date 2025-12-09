//Hämtar alla planet-element i listan.
const planets = document.querySelectorAll(".planet");
const container = document.querySelector(".container");

//Hämtar overlay och stäng i konen.
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlayContent");
const closeIcon = document.querySelector(".close-icon");

//Klick på stäng-ikonen döljer overlay.
closeIcon.addEventListener("click", ()=>{ 
      overlay.classList.add("hidden");

});

//Hämtar API nyckel.
async function fetchKey(){
    try{
        let response = await fetch('https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/key');
        console.log(response);
        let data = await response.json();               //Väntar svar i JSON form.
        let key = data.key;
        console.log("key " + key);
        console.log(data);
        return key;                                  //Returnerar API nycklen
    }
    catch (error) {
        console.log("Wrong fetchkeys");
    }
}

//Hämtar alla planeter från API och returnerar den som matchar klickad planet.
async function getPlanetData(name){
    //const key = await getApiKey();
    const response = await fetch ("https://corsproxy.io/?https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: 'GET',
        headers: {'x-zocom' :'solaris-JAaNDtW2DyvIHS96' }
});


    const data = await response.json();
    const bodies = data.bodies;                    //Lista av alla planeter från API
    const planet = bodies.find;
    console.log(data);
    console.log("CLICKED NAME =", name);
    console.log("API names =", bodies.map(p => p.name));


    return bodies.find(p=> p.name.toLowerCase() === name.toLowerCase());
}

// Hämtar planetet data från API
getPlanetData();

//Lägger klick event på varje planet i listan
planets.forEach (planet => {
    planet.addEventListener("click", async function(){
        const name = planet.dataset.name;           //Hämtar data namnet från li element från HTML
        const data = await getPlanetData(name);     //Hämtar motsvarnade planetdata från API.
        overlay.classList.remove("hidden");         //Visar overlay med information.
        displayPlanetInfo(data);                   //Fyller overlay med planetens information.
   });

});


//Skapar en funtion för att overlay med data från API
   function displayPlanetInfo(data) {
    document.getElementById("planetName").innerHTML = data.name;
    document.getElementById("latinName").innerText = data.latinName;
    document.getElementById("planetDesc").textContent = data.desc;
    document.getElementById("planetCircumference").textContent = "Omkrets: " + data.circumference + " km";
    document.getElementById("planetDistance").textContent = "Avstånd från solen: " + data.distance + " km";
    document.getElementById("planetTempDay").textContent = "Dagtemp: " + data.temp.day + " °C";
    document.getElementById("plantTempNight").textContent = "Natttemp: " + data.temp.night + " °C";
    document.getElementById("planetMoons").textContent = "Månar: " + (data.moons.length ? data.moons.join(", ") : "Inga");
    document.getElementById("planetRotation").textContent = "Rotationstid: " + data.rotation;
    document.getElementById("planetOrbit").textContent = "Orbitalperiod: " + data.orbitalPeriod;
    document.getElementById("planetId").textContent = "ID: " + (data.id);

    //Säkerställer att overlay verkligen visas.
    overlay.classList.remove("hidden");

   }



    


   
   

    
