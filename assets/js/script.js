let contar = 0;
const Numero_Inicial = document.getElementById("numeroInicial");

function aumentar () {
   
    //contar = contar + 1   OUU contar++
        contar++
    //innerHTML vai retornar todo html que existe no elemento    
        Numero_Inicial.innerHTML = contar;
    }
    
function diminuir() {
    
   // contar = contar - 1 OU contar --
        contar--;
        Numero_Inicial.innerHTML = contar;

    if (contar > 0){
        Numero_Inicial.style.color = "black";    
    }
    
    if (0 > contar){
        Numero_Inicial.style.color = "red";
    }

}
