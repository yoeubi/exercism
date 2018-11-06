const compute = (str1 ,str2) => {
    if (str1.length !== str2.length) throw new Error('left and right strands must be of equal length');
    return str1.split('').reduce((acc,char,index) => acc += char !== str2[index] ? 1 : 0 , 0);
}
export { compute } 