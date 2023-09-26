
const url = "https://api.api-ninjas.com/v1/cats?playfulness=5";
const API_KEY = "LwhixeFQYjBn3YfcqDem6g==QYOuItDXrnEHrtXt";

const fetchCats = async ()=>{
    const playfulness=5;
    const response = await fetch(`${url}?playfulness=${playfulness}`, {headers:{
        'X-Api-Key': API_KEY
    }})
    const data = await response.json();
    console.log(data);
    return data;
}

const getCats = async ()=>{
    const cats = await fetchCats();
    const parent = document.getElementById("cats");
    cats.forEach(cat => {
        const elem = document.createElement("img");
        elem.setAttribute("src", cat.image_link);
        parent.appendChild(elem);
    });
}


