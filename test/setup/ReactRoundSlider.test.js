import React from 'react';
import ReactDOM from 'react-dom';
import ReactRoundSlider from '../../index';

describe('ReactRoundSlider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactRoundSlider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
