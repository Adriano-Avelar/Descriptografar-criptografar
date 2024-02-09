const seletorDeElementoHTML = (seletor) => {
  const elementoHTML = document.querySelector(seletor);
  return elementoHTML;
}

const btnCriptografar = seletorDeElementoHTML("#criptografar");
const btnDescriptografar = seletorDeElementoHTML("#descriptografar");
const divSemTexto = seletorDeElementoHTML(".div-sem-texto");
const divSemTextoH3 = seletorDeElementoHTML(".div-sem-texto h3");
const divSemTextoP = seletorDeElementoHTML(".div-sem-texto p");
const divCopiar = seletorDeElementoHTML(".div-copiar");
const btnCopiar = seletorDeElementoHTML("#btn-copiar");
const inputCriptoDescripto = seletorDeElementoHTML("#input-cripto-descripto");
const inputCopiar = seletorDeElementoHTML("#input-copiar");

const textoH3divSemTexto = 'Nenhuma mensagem encontrada'
const textoPdivSemTexto = 'Digite um texto que você deseja criptografar ou descriptografar.'
divSemTextoH3.textContent = textoH3divSemTexto;
divSemTextoP.textContent = textoPdivSemTexto;

let mostrarMensagemSucesso  = false;

btnCriptografar.addEventListener('click', event => {
  event.preventDefault();
  adicionarEfeitoNosButton(btnCriptografar);
  inputCopiar.value = criptografar(inputCriptoDescripto.value);
  mostrarTextoParaCopiar();
});

btnDescriptografar.addEventListener('click', event => {
  event.preventDefault();
  adicionarEfeitoNosButton(btnDescriptografar);
  inputCopiar.value = descriptografar(inputCriptoDescripto.value)
  mostrarTextoParaCopiar();
})

btnCopiar.addEventListener('click', event => {
  event.preventDefault();
  adicionarEfeitoNosButton(btnCopiar);
  copiarTexto();
});

const mostrarTextoParaCopiar = () => {
  if (mostrarMensagemSucesso) {
    divSemTexto.classList.add('hidden')
    divCopiar.classList.remove('hidden')
  }

  if (!mostrarMensagemSucesso) {
    divSemTexto.classList.remove('hidden')
    divCopiar.classList.add('hidden')
  }

  mostrarMensagemSucesso = false;
}

const copiarTexto = () => {
  inputCopiar.select();
  inputCopiar.setSelectionRange(0, 99999)
  document.execCommand('copy');
  inputCriptoDescripto.focus();
  inputCriptoDescripto.value = '';
}

const adicionarEfeitoNosButton = (button) => {
  button.classList.add('click-button');
  setTimeout(() => {
    button.classList.remove('click-button');
  },200)
} 

const mostrarMensagemErro = (novoTexto, mensagem1, mensagem2 ) => {
  divSemTextoH3.textContent = novoTexto? mensagem1 : 'ATENÇÃO!';
  divSemTextoP.textContent =  novoTexto? mensagem2 : 'Digite seu texto ';
  divSemTexto.style.color = 'red';
  setTimeout(() => {
    divSemTexto.style.color = '#000';
    divSemTextoH3.textContent = textoH3divSemTexto;
    divSemTextoP.textContent = textoPdivSemTexto;
  },4500);
}


const validaTexto = (texto) => {
  const temAcento = texto.split(/\b/);
  const temNumero = texto.split(/\d/);
  const temMaiuscula = texto.toLowerCase() !== texto;

  const mensagem1 = 'ATENÇÃO!';
  const mensagem2 = 'Apenas letras minúsculas e sem acento.';

  if (temAcento.length > 1 || temNumero.length > 1 || temMaiuscula) {
    mostrarMensagemErro(texto, mensagem1, mensagem2);
    return true
  }
  return
}