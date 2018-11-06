class Cipher {
    constructor(salt){
        this._origin = "abcdefghijklmnopqrstuvwxyz";
        if (typeof salt === 'undefined') salt = this.generator();
        if ( !salt || /^[a-z]+$/g.test(salt) === false) throw new Error("Bad key");
        this.key = salt;
    }
    encode(str){
        return [...str].map((char , index)=> {
            let newIdx = this._origin.indexOf(char) + this._origin.indexOf(this.key[index % this.key.length]);
            newIdx = newIdx % this._origin.length;
            return this._origin[newIdx];
        }).join('')
    }
    decode(str){
        return [...str].map((char,index) => {
            let newIdx = this._origin.indexOf(char) - this._origin.indexOf(this.key[index]);
            newIdx = (newIdx + this._origin.length) % this._origin.length;
            return this._origin[newIdx];
        }).join('')
    }
    generator(){
        const randomIdx = () => Math.floor(Math.random() * this._origin.length);
        return Array.from({ length: 100 }, () => this._origin[randomIdx()]).join('')
    }
}
export {Cipher}