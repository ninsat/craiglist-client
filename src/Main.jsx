import React from 'react';
import { render } from 'react-dom';
import Category from './Category';

render(<Category />, document.getElementById('app'));

module.hot.accept();
