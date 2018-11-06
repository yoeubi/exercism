const encode = str => str !== '' ? str.replace(/([\w\W])\1+/g, (char,p1) => `${char.length}${p1}`) : '';
const decode = str => str !== '' ? str.replace(/([\d]+)([\w\W])/g, (char, p1, p2) => p2.repeat(p1)) : '';
export { encode, decode }