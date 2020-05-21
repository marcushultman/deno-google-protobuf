#!/usr/bin/env deno run

import { assert, assertEquals, assertNotEquals } from 'https://deno.land/std/testing/asserts.ts';
import { Any } from '../google/protobuf/any_pb.js'
import { Simple } from './protos/simple_pb.js';
import { Wrapper } from './protos/wrapper_pb.js';
import { WithAny } from './protos/with_any_pb.js';
import { Options } from './protos/enum_pb.js';

Deno.test({
  name: 'serialize/deserialize simple',
  fn() {
    const simple = new Simple();
    simple.setFoo('foo');
    const out = Simple.deserializeBinary(simple.serializeBinary());
    assertEquals(out.getFoo(), 'foo');
  }
});

Deno.test({
  name: 'serialize/deserialize wrapper',
  fn() {
    const simple = new Simple();
    simple.setFoo('foo');
    const wrapper = new Wrapper();
    wrapper.setBar(simple);
    const out = Wrapper.deserializeBinary(wrapper.serializeBinary());
    assertEquals(out.getBar()?.getFoo(), 'foo');
  }
});

Deno.test({
  name: 'serialize/deserialize with any',
  fn() {
    const withAny = new WithAny();
    const any = new Any();
    any.pack(new Simple().setFoo('foo').serializeBinary(), 'test.Simple');
    withAny.setFoo(any);
    const out = WithAny.deserializeBinary(withAny.serializeBinary());
    const foo = out.getFoo();
    assert(foo !== null);
    const simple = foo.unpack(Simple.deserializeBinary, 'test.Simple');
    assert(simple !== null);
    assertEquals(simple.getFoo(), 'foo');
  }
});

Deno.test({
  name: 'serialize/deserialize enum',
  fn() {
    assertNotEquals(Options.BAR, Options.FOO);
  }
});
