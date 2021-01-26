import React from 'react';
import ReactDOM from 'react-dom';
import { VFXProvider } from 'react-vfx';

//react vfx testing
window.onload = function App {
  return (
    <VFXProvider>
      <VFXSpan>Hello world!</VFXSpan>
    </VFXProvider>
  );
}

//W3 Class Template
//class Car extends React.Component {
//  render() {
//    return <h2>I am a {this.props.brand}!</h2>
//  }
//}

//const myelement = <Car brand="Ford" />;

//ReactDOM.render(<VFXSpan>Hello world!</VFXSpan>, document.getElementById('root'));
