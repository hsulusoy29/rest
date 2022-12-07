  const url="https://restcountries.com/v3.1/all"
  const getResult=()=>{
    fetch(url)    // fetch getirme işlemi yapıyor
    
    .then(rest=>{
        return rest.json()
    
    })
  .then (displayResult)
}

const displayResult=(result)=>{
  result.map(data =>{
    document.getElementById('city').innerHTML =(data.name.common);
    document.getElementById('region').innerHTML =(data.region)
    document.getElementById('population').innerHTML =(data.population);
    document.getElementById('area').innerHTML =(data.area);
    document.getElementById('image').src =(data.flags.png);
    console.log(result);
    
  })
  
}
document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){              
        getResult(searchBar.value)
    }
  })
 







  