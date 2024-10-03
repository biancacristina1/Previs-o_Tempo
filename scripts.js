const key = "a7c5358af875e39e7ab46a03108b309e";




async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then (resposta => resposta. json ())
    inserirDados (dados) 
}

function cliquei() {
    const cidade = document.querySelector(".input-pesquisa").value;

    buscarCidade(cidade)
}

function inserirDados(dados){
     document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
     document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
     document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
     document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity +"%"
     document.querySelector(".img-info").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

} 

