const dataNascimento = document.getElementById('dataNascimento');
const mesNascimento = document.getElementById('mesNascimento');
const anoNascimento = document.getElementById('anoNascimento');
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const anoAtual = new Date().getFullYear();

for (let data = 1; data <= 31; data++) {
  const optionChild = document.createElement('option');
  optionChild.value = data;
  optionChild.text = data;
  dataNascimento.appendChild(optionChild);
}

for (let mes = 0; mes <= 11; mes++) {
  const optionChild = document.createElement('option');
  optionChild.value = meses[mes];
  optionChild.text = meses[mes];
  mesNascimento.appendChild(optionChild)
}

for (let ano = 1900; ano <=anoAtual; ano++) {
  const optionChild = document.createElement('option');
  optionChild.value = ano;
  optionChild.text = ano;
  anoNascimento.appendChild(optionChild);
}

