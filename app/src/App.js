import React, { Component } from 'react';
import './App.css';



class Header extends Component {

  render() {
    return (
      <header>
        <h1>My first React app!</h1>
      </header>
    );
  }
}

class Form extends Component {

  render() {
    return (
      <div id="formContent">
        <div>
          <span>First Name:</span><br/>
          <input id="firstName" type="text" /><br/>
          <span>Last Name:</span><br/>
          <input id="lastName" type="text" /><br/>
          <span>Email:</span><br/>
          <input id="email" type="text" />
        </div>
        <div>
          <span>Address:</span><br/>
          <input id="address" type="text" /><br/>
          <span>City:</span><br/>
          <input id="city" type="text" /><br/>
          <span>State:</span><br/>
          <input id="state" type="text" /> <br/>
          <span>Zip Code:</span><br/>
          <input id="zip" type="text" />
        </div>
      </div>
    );
  }
}

class Links extends Component{

  render(){
    return (
      <div id="links">
        <a class="logoLink" id="microsoft" href="http://microsoft.com" target="_blank">
          <div></div>
        </a>
        <a class="logoLink" id="google" href="http://google.com" target="_blank">
          <div></div>
        </a>
        <a class="logoLink" id="github" href="http://github.com" target="_blank">
          <div></div>
        </a>
        <a class="logoLink" id="verge" href="http://theverge.com" target="_blank">
          <div></div>
        </a>
        <a class="logoLink" id="amazon" href="http://amazon.com" target="_blank">
          <div></div>
        </a>
      </div>
    );

  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Links />
      </div>
    );
  }
}

export default App;
