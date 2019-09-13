import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';



class App extends React.Component {
  render() {
    function onChange(a, b, c) {
      console.log(a, b, c);
    }
    return(
      <div>
        <Carousel afterChange={onChange}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
      </div>
    )
  }
}

export default App;
