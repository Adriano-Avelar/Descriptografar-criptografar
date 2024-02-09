
const criptografar = (texto) => {
  
  const textoInvalido = validaTexto(texto);
  if (textoInvalido) return

  const arrayLetras = texto.split('');
  let novoArrayLetras = arrayLetras.map(letra => {
    if (letra === 'e') {
      letra = 'enter';
      mostrarMensagemSucesso = true;
    }

    if (letra === 'i') {
      letra = 'imes';
      mostrarMensagemSucesso = true;
    }

    if (letra === 'a') {
      letra = 'ai';
      mostrarMensagemSucesso = true;
    }

    if (letra === 'o') {
      letra = 'ober';
      mostrarMensagemSucesso = true;
    }

    if (letra === 'u') {
      letra = 'ufat';
      mostrarMensagemSucesso = true;
    }
    return letra
  });

  let novoTexto = novoArrayLetras.join('');
    
  if (!mostrarMensagemSucesso) {
    const mensagem1 = 'Mensagem inválida! ';
    const mensagem2 = 'A criptografia não pode ser realizada.'
    mostrarMensagemErro(novoTexto, mensagem1, mensagem2);
  }

  return novoTexto;
}