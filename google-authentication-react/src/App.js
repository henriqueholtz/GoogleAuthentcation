import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    const { profileObj: { name, email, imageUrl } } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
    setName('');
    setEmail('');
    setProfilePic('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
            {isLoggedIn ? (
                <>
                    <div  style={{ padding: '30px 60px', border: '2px solid #ccc' }}>
                      <h1>User Information</h1>
                      <img src={profilePic} alt="profile" />
                
                      <p>Name: {name}</p>
                      <p>Email: {email} </p>
                    </div>
                    <button onClick={() => logout()}>Logout</button>
                  </>
                ) : (
                  <div>
                    <span style={{ display: 'block', marginTop: '40px'}}>Hello, welcome to Google Authentication Example with React</span>
                    <div style={{ marginTop: '60px'}}>
                      <GoogleLogin
                        clientId="779353502918-khhi4aa617b0ucnq95ee7tg3r8iltubd.apps.googleusercontent.com"
                        buttonText="Login with Google Example"
                        onSuccess={responseGoogle}
                        onFailure={() => console.log('failure login')}
                      />
                    </div>     
                  </div>
                )}
        </div>
      </header>
    </div>
  );
}

export default App;
