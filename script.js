
const api=`811fbc17af7e4e02a4a111501232209`;

let idDate =$("#date");
let idTemparature=$("#temparature");
let idDailyChanceofRain=$("#dailyChanceofRain");
let idPrecipitation=$("#precipitation");
let idImgForecast=$("#imgForecast");
let idHumidity=$("#humidity");
let idWeatherCondition=$("#weatherCondition");
//--------------------1--------------
let idDate1 =$("#date1");
let idTemparature1=$("#temparature1");
let idDailyChanceofRain1=$("#dailyChanceofRain1");
let idPrecipitation1=$("#precipitation1");
let idImgForecast1=$("#imgForecast1");
let idHumidity1=$("#humidity1");
let idWeatherCondition1=$("#weatherCondition1");
//------------------2--------------------------------------------
let idDate2 =$("#date2");
let idTemparature2=$("#temparature2");
let idDailyChanceofRain2=$("#dailyChanceofRain2");
let idPrecipitation2=$("#precipitation2");
let idImgForecast2=$("#imgForecast2");
let idHumidity2=$("#humidity2");
let idWeatherCondition2=$("#weatherCondition2");
//--------------------3--------------
let idDate3 =$("#date3");
let idTemparature3=$("#temparature3");
let idDailyChanceofRain3=$("#dailyChanceofRain3");
let idPrecipitation3=$("#precipitation3");
let idImgForecast3=$("#imgForecast3");
let idHumidity3=$("#humidity3");
let idWeatherCondition3=$("#weatherCondition3");
//--------------------4--------------
let idDate4 =$("#date4");
let idTemparature4=$("#temparature4");
let idDailyChanceofRain4=$("#dailyChanceofRain4");
let idPrecipitation4=$("#precipitation4");
let idImgForecast4=$("#imgForecast4");
let idHumidity4=$("#humidity4");
let idWeatherCondition4=$("#weatherCondition4");
//--------------------1--------------
//=========================================================================================================================

const searchButtonOnclicked  = ()=>{

    const city = document.getElementById("searchField").value;
    const url =  ` https://api.weatherapi.com/v1/current.json?key=811fbc17af7e4e02a4a111501232209&q=${city}`

          fetch(url).then (response=>response.json())
                    .then(data => displayTemperature(data))

     weatherForecastData(city);              
}    

const setInnerText = (id, text) => {
  document.getElementById(id).innerText=text
  console.log(id,text)
}
        
const displayTemperature=temparature => {
    console.log(temparature)
    setInnerText('locationName',temparature.location.name)
    setInnerText('lblTemp',temparature.current.temp_c)
    setInnerText('lblWind',temparature.current.wind_kph)
    setInnerText('lblHumidity',temparature.current.humidity)
    setInnerText('lblUv',temparature.current.uv)
    setInnerText('lblClouds',temparature.current.cloud)

    
}
        
//=========================================================================================================================      
  function weatherForecastData(city){

    $.ajax({
      method : "GET",
      url : ` https://api.weatherapi.com/v1/forecast.json?key=811fbc17af7e4e02a4a111501232209&days=5&q=${city}`,
      success :(data) =>{
        console.log("==============================");
        console.log(data);

        idDate.text(data["forecast"]["forecastday"]["0"]["date"]);
        idTemparature.text("Temparature : "+data["forecast"]["forecastday"]["0"]["day"]["avgtemp_c"]+ "°C");
        idImgForecast.text(data["forecast"]["forecastday"]["0"]["day"]["condition"]["icon"]);
        idWeatherCondition.text("Weather Condition : "+data["forecast"]["forecastday"]["0"]["day"]["condition"]["text"]);
        idDailyChanceofRain.text("Chance of Rain : "+data["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_rain"]+"%");
        idPrecipitation.text("Precipitation : "+data["forecast"]["forecastday"]["0"]["day"]["totalprecip_mm"]+"mm");
        idHumidity.text("Humidity : "+data["forecast"]["forecastday"]["0"]["day"]["avghumidity"]);
        

        idDate1.text(data["forecast"]["forecastday"]["1"]["date"]);
        idTemparature1.text("Temparature : "+data["forecast"]["forecastday"]["1"]["day"]["avgtemp_c"]+ "°C");
        idImgForecast1.text(data["forecast"]["forecastday"]["1"]["day"]["condition"]["icon"]);
        idWeatherCondition1.text("Weather Condition : "+data["forecast"]["forecastday"]["1"]["day"]["condition"]["text"]);
        idDailyChanceofRain1.text("Chance of Rain : "+data["forecast"]["forecastday"]["1"]["day"]["daily_chance_of_rain"]+"%");
        idPrecipitation1.text("Precipitation : "+data["forecast"]["forecastday"]["1"]["day"]["totalprecip_mm"]+"mm");
        idHumidity1.text("Humidity : "+data["forecast"]["forecastday"]["1"]["day"]["avghumidity"]);
      
        idDate2.text(data["forecast"]["forecastday"]["2"]["date"]);
        idTemparature2.text("Temparature : "+data["forecast"]["forecastday"]["2"]["day"]["avgtemp_c"]+ "°C");
        idImgForecast2.text(data["forecast"]["forecastday"]["2"]["day"]["condition"]["icon"]);
        idWeatherCondition2.text("Weather Condition : "+data["forecast"]["forecastday"]["2"]["day"]["condition"]["text"]);
        idDailyChanceofRain2.text("Chance of Rain : "+data["forecast"]["forecastday"]["2"]["day"]["daily_chance_of_rain"]+"%");
        idPrecipitation2.text("Precipitation : "+data["forecast"]["forecastday"]["2"]["day"]["totalprecip_mm"]+"mm");
        idHumidity2.text("Humidity : "+data["forecast"]["forecastday"]["2"]["day"]["avghumidity"]);

        idDate3.text(data["forecast"]["forecastday"]["3"]["date"]);
        idTemparature3.text("Temparature : "+data["forecast"]["forecastday"]["3"]["day"]["avgtemp_c"]+ "°C");
        idImgForecast3.text(data["forecast"]["forecastday"]["3"]["day"]["condition"]["icon"]);
        idWeatherCondition3.text("Weather Condition : "+data["forecast"]["forecastday"]["3"]["day"]["condition"]["text"]);
        idDailyChanceofRain3.text("Chance of Rain : "+data["forecast"]["forecastday"]["3"]["day"]["daily_chance_of_rain"]+"%");
        idPrecipitation3.text("Precipitation : "+data["forecast"]["forecastday"]["3"]["day"]["totalprecip_mm"]+"mm");
        idHumidity3.text("Humidity : "+data["forecast"]["forecastday"]["3"]["day"]["avghumidity"]);

        idDate4.text(data["forecast"]["forecastday"]["4"]["date"]);
        idTemparature4.text("Temparature : "+data["forecast"]["forecastday"]["4"]["day"]["avgtemp_c"]+ "°C");
        idImgForecast4.text(data["forecast"]["forecastday"]["4"]["day"]["condition"]["icon"]);
        idWeatherCondition4.text("Weather Condition : "+data["forecast"]["forecastday"]["4"]["day"]["condition"]["text"]);
        idDailyChanceofRain4.text("Chance of Rain : "+data["forecast"]["forecastday"]["4"]["day"]["daily_chance_of_rain"]+"%");
        idPrecipitation4.text("Precipitation : "+data["forecast"]["forecastday"]["4"]["day"]["totalprecip_mm"]+"mm");
        idHumidity4.text("Humidity : "+data["forecast"]["forecastday"]["4"]["day"]["avghumidity"]);

      }
    })
  }

//==================================================================End=======================================================    
