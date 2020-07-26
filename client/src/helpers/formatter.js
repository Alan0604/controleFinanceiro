const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
const zeroLeft = Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 });

export { moneyFormatter, zeroLeft };
