function Processor(brandName, name, speed, core, threads) {
    this.brandName = brandName;
    this.name = name;
    this.speed = speed;
    this.threads = threads;
    this.core = core;
    this.display = function () {
	   console.log(`Processor ${this.brandName} ${this.name} frequency up to ${this.speed} GHz with ${this.core} and ${this.threads} threads`)
    }
}
var displayCarac = new Processor("Intel Core", "i9-9900K", 5, 8, 18);
console.log(displayCarac);
displayCarac.display();
