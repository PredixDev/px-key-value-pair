suite('Custom Automation Tests for px-key-value-pair', function() {
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
  test('key-value pair key gets the correct classes', function(done) {
    let key = Polymer.dom(kvp.root).querySelector('div:first-of-type');
    async.until(
      ()=> {
        return key.classList.contains('label');
      },
      (callback)=> {
        setTimeout(callback, 1000);
      },
      ()=> {
        assert.isTrue(key.classList.contains('label'));
        done();
      }
    );
  });
  test('key-value pair value gets the correct classes', function(done) {
    let val = Polymer.dom(kvp.root).querySelector('div:last-of-type');
    async.until(
      ()=> {
        return val.classList.contains('beta') && val.classList.contains('kvp-value--beta');
      },
      (callback)=> {
        setTimeout(callback, 1000);
      },
      ()=> {
        assert.isTrue(val.classList.contains('beta'));
        assert.isTrue(val.classList.contains('kvp-value--beta'));
        done();
      }
    );
  });
  test('key-value pair uom text gets the correct classes', function() {
    let uom = Polymer.dom(kvp.root).querySelector('span');
    assert.isTrue(uom.classList.contains('kvp-uom--beta'));
  });
});
