const url = "http://localhost:3000/real_logs"
const url2 = "http://localhost:3000/logs"

let element = document.getElementById('elem')
let contador_hist = 0


function DatosReal(){
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
    
        
        element.innerHTML=
        
        `<p> Temperatura Hight: ${data.loggers[0].tempHight} </p>
        <p> Temperatura Low: ${data.loggers[0].tempLow} </p>
        <p> Peso Dispositivo High: ${data.loggers[0].weightDepositHight} </p>
        <p> Peso Dispositivo Low: ${data.loggers[0].weightDepositLow} </p>
        <p> Temperatura: ${data.loggers[0].pTemp} </p>
        <p> Voltaje de la batería: ${data.loggers[0].battvolt} </p>
        <p> Peso RC: ${data.loggers[0].pesoRC} </p>
        <p> Peso DD: ${data.loggers[0].pesoDD} </p>
    
        `
        console.log(data)
    })
    
    .catch(err => console.log(err))
}

    
function DatosHist(){
    
            fetch(url2)
            .then(response => response.json())
            .then(data => {
               
                element.innerHTML= ''
                data.forEach(aux => {
                   
                    contador_hist = contador_hist + 1
                    element.innerHTML+=
                    
                    ` <a href="https://pab1998.github.io/pages/datoshistoricos.html?id=${aux.id}">Dato histórico ${contador_hist}</a> <br>
                   
                 
                    `
                });
                contador_hist = 0
            
                console.log(data)
            })
            
            .catch(err => console.log(err))

           
        }








    let URLactual = window.location.href;
    console.log(URLactual)
    
    
    if(URLactual.includes("datoshistoricos.html")){


    let valores = window.location.search;
    console.log(valores);
    let urlParams = new URLSearchParams(valores);
    let producto = urlParams.get('id');
    console.log(producto)
    
    let url_hist ="http://localhost:3000/log/" + producto;
    console.log(url_hist)
    

    fetch(url_hist)
    .then(response => response.json())
    .then(data => {
    
        element.innerHTML=
        
        
        `
        <p> Temperatura Hight: ${data.tempHight} </p>
        <p> Temperatura Low: ${data.tempLow} </p>
        <p> Peso Dispositivo High: ${data.weightDepositHight} </p>
        <p> Peso Dispositivo Low: ${data.weightDepositLow} </p>
        <p> Temperatura: ${data.pTemp} </p>
        <p> Voltaje de la batería: ${data.battvolt} </p>
        <p> Peso RC: ${data.pesoRC} </p>
        <p> Peso DD: ${data.pesoDD} </p>
    
        `
        console.log(data)
    })
    
    .catch(err => console.log(err))
        console.log("pagina ok")
}
        

        
 
