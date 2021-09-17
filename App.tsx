import { Provider } from 'mobx-react';
import presenters from './src/configurator';
import React from 'react';
import ReactTextFieldView1 from './src/scenes/ReactTextFieldView1';

export default function App() {
  return (
    <Provider {...presenters}>
      <ReactTextFieldView1/>
    </Provider>
    
  )
}