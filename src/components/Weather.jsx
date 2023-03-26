import React,{useEffect,useState} from "react"

export default function Weather(props){
  const [result,setResult]=useState({})
let month=["January","February","March","April","May","June","July","August","September","October","November","December"]
  var d = new Date();
  const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '13fbf5fb4cmshe5434ba75767937p101de4jsnbb4b3cf53777',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}};
  async function fetch_data(options,value){
    let data= await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value?value:"Delhi"}`, options)
 let parsedData= await data.json()
    console.log(parsedData)
  setResult(parsedData)
    }

useEffect(()=>{
  fetch_data(options,props.search)
},[props.search])
  return (
    <div className="flex">
     <article className="widget">
      <div className="weatherIcon"></div>
      <div className="weatherData">
      <h1 className="temperature">{result.temp}&deg;</h1>
      <h2 className="description">{result.cloud_pct>60?" Cloudy":result.temp<15?"Cold":"Sunny"}</h2>
      <h3 className="city">{props.search?props.search.toUpperCase():"DELHI"}</h3>
      </div>
      <div className="date">
      <h4 className="month" id="month">{month[d.getMonth()]}</h4>
      <h5 className="day" id="day">{d.getDate()}</h5>
   </div>
     </article>
      
  <div className="card">
    <table>
      <tbody>
      <tr>
        <td>Cloud %:</td>
        <td>{result.cloud_pct}%</td>
      </tr>
      <tr>
        <td>Min_temp:</td>
        <td>{result.min_temp}&deg;C</td>
      </tr>
      <tr>
        <td>Max_temp:</td>
        <td>{result.max_temp}&deg;C</td>
      </tr>
      <tr>
        <td>Humidity:</td>
        <td>{result.humidity} g/m<sup>3</sup></td>
      </tr>
      <tr>
        <td>Temp:</td>
        <td>{result.temp}&deg;C</td>
      </tr>
       <tr>
        <td>Feels like:</td>
        <td>{result.feels_like}&deg;C</td>
      </tr>
      <tr>
        <td>Wind Deg:</td>
        <td>{result.wind_degrees} deg</td>
      </tr>
      <tr>
        <td>Wind Spd:</td>
        <td>{result.wind_speed}km/h</td>
      </tr>
        </tbody>
    </table>
  </div>
</div>
    )
}