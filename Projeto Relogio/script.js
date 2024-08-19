let diaId = document.getElementById('dia');
let mesId = document.getElementById('mes');
let anoId = document.getElementById('ano');


let dataHoje = new Date();
let mes1;

let dia = dataHoje.getDate();
let mes = dataHoje.getMonth() + 1;
let ano = dataHoje.getFullYear();


switch (mes) {
  case 1:
    mes1 = ("Janeiro ");
    break;
  case 2:
    mes1 = ("Fevereiro ");
    break;

  case 3:
    mes1 = ("Março ");
    break;

  case 4:
    mes1 = ("Abril ");
    break;

  case 5:
    mes1 = ("Maio ");
    break;

  case 6:
    mes1 = ("Junho ");
    break;

  case 7:
    mes1 = ("Julho ");
    break;

  case 8:
    mes1 = ("Agosto ");
    break;
  case 9:
    mes1 = ("Setembro ");
    break;
  case 10:
    mes1 = ("Outubro ");
    break;
  case 11:
    mes1 = ("Novembro ");
    break;
  case 12:
    mes1 = ("Dezembro ");
    break;

  default:
    mes1 = ("Digite um número válido.");
    break;
}

diaId.textContent = dia ;
mesId.textContent = mes1,' ';
anoId.textContent = ano;

console.log  (dia,'de', mes1, 'de',ano);
