import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ReactPlayer from '../../node_modules/react-player';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ReactPlayer url='https://www.youtube.com/watch?v=9Hztx59K6m8' playing />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
