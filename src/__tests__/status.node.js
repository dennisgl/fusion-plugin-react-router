/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import test from 'tape-cup';
import React from 'react';
import {renderToString as render} from 'react-dom/server';
import {Router, Route, Status} from '../server';

test('sets code with static code', t => {
  const Hello = () => (
    <Status code="404">
      <div>Hello</div>
    </Status>
  );
  const state = {code: 0};
  const ctx = {
    setCode(code) {
      state.code = code;
    },
  };
  const el = (
    <Router location="/" context={ctx}>
      <Route component={Hello} />
    </Router>
  );
  t.ok(/Hello/.test(render(el)), 'matches');
  t.equals(state.code, 404, 'sets code');
  t.end();
});

test('sets code with numeric code', t => {
  const Hello = () => (
    <Status code={404}>
      <div>Hello</div>
    </Status>
  );
  const state = {code: 0};
  const ctx = {
    setCode(code) {
      state.code = code;
    },
  };
  const el = (
    <Router location="/" context={ctx}>
      <Route component={Hello} />
    </Router>
  );
  t.ok(/Hello/.test(render(el)), 'matches');
  t.equals(state.code, 404, 'sets code');
  t.end();
});

test('sets code with string code', t => {
  const Hello = () => (
    <Status code={'404'}>
      <div>Hello</div>
    </Status>
  );
  const state = {code: 0};
  const ctx = {
    setCode(code) {
      state.code = code;
    },
  };
  const el = (
    <Router location="/" context={ctx}>
      <Route component={Hello} />
    </Router>
  );
  t.ok(/Hello/.test(render(el)), 'matches');
  t.equals(state.code, 404, 'sets code');
  t.end();
});
