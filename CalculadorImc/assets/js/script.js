const form = document.querySelector('#formCalculadora')

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  // Pegando inputs de peso e altura 
  let peso = e.target.querySelector('#peso');
  let altura = e.target.querySelector('#altura');
  // Arrumando dado coletados 
  peso = Number(peso.value);
  altura = Number(altura.value);
  if (!peso) return exibirTexto('Digite um peso válido!', false);
  if (!altura) return exibirTexto('Digite uma altura válida!', false);
  if (peso > 635 || peso < altura) return exibirTexto('Digite um peso válido!', false);
  // Calculando Resultado do usuário 
  const imc = calularImc(peso, altura);
  const msg = Classificacao(imc);
  // Exibindo Resultado ao usuário
  exibirTexto(`O IMC é de: ${imc} (${msg})`, true)
})

function calularImc (peso, altura) {
  const resultado = peso / altura ** 2
  return resultado.toFixed(2);
}

function Classificacao (imc){
  nomeClasse = ['Abaixo do peso', 'Peso ideal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
  if (imc > 39.9) return nomeClasse[5];
  if (imc > 34.9) return nomeClasse[4];
  if (imc > 29.9) return nomeClasse[3];
  if (imc > 24.9) return nomeClasse[2];
  if (imc >= 18.5) return nomeClasse[1];
  if (imc < 18.5) return nomeClasse[0];
}

function exibirTexto (msg, isvalid) {
  const saida = document.querySelector('.saida');
  saida.innerHTML = ' '
  const p = criaP();
  isvalid ? p.classList.add('resultado') : p.classList.add('erro');
  p.innerHTML = msg
  saida.appendChild(p);
  
}

function criaP () {
  const p = document.createElement('p');
  return p;
}