const descriptografar = (texto) => {
  
  const textoInvalido = validaTexto(texto);
  if (textoInvalido) return

  const arrayPalavras = texto.split(' ');
  let novoTexto = arrayPalavras.map(palavra => {
    if (palavra.includes('enter')) {
      palavra =  palavra.replace(/enter/g, 'e'); 
      mostrarMensagemSucesso = true;
    }

    if (palavra.includes('imes')) {
      palavra = palavra.replace(/imes/g, 'i');
      mostrarMensagemSucesso = true;
    }

    if (palavra.includes('ai')) {
      palavra = palavra.replace(/ai/g, 'a');
      mostrarMensagemSucesso = true;
    }

    if (palavra.includes('ober')) {
      palavra = palavra.replace(/ober/g, 'o');
      mostrarMensagemSucesso = true;
    }

    if (palavra.includes('ufat')) {
      palavra = palavra.replace(/ufat/g, 'u');
      mostrarMensagemSucesso = true;
    }
    return palavra
  })
  
  novoTexto = novoTexto.join(' ');
  
  if (!mostrarMensagemSucesso) {
    const mensagem1 = 'Mensagem inválida! ';
    const mensagem2 = 'A descriptografia não pode ser realizada.'
    mostrarMensagemErro(novoTexto, mensagem1, mensagem2);
  }

  return novoTexto;
}
