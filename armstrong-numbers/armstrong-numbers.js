const validate = num => num === num.toString().split('').reduce((acc, item, index, array) => acc += Math.pow(+item, array.length), 0);
export { validate }