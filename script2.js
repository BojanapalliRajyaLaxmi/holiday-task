let div=document.createElement("div");
document.body.appendChild(div);
let h3=document.createElement("h1");
h3.innerText="Random User";
div.appendChild(h3);
let img=document.createElement("img")
div.appendChild(img)
url="https://randomuser.me/api/";
fetch(url).then(response=>response.json())
.then(data=>{console.log(data)
    user=data.results[0];
    img.src= user.picture.large;
                let p=document.createElement("h4");
                p.innerText=`Name:  ${user.name.first} ${user.name.last}`
                div.appendChild(p);
                let p1=document.createElement("h4");
                p1.innerText=`Email:   ${user.email}`
                div.appendChild(p1);
                let p2=document.createElement("h4");
                p2.innerText=`Location:   ${user.location.city},  ${user.location.country}`
                div.appendChild(p2);
                let p3=document.createElement("h4");
                div.appendChild(p3);
                p3.innerText=`Phone:   ${user.phone}`;
                let p4=document.createElement("h4");
                p4.innerText=`Date of Birth:   ${user.dob.date}`;
                div.appendChild(p4)
            })