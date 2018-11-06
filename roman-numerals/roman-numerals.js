const toRoman = (num) => {
    const letter = {
        1: ['I', 'X', 'C', 'M'],
        5: ['V', 'L', 'D']
    }
    return num.toString().split('').reduce((acc, item, index, array) => {
        const digit = array.length - 1 - index;
        let char = letter['1'][digit].repeat(item);
        if (char.length % 5 === 4) {
            char = char.replace(/([IXCM]{1})(\1+)/g, (match, p1) => p1 + letter[char.length / 5 > 1 ? '1' : "5"][char.length / 5 > 1 ? digit + 1 : digit])
        } else if (char.length >= 5) {
            char = char.replace(/([IXCM])\1{4}/g, () => letter["5"][digit])
        }
        acc += char;
        return acc;
    }, '')
}
export default toRoman;