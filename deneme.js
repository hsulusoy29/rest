  const url="https://restcountries.com/v3.1/all"
  const getResult=()=>{
    fetch(url)    // fetch getirme işlemi yapıyor
    
    .then(rest=>{
        return rest.json()
    
    })
  .then (displayResult)
}

const displayResult=(result)=>{
  console.log(result);
  let x = 0;
  result.map(data =>{
    console.log(data.name.common)
    console.log(x++);
    
  })
  
  
  
  
}
document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){              
        getResult(searchBar.value)
    }
  })
 