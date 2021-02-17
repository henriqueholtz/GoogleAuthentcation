import React from 'react'
import GoogleLogin from 'react-google-login'
import './App.css';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello, welcome to Google Authentication Example with React
            <div style={{ marginTop: '40px' }}>
              <GoogleLogin
                clientId="779353502918-khhi4aa617b0ucnq95ee7tg3r8iltubd.apps.googleusercontent.com"
                buttonText="Login with Google Example"
                onSuccess={responseGoogle}
                onFailure={() => console.log('failure login')}
              />
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
