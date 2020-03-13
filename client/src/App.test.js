import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByText } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows data so my TL doesnt give me a 1', () => {
  const {getByText} = render(<App/>);
  getByText(/name/i);
});
