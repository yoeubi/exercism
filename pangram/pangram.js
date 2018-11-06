const isPangram = str => {
    if(str === '') return false;
    const strSet = new Set([...str.toLowerCase()]);
    for (const i of strSet) {
        if(/[^a-z]/g.test(i)) strSet.delete(i);
    }
    return strSet.size === 26;
}
export { isPangram };