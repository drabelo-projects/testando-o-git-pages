const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

     if (nome !== '' && altura != '' && peso != ''){
         
         const ValorIMC = (peso / (altura * altura)).toFixed(1);

         
         let classificacao = "";

         if (ValorIMC < 18.5){
             classificacao = 'você está abaixo do peso.';

         }else if (ValorIMC <25){
             classificacao = 'você está com peso ideal. Boa!!!';
         }else if (ValorIMC <30){
             classificacao = 'você está levemente acima do peso.';
         }else if (ValorIMC <35){
             classificacao = 'você está com obesidade grau I';
         }else if (ValorIMC <40){
             classificacao = 'você está com obesidade grau II';
         }else 
            classificacao = 'você está com obesidade grau III. Muito cuidado! Recomendo uma dieta' 

         resultado.textContent = `${nome} seu IMC é ${ValorIMC} e você está ${classificacao}`;

         
     }else{
         resultado.textContent = 'Preencha todos os campos!'
     }
}

calcular.addEventListener('click', imc);
