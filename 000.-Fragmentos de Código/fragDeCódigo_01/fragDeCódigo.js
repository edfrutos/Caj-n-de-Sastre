// Función para copiar al portapapeles
  function copyToClipboard() {
    const content = document.querySelector('.content pre code').innerText;
    const tempInput = document.createElement('textarea');
    tempInput.value = content;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
