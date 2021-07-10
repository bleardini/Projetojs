// PARA AUMENTAR LETRA:
let tamanho = 20;
function reduzir() {
    tamanho --;
    document.body.style.fontSize = tamanho +"px";
}
function aumentar() {
    tamanho ++;
    document.body.style.fontSize = tamanho +"px";
}

// DARK MODE:
darkmode = () => {
    var body = document.body;
    body.classList.toggle("dark");
}
 

// CONVERSAO:


const clearTemp = () => {

    document.getElementById('valortemp').value = "";
    document.getElementById('resultcaixa').innerHTML = "Resultado";
}


const clear1 = () => {
    
    document.getElementById('valorreal').value = "";
    document.getElementById('resultcaixa1').innerHTML = "Resultado";
}


const converter = () => {
    
   let temp=parseFloat(document.getElementById('valortemp').value);
    let opcaotemp=document.getElementById('temperatura').value;
    let result= 0;


    if (isNaN(temp)) {
        alert('Digite temperatura');
    }
    else{
        if(opcaotemp == "f") {
            result = (temp * 9/5) + 32; 
        }
        else {
            result = temp + 273;
        }
    }
   
    document.getElementById('resultcaixa').innerHTML = ` ${result.toFixed(3)}`;
}


const converter1 = () => {
    let result = 0;
    const real = parseFloat(document.getElementById("valorreal").value);
    const opcmoeda = document.getElementById("real").value;
    if (isNaN(real)) {
        alert('Digite um valor em real');
        } else{
            if(opcmoeda == "d"){
                result= real / (5.06); 
            }else {
                result = real / 6;
            }
        }

    document.getElementById('resultcaixa1').innerHTML =  ` ${result.toFixed(2)}`;
}



// CALCULADORA:

const somar = () => {
    const valordea = parseFloat(document.getElementById('valora').value);  
    const valordeb = parseFloat(document.getElementById('valorb').value); 
    let result = '';
  
    result = valordea + valordeb;
    document.getElementById('resultado').innerHTML = `${result}`;
  }
  
  
  const subtrair = () => {
    const valordea = parseFloat(document.getElementById('valora').value);  
    const valordeb = parseFloat(document.getElementById('valorb').value); 
    let result = '';
  
    result = valordea - valordeb;
    document.getElementById('resultado').innerHTML = `${result}`;
  }
  
  const porcentagem = () => {
    const valordea = parseFloat(document.getElementById('valora').value);  
    const valordeb = parseFloat(document.getElementById('valorb').value); 
    let result = '';
  
    result = (valordea*valordeb)/100;
    document.getElementById('resultado').innerHTML = `${result}`;
  }
  
  const alevado2 = () => {
    const valordea = parseFloat(document.getElementById('valora').value);
    let result = '';
    result = (valordea*valordea);
  
    document.getElementById('resultado').innerHTML= `${result}`;
  }

  const blevado2 = () => {
    const valordeb = parseFloat(document.getElementById('valorb').value);
    let result = '';
    result = (valordeb*valordeb);
  
    document.getElementById('resultado').innerHTML= `${result}`;
  }
  
  const dividir = () => {
    const valordea = parseFloat(document.getElementById('valora').value);
    const valordeb = parseFloat(document.getElementById('valorb').value);
    let result = '';
  
    result =(valordea/valordeb);
    document.getElementById('resultado').innerHTML= `${result}`;
  }


  const aelevadob = () => {
    const valordea = parseFloat(document.getElementById('valora').value);
    const valordeb = parseFloat(document.getElementById('valorb').value);
    
    document.getElementById('resultado').innerHTML= `${Math.pow(valordea,valordeb)}`;
  }


  const multiplicar = () => {
    const valordea = parseFloat(document.getElementById('valora').value);
    const valordeb = parseFloat(document.getElementById('valorb').value);
    let result = '';
  
    result =(valordea*valordeb);
    document.getElementById('resultado').innerHTML= `${result}`;
  }
  
  const alevadob = () => {
    const valordea = parseFloat(document.getElementById('valora').value);
    const valordeb = parseFloat(document.getElementById('valorb').value);
    let result = ''
  }
  
  
  const limpar = () => {
     document.getElementById('resultado').innerHTML = "";
     document.getElementById('valora').value = "";
     document.getElementById('valorb').value = "";
  }