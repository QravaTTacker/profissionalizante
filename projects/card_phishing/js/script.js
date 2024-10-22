const input = document.querySelector("input#card_number");

input.addEventListener("input", () => {
  let valor = input.value.replace(/\D/g, "");
  let formattedValue = "";

  for (let i = 0; i < valor.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " ";
    }
    formattedValue += valor[i];
  }

  input.value = formattedValue;
});
