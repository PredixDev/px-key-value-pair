suite('Custom Automation Tests for px-key-value-pair', function(done) {
  let kvp;
  setup((done)=> {
    kvp = fixture('pxKeyValuePair');
    flush(()=> {
      done();
    });
  });

  test('key-value pair element is created', function() {
    assert.isTrue(kvp !== undefined);
  });
  test('key-value pair key gets the correct classes', function() {
    let key = Polymer.dom(kvp.root).querySelector('.label');
    assert.isTrue(key.classList.contains('label'));
  });
  test('key-value pair value gets the correct classes', function() {
    let val = Polymer.dom(kvp.root).querySelector('.beta');
    assert.isTrue(val.classList.contains('beta'));
    assert.isTrue(val.classList.contains('kvp-value--beta'));
  });
  test('key-value pair uom text gets the correct classes', function() {
    let uom = Polymer.dom(kvp.root).querySelector('span');
    assert.isTrue(uom.classList.contains('kvp-uom--beta'));
  });
});
