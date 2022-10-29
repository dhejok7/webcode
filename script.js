let div1 = document.createElement("div");

let name1 = document.createElement("input");
name1.setAttribute("type", "text");
name1.setAttribute("id", "name");
name1.setAttribute("placeholder", "Enter your name");

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = "Search";
button.addEventListener("click", fun);  


let country = document.createElement("div")
country.setAttribute("id", "country");


div1.append(name1, button, country);
document.body.append(div1);

async function fun() {
  let country_value = [];
  try {
    let name = document.getElementById("name").value;
    let url = `https://api.nationalize.io/?name=${name}`;
    let response = await fetch(url);
    let result = await response.json();

//console.log(result);
    result.country.map((items) => {
      country_value.push(items)
    })

   // console.log(country_value);
    if (country_value.length === 0) {
      return country.innerHTML = 'Please Enter a valid name before you search'
    } 
    else {
      country.innerHTML = country_value.slice(0, 2).map((item) => {
        return `<p>COUNTRY :${item.country_id}, PROBABILITY :${item.probability}</p>`
      });
    }
  } 
  //-------------------------------------------------------------------------------------
  
  
  catch (err) {
    console.log('error->', err)
  }
}