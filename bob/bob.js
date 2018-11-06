/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    message = message.trim().replace(/[\d\s]/g,'');
    if (message.length === 0) return "Fine. Be that way!";
    if (/[A-Z]+\?$/g.test(message) && message === message.toUpperCase()) return 'Calm down, I know what I\'m doing!';
    if (/[\w\W]*\?$/g.test(message)) return "Sure.";
    if (/[A-Z]+\!*$/g.test(message)) return "Whoa, chill out!"; 
    return "Whatever.";
};
