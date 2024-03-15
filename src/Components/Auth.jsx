import React from 'react'
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(config);

const Auth = ({signOut,user}) => {
    const services = {
        async hadnleSignin(formData) {
          let { username, password, attributes } = formData;
          // custom username
          username = username.toLowerCase();
          attributes.email = attributes.email.toLowerCase();
          await Auth.signUp({
            username,
            password,
            attributes,
            autoSignIn: {
              enabled: true,
            },
          });
          window.location.href='/';
        },
      };
  return (
    <><Authenticator services={services} initialState="signUp">
    {/* {({ signOut }) => <button onClick={signOut}>Sign out</button>} */}
  </Authenticator>
     {/* <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    */}
      </>
    )
}
export default Auth;
// export default Auth