const btn = document.getElementById('btnCalcular');
const nomeInput = document.getElementById('nomeCliente');
const emailInput = document.getElementById('emailCliente');
const servicoSelect = document.getElementById('servico');
const resultadoDiv = document.getElementById('resultado');
const erroP = document.getElementById('erro');

btn.addEventListener('click', () => {
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const opcaoSelecionada = servicoSelect.options[servicoSelect.selectedIndex];
  const preco = opcaoSelecionada.getAttribute('data-preco');

  if (!nome || !email || !preco) {
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
    `Email: <strong>${email}</strong><br>` +
    `Serviço: <strong>${opcaoSelecionada.value}</strong><br>` +
    `Valor do orçamento: <strong>${precoFormatado}</strong>`;
});