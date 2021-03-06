/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

export class Status extends React.Component {
  componentWillMount() {
    const {router: {staticContext}} = this.context;
    if (staticContext && staticContext.setCode) {
      staticContext.setCode(parseInt(this.props.code, 10));
    }
  }

  render() {
    const children = this.props && this.props.children;
    return Array.isArray(children) ? children[0] : children;
  }
}

Status.contextTypes = {
  router: PropTypes.shape({
    staticContext: PropTypes.object,
  }),
};

export const NotFound = props => <Status code={404}>{props.children}</Status>;
