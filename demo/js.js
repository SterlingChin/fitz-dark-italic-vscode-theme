class Sale {
	constructor(price) {
		[this.decoratorsList, this.price] = [[], price];
	}

	decorate(decorator) {
		if (!Sale[decorator]) {
			throw new Error(`decorator not exist: ${decorator}`);
		}

		this.decoratorsList.push(Sale[decorator]);
	}

	getPrice() {
		for (const decorator of this.decoratorsList) {
			this.price = decorator(this.price);
		}

		return this.price.toFixed(2);
	}

	static quebec(price) {
		// this is a comment
		return (price + price) * 7.5 / 100;
	}

	static fedtax(price) {
		return (price + price) * 5 / 100;
	}
}

const sale = new Sale(100);

sale.decorate(`fedtax`);
sale.decorate(`quebec`);
console.log(sale.getPrice()); // 112.88

getPrice();

//--------------------

const hello = `I am never used`;

doesNotExist.nope(`I'm never imported`);

class widget extends Component {}

const joe = function() {};

let fitz = 100;

function fitz(one) {
	return one;
}

fitz = (one) => one;

console.log(joe, fitz);

randomArray = [2, 3, 5, 6, 8, 9, 10];

randomObject = {
	one    : true,
	two    : null,
	three  : undefined,
	four   : 4,
	five   : `five`,
	six    : Symbol(`six`),
	seven  : {
		number : 7,
	},
	eight,
	nine(num) {
		return num + this.four === 9;
	},
	ten() {
		this.nine();
	},
	eleven : [1, 2, 3, 4],
};

let one = randomObject.one;

one = randomObject[one];

const two = randomArray[2];

const arrayOfEvens = arr.filter((num) => {
	return num % 2 === 0 ? num * 2 : false;
});

const arrayOfOdds = arr.filter((num) => num % 2 !== 0);

arrayOfEvens(randomArray);
arrayOfOdds();
