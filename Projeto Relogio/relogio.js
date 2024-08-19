// Obtém os elementos HTML que mostram horas, minutos e segundos
let horas = document.getElementById ("horas");
let minutos = document.getElementById ("minutos");
let segundos = document.getElementById ("segundos");


// Define uma função que será executada repetidamente para atualizar o relógio
let relogio = setInterval(function tempo (){
   
    let dataHoje = new Date (); // Cria um novo objeto Date para obter a data e hora atuais
    
    // Obtém as horas, minutos e segundos atuais
    let hr = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let seg = dataHoje.getSeconds();

     // Atualiza o conteúdo dos elementos HTML com as horas, minutos e segundos
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})

tempo()

