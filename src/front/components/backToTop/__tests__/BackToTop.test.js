// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import BackToTop from '../BackToTop';
// #endregion

describe('BackToTop component', () => {
  it('renders as expected', () => {
    const props = {
      minScrollY: 40,
      scrollTo: 'appContainer',
      onScrollDone: () => {},
    };

    const component = renderer
      .create(
        <div id="appContainer">
          <BackToTop {...props} />
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
