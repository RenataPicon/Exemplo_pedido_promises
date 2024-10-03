
const valueList = [
    {descrição: 'pastel', preço: 6},
    {descrição: 'risóles', preço: 6},
    {descrição: 'croissant', preço: 7},
    {descrição: 'enroladinho', preço: 6},
    {descrição: 'brigadeiro', preço: 3},
    {descrição: 'sanduíche', preço: 6},
    {descrição: 'sanduíche de frango', preço: 7},
];
let total = 0;
const sumValues = ((valueList) => {
    for(let value of valueList) {
        total += value.preço; //acrescenta ao decorrer do array
    }
    return total;
});
console.log(sumValues(valueList));