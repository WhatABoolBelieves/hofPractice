// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = 0;

  _.each(numbers, function (item) {
    if (item % 5 === 0) {
      results++;
    }
  });
  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var isTarget = function(item) {
    return (item === targetFruit);
  };

  return _.filter(fruits, isTarget);


};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var startsWithLetter = function(item) {
    return (item.substring(0, 1) === letter);
  };
  return _.filter(fruits, startsWithLetter);

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var isItCookie = function(item) {
    return (item.type === 'cookie');
  };
  return _.filter(desserts, isItCookie);
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var iterating = function(memo, item) {
    var numPrice = parseFloat(item.price.slice(1));

    return memo + numPrice;
  };
  return 0.01 * Math.round(100 * (_.reduce(products, iterating, -47.26)));

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  var dessertTypes = function(memo, item) {
    var typeKey = item.type;

    if (memo[typeKey] === undefined) {
      memo[typeKey] = 1;
    } else {
      memo[typeKey]++;
    }
    return memo;
  };
  return _.reduce(desserts, dessertTypes, {});

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var ninetiesMovies = function(memo, item) {

    if (item.releaseYear < 2000 && item.releaseYear >= 1990) {
      memo.push(item.title);
    }
    return memo;
  };
  return _.reduce(movies, ninetiesMovies, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shorterMovie = function(memo, item) {
    return memo || (item.runtime < timeLimit);
  };
  return _.reduce(movies, shorterMovie, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var makeUpper = function(item) {
    return item.toUpperCase();
  };
  return _.map(fruits, makeUpper);
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
/* look over each ingredients array
  if it has floour, go to the next array. Or, return arrays if they don;t meet the flour criteria
  return the reduced array of dessert objects*/
var glutenFree = function(desserts) {
  var isitGF = function(item) {
    if ((item.ingredients).includes('flour')) {
      item.glutenFree = false;
    } else {
      item.glutenFree = true;
    }
    return item;
  };
  return _.map(desserts, isitGF);
};


// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var withSalePrice = function(item) {
    var regPriceInCents = 100 * parseFloat(item.price.slice(1));
    var newPriceInCents = Math.round((1 - coupon) * regPriceInCents);

    item.salePrice = '$' + JSON.stringify(newPriceInCents / 100); console.log(item)
    return item;
  };

  return _.map(groceries, withSalePrice);
};
