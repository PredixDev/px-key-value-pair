// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-key-value-pair', function() {
    var kvp = document.querySelector('px-key-value-pair');

    test('key-value pair element is created', function() {
      assert.isTrue(kvp !== undefined);
    });
    test('key-value pair key gets the correct classes', function() {
      var key = kvp.querySelector('div:first-of-type');
      assert.isTrue(key.classList.contains('label'));
    });
    test('key-value pair value text gets the correct classes', function() {
      var val = kvp.querySelector('div:last-of-type');
      assert.isTrue(val.classList.contains('beta'));
      assert.isTrue(val.classList.contains('kvp-margin--beta'));
    });
  });
}
