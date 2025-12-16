import 'mocha';
import { expect } from 'chai';
import { VEB, type VEB_JSON } from '../src';

it("VEB can serialize to and from JSON", () => {
  const bound: number = 2 ** 15;
  const refVEB = new VEB(bound);
  for (let i = 0; i < bound/2; i++) {
    const e = Math.floor((Math.random() * bound));
    refVEB.insert(e);
  }

  const serialized: VEB_JSON = refVEB.toJSON();
  const veb: VEB = VEB.fromJSON(serialized);
  expect(veb.size).to.eql(refVEB.size);

  expect(Array.from(veb)).to.eql(Array.from(refVEB));
});
