/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    let label = Polymer.dom(kvp.root).querySelector('.label');
    assert.isTrue(label.classList.contains('label'));
  });
  test('key-value pair value gets the correct classes', function() {
    let val = Polymer.dom(kvp.root).querySelector('.beta');
    assert.isTrue(val.classList.contains('beta'));
    assert.isTrue(val.classList.contains('kvp-value--beta'));
  });
  test('key-value pair uom text gets the correct classes', function() {
    let uom = Polymer.dom(kvp.root).querySelectorAll('span')[1];
    assert.isTrue(uom.classList.contains('kvp-uom--beta'));
  });
});
