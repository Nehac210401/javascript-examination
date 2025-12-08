const planets = document.querySelectorAll(".planet");
const container = document.querySelector(".container");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlayContent");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");
const closeIcon = document.querySelector(".close-icon");

searchBtn.addEventListener("click", function (event){
    getPlanetData();
})

closeIcon.addEventListener("click", ()=>{ 
      overlay.classList.add("hidden");
      console.log("hello");

});

async function fetchKey(){
    try{
        let response = await fetch('https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/key');
        console.log(response);
        let data = await response.json();
        let key = data.key;
        console.log("key " + key);
        console.log(data);
        return key;
    }
    catch (error) {
        console.log("Wrong fetchkeys");
    }
}

async function getPlanetData(name){
    //const key = await getApiKey();
    const response = await fetch ("https://corsproxy.io/?https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: 'GET',
        headers: {'x-zocom' :'solaris-JAaNDtW2DyvIHS96' }
});
    const data = await response.json();
    const bodies = data.bodies;
    const planet = bodies.find;
    console.log(data);
    console.log("CLICKED NAME =", name);
    console.log("API names =", bodies.map(p => p.name));


    return bodies.find(p=> p.name.toLowerCase() === name.toLowerCase());
}

   //if (!data.bodies || data.bodies.length === 0){
    //    searchResult.innerHTML = "Planet not found!";
    //    return;
    //}
    //return data.bodies[0];

getPlanetData();

planets.forEach (planet => {
    planet.addEventListener("click", async function(){
        const name = planet.dataset.name;
        const data = await getPlanetData(name);
        overlay.classList.remove("hidden");
        displayPlanetInfo(data);
   });

});

//searchBtn.addEventListener("click", async function(){
   //const name = searchInput.value.trim();
    //if (name === ""){
     //   searchResult.innerHTML = "Please enter the planet //name";
      //  return;
    //}

   //const data = await getPlanetData(name);
    //displayPlanetInfo(data);
//});

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

    overlay.classList.remove("hidden");

   }



    


   
   

    