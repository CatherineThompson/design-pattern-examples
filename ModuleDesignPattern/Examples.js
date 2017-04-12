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
