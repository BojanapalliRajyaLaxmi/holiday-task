let card=document.createElement("card");
card.className="card"
document.body.appendChild(card)
let h1=document.createElement("h1");
h1.innerText="Current Weather";
card.appendChild(h1)
url="https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true";
fetch (url).then(response=>response.json())
.then(data=>{
                let p=document.createElement("h2");
                p.innerText=`Temperature:  ${data.current_weather["temperature"]}  °C`;
                card.appendChild(p);
                let p1=document.createElement("h4");
                p1.innerText=`Wind Speed:   ${data.current_weather["windspeed"]} Km/h`;
                card.appendChild(p1);
                let p2=document.createElement("h5");
                p2.innerText=`Weather_Code:  ${data.current_weather["weathercode"]}`;
                card.appendChild(p2);
                let p3=document.createElement("h6")
                p3.innerText=`Observation Time: ${data.current_weather["time"]} AM`;
                card.appendChild(p3);
           } )