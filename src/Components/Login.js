import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import google from './Login.css'
import * as ReactDOM from "react-dom";

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
var newObj;

class Login extends Component {
  constructor(props) {
    super(props)
   /* this.state = {
      googleId: '',
      name: '',
      email: ''
    }*/
    this.loginSuccess = this.loginSuccess.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    const query = ['user', 'admin'];
    query.map((query) => {
      console.log('Fetching Docs');
      let user = JSON.parse(sessionStorage.getItem('userDetails'));
      console.log('for user: ' + user.email);
      const url = `https://hometaskss.herokuapp.com/${query}`;
      let url2 = 'https://hometaskss.herokuapp.com/tasks';

      fetch(url).then((res) => {
        return res.json();
      }).then((data) => {
        data.map((doc) => {
          if (doc.email == user.email) {
            console.log('found a match!');
            sessionStorage.setItem('userType', JSON.stringify(query));
            sessionStorage.setItem('userPilotsDetails', JSON.stringify(doc));
            fetch(url2).then((res) => {
              return res.json();
            }).then((data) => {
              sessionStorage.setItem('projects', JSON.stringify(data));
            });
          }
        })
      }).then(() => {
        sleep(500).then(() => {
          (JSON.parse(sessionStorage.getItem('userType')) == 'consumer') ? this.props.history.push('/ConsumerHome') : (JSON.parse(sessionStorage.getItem('userType')) == 'producer') ? this.props.history.push('/ProducerHome') : this.props.history.push('/register')
        })
      })
    });
  }

  onSearch = (e) => {
    e.preventDefault();
    const element = JSON.parse(sessionStorage.getItem('givenName'))
    ReactDOM.render(element, document.getElementById('root'));
  }


  loginSuccess() {
    sessionStorage.setItem('userDetails', JSON.stringify(this.state.userDetails.profileObj));
    this.onSearch();
  }

  responseGoogle(response) {
    !response ? console.log('Failed to connect') : this.setState({ userDetails: response });
    !this.state.userDetails ? null : this.loginSuccess();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col order-12">
          </div>
          <div className="col order-1">
            <GoogleLogin style={google}
                         clientId={'999528345472-efjtsf71orgueb44a8ioq553hm1g06sv.apps.googleusercontent.com'}
                         buttonText="GOOGLE ME"
                         onSuccess={this.responseGoogle}
                         onFailure={this.responseGoogle}>
              <button className="loginBtn loginBtn--google">
                Login with Google
              </button>
            </GoogleLogin>

          </div>
        </div>
      </div>

    )

  }

  componentWillMount() {
    this.fetch_info()
  }

  fetch_info() {
     newObj = JSON.parse(sessionStorage.getItem('userDetails'));
   /* this.state({
    //  googleId: newObj.googleId,
      name: newObj.name,
      email: newObj.email,

    });*/
console.log(newObj);
  }


/* render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            newObj1 = {JSON.parse(sessionStorage.getItem('userDetails'))};

console.log(newObj1);
             googleId={this.props.googleId}
            name={this.state.name}
            email={this.state.email}
            <h1> googleId</h1>
          </div>
        </div>
      </div>
    )
  }*/
}

export default Login;

