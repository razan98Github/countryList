const toggle = document.getElementById('toggleDark');
const body = document.querySelector('#first');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
       body.style.transition = '2s';
    }else{
        body.style.background = 'black';
       body.style.color = 'white';
       body.style.transition = '2s';
    }
});

function InfoOne(){  

fetch("https://restcountries.com/v3.1/alpha?codes=de")
.then(function(response){
    return response.json();

}).then(function(data){

    for(var i = 0; i < data.length; i++){
       
        document.getElementById("ge").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
 }

})

fetch("https://restcountries.com/v3.1/alpha?codes=us")
.then(function(response){

    return response.json();

}).then(function(data){

    for(var i = 0; i < data.length; i++){
       
        document.getElementById("am").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
 }

})

fetch("https://restcountries.com/v3.1/alpha?codes=br")
.then(function(response){

    return response.json();
}).then(function(data){

    for(var i = 0; i < data.length; i++){
       
        document.getElementById("br").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
 }

})

fetch("https://restcountries.com/v3.1/alpha?codes=isl")
.then(function(response){

    return response.json();
}).then(function(data){

    for(var i = 0; i < data.length; i++){
       
        document.getElementById("ic").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
 }

})

}
InfoOne();


 function InfoTwo(){

    fetch("https://restcountries.com/v3.1/alpha?codes=ph")
    .then(function(response){

        return response.json();

    }).then(function(data){

        for(var i = 0; i < data.length; i++){
           
            document.getElementById("ph").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
     }

    })

    fetch("https://restcountries.com/v3.1/alpha?codes=ax")
    .then(function(response){
        return response.json();

    }).then(function(data){

        for(var i = 0; i < data.length; i++){
           
            document.getElementById("al").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
     }

    })

    fetch("https://restcountries.com/v3.1/alpha?codes=al")
    .then(function(response){

        return response.json();
    }).then(function(data){

        for(var i = 0; i < data.length; i++){
           
            document.getElementById("ab").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
     }

    })

    fetch("https://restcountries.com/v3.1/alpha?codes=dz")
    .then(function(response){

        return response.json();
    }).then(function(data){
        for(var i = 0; i < data.length; i++){
           
            document.getElementById("ag").innerHTML += `<p>Population : ${data[i].population}</p>  <p>Region : ${data[i].region}</p>  <p>Capital : ${data[i].capital}`;      
     }


    })
}

InfoTwo();

const form = document.querySelector("#form");

form.addEventListener("submit",function(e){

   
    e.preventDefault();
    const country = document.querySelector("#country").value;
    let finalUrl = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    console.log(finalUrl);
    
     fetch(finalUrl)
    
     .then(function(response){
    
        return response.json();

    }).then(function(data){
    
        document.getElementById("display").innerHTML = "";

        for(var i= 0; i < data.length; i++){
    
            console.log(data[i]);
            console.log(data[i].name.common);
            console.log(data[i].capital);
            console.log(data[i].flags.svg);
            console.log(data[i].population);
            console.log( Object.values(data[i].languages).toString());
           
            document.getElementById("display").innerHTML += 
            
            `<img src="${data[i].flags.svg}" class="flag-img"/>
            <h2>${data[i].name.common}</h2>
            <div class="wrapper">
            <div class="data">
             <h3>Capital :${data[i].capital} </h3>
            </div>
            </div>                                      
            
            <div class="wrapper">
            <div class="data">
             <h3>Population :${data[i].population}</h3>
            </div>
            </div>
            
            <div class="wrapper">
            <div class="data">
             <h3>Languages :${Object.values(data[i].languages).toString()}</h3>
            </div>
            </div>
         
            `                                                                                     
        }
    

    })


    })   

function region(){

    var select = document.getElementById("list");
    let region = select.value;
    console.log(region);
    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(function(response){

        return response.json();
    
    }).then(function(data){

        document.getElementById("region").innerHTML = "";
       
        for(var i =0; i < data.length; i++){
            
            document.getElementById("region").innerHTML +=`<h3>${data[i].name.common}</h3>`;
            
        }

    })
}






   





