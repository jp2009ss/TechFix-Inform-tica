const btn = document.getElementById('btnCalcular');
const nomeInput = document.getElementById('nomeCliente');
const servicoSelect = document.getElementById('servico');
const resultadoDiv = document.getElementById('resultado');
const erroP = document.getElementById('erro');
 
btn.addEventListener('click', () => {
  const nome = nomeInput.value.trim();
  const opcaoSelecionada = servicoSelect.options[servicoSelect.selectedIndex];
  const preco = opcaoSelecionada.getAttribute('data-preco');
 
  if (!nome || !preco) {
    erroP.style.display = 'block';
    resultadoDiv.textContent = '';
    return;
  }
 
  erroP.style.display = 'none';
 
  const precoFormatado = parseFloat(preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
 
  resultadoDiv.innerHTML =
    `Cliente: <strong>${nome}</strong><br>` +
    `Serviço: <strong>${opcaoSelecionada.value}</strong><br>` +
    `Valor do orçamento: <strong>${precoFormatado}</strong>`;
});