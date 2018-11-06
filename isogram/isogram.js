const isIsogram = str => {
    str = str.replace(/[-\s]/g,'')
    const strSet = new Set([...str.toLowerCase()]);
    return strSet.size === str.length;
}
export { isIsogram }