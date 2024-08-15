const apikey ="f4ba91bdc5b58f06223417c9a8fc359d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f4ba91bdc5b58f06223417c9a8fc359d&units=matric

const searchBox=document.querySelector(".search input");

const searchButton=document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch (apiurl + city +`&appid=${apikey}`);


 if(response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
 }

else{
    
    let data =await response.json();
    console.log(data);
      
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity +'%';
  document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

if(data.weather[0].main == "Clouds"){
    weathericon.src = "images\clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weathericonweathericon.src = "images\clear.png";
}
else if(data.weather[0].main == "Rain"){
    weathericon.src = "images\rain.png";
} 
else if(data.weather[0].main == "Drizzle"){
    weathericon.src = "images\drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weathericon.src = "images\mist.png";

}
else if(data.weather[0].main == "Snow"){
    weathericon.src = "images\snow .png";
    
}

  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";
}
}
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    searchBox.value="";
}); 






