 import _ from 'lodash';
 import './style.css';
 import './component-css/addnew-popup.css';

import Header from './component/header.jsx';
import Content from './component/content.jsx';
import Footer from './component/footer.jsx';

import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {



  render() {
    return (
      <div className = "app">
        <Header/>
        <Content/>
        <Footer/>
      </div>
   );
  }

}

render(<App/>, document.getElementById('root'))
