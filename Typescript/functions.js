function add(n1, n2) {
    return n1 + n2;
}
var sum = function (n1, n2) {
    if (typeof n1 == 'string')
        n1 = parseInt(n1);
    if (typeof n2 == 'string')
        n2 = parseInt(n2);
    return n1 + n2;
};
console.log(add(21, 3));
console.log(sum("45", '6'));
