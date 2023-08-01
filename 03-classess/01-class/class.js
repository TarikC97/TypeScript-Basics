var Customer = /** @class */ (function () {
    function Customer(name, prez) {
        this.ime = name;
        this.prezime = prez;
    }
    return Customer;
}());
var newObj = new Customer("Tarik", "Curic");
console.log(newObj);
