const apiKey="04a8c8f4e80d2b6cdd9f74e1fb122dfc";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    async function CheckWeather(city){
        const responce=await fetch(apiUrl +city+ `&appid=${apiKey}`);
       

         if(responce.status == 404){
             document.querySelector(".weather").style.display="none";
            document.querySelector(".error").style.display="block";
         }else{
            var data = await responce.json();

        // const data=fetch(apiUrl +city+ `&appid=${apiKey}`);
        // data.then((data1)=>{
        //    var doc = data1.json();
        //    return doc;
        // }).then((value2)=>{
        //     console.log(value2);
        // })
        // console.log(data);
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km\\h";

        if(data.weather[0].main == "Clouds"){
             weatherIcon.src= "icons/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src= "icons/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src= "icons/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src= "icons/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src= "icons/mist.png";
        }


        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
}
    }
    searchBtn.addEventListener("click" ,()=>{
        CheckWeather(searchBox.value);
    })
 
