$("#inputNumero").focus().keyup(function (e) {
  if (e.keyCode == 13) {
    $("#calcular").trigger("click");
  }
});

// Adiciona um evento de clique ao botão "Calcular Fatorial"
$("#calcular").click(function (e) {
  const number = parseInt($("#inputNumero").val());
  const resultElement = document.getElementById("resultado");

  // Verifica se o valor inserido é um número válido e não negativo
  if (isNaN(number) || number < 0) {
    // Exibe mensagem de erro se a entrada for inválida
    resultElement.textContent = "Por favor, insira um número inteiro e que não seja negativo!";
    return;
  }

  const fatorial = calculaFatorial(number);

  // Exibe o resultado na página
  resultElement.textContent = `O fatorial de ${number} é ${fatorial}.`;
});

// Função que calcula o fatorial de um número
function calculaFatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result; // Retorna o resultado final do fatorial
}
