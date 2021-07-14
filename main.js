const url = "http://localhost:3000/logs"



function DatosReal(){
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
    
        let element = document.getElementById('elem')
        element.innerHTML=
        
        `<p> Temperatura Hight: ${data.loggers[0].tempHight} </p>
        <p> Temperatura Low: ${data.loggers[0].tempLow} </p>
        <p> Peso Dispositivo High: ${data.loggers[0].weightDepositHight} </p>
        <p> Peso Dispositivo Low: ${data.loggers[0].weightDepositLow} </p>
    
        `
        console.log(data)
    })
    
    .catch(err => console.log(err))
}


