console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}
console.log('Nayla Gomes'.reverse());

Array.prototype.first = function() {
    return this[0];
}
console.log([1, 2, 3, 4 , 5].first());

String.prototype.toString = function() {
    return 'Lascou tudo';
}
console.log('Nayla Gomes'.reverse());
