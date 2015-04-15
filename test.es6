import assert from 'assert';
import apply from './';

it('fj-apply', () => {
  assert.equal(apply(Math.min, [-1,1,0,2,42]), -1);
});
