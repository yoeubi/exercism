class Anagram {
    constructor(word){
        this.origin = word;
        this.word = word.toLowerCase().match(/[a-z]/g).reduce((acc, char) => {
            if (!acc[char]) acc[char] = 1;
            else acc[char] += 1;
            return acc;
        }, {})
    }
    matches(listOfWord){
        return listOfWord.filter(word => {
            if(word.toLowerCase() === this.origin.toLowerCase()) return false;
            const chunk = word
              .toLowerCase()
              .match(/[a-z]/g)
              .reduce((acc, char) => {
                if (!acc[char]) acc[char] = 1;
                else acc[char] += 1;
                return acc;
              }, {});
            const compare = Object.keys(chunk);
            return compare.every( prop => {
                if (this.word[prop] && chunk[prop] && this.word[prop] === chunk[prop]) return true;
                else false;
            })
        })
    }
}
export default Anagram;