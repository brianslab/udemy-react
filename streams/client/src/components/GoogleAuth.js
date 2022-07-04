import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId    :
          '739685297559-fqj9fabm4rv57p07c29cgcc3ha2s94kl.apps.googleusercontent.com',
        scope       : 'email',
        plugin_name : 'streamy'
      });
    });
  }

  render () {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
