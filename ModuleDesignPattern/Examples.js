// Immediately-Invoked-Function-Expressions (IIFE)
(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();

// Example 1
var HTMLChanger = (function() {
  var contents = 'contents'

  // private function
  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }

  return {
    // public function
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined

// Revealing Module Pattern
var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined
