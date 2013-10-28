[![Build Status](https://travis-ci.org/auth0/auth0.js.png)](https://travis-ci.org/auth0/auth0-widget.js)

[![Auth0](http://blog.auth0.com.s3.amazonaws.com/logo-290x200-letters.png)](http://auth0.com)

[Auth0](http://auth0.com) is an authentication broker that supports social identity providers as well as enterprise identity providers such as Active Directory, LDAP, Office365, Google Apps, Salesforce.

The Auth0 Login Widget makes it easy to integrate SSO in your app. You won't have to worry about:
* Having a professional looking login dialog that displays well on any resolution and device.
* Finding the right icons for popular social providers.
* Remembering what was the identity provider the user chose the last time.
* Solving the home realm discovery challenge with enterprise users (i.e.: asking the enterprise user the email, and redirecting to the right enterprise identity provider).
* Implementing a standard sign in protocol (OpenID Connect / OAuth2 Login)

## Example

The example directory has a ready-to-go app. In order to run it you need [node](http://nodejs.org/) installed, then execute `npm run example` from the root of this project.

## Usage

Take `auth0-widget.js` or `auth0-widget.min.js` from the `build` directory and import it to your page.

### Initialize:

Construct a new instance of the Auth0 Widget as follows:

~~~html
<script src="auth0-widget.min.js"></script>
<script type="text/javascript">
  var widget = new Auth0Widget({
    domain:       'mine.auth0.com',
    clientID:     'dsa7d77dsa7d7', 
    callbackURL:  'http://my-app.com/callback'
  });
  
  // ...
</script>
~~~

### Show Widget:

To invoke the widget, use the `show` method:

~~~html
widget.show(options, callback);
~~~

#### Options

* __connections__: Array of enabled connections that will be used for the widget- _Default: all enabled connections_.
* __resources__: JSON object that contains your customized text labels. As a reference, you can take a look at the example app which customizes all of the supported labels to Spanish.
* __container__: The id of the DIV where the widget will be contained.
* __icon__: Icon url. _Recommended: 32x32_.
* __showIcon__: Show/Hide widget icon. _Default: false_.

~~~javascript
widget.show({
  connections: ['facebook', 'google-oauth2', 'twitter', 'Username-Password-Authentication', 'fabrikam.com'],
  resources: {
    "title": "Sign In with Auth0"
  },
  container: 'root',
  icon: 'https://s3.amazonaws.com/assets.fabrikam.com/w2/img/logo-32.png',
  showIcon: true
},
funcion () {
  // The Auth0 Widget is now loaded.
});
~~~

## Develop

Run `npm run dev` and point your browser to `http://localhost:9999/` to run the test suite.

## Anatomy of the Auth0 Login Widget

![](https://docs.auth0.com/img/widget-numbered.png)

1. The __title__ of the widget. You can optionally show a 32x32 icon (from options.icon).
2. The __social buttons__ will be shown if you have at least one social connection enabled.
3. The __Email__ field will be shown if you have at least one enterprise connection enabled. The __Password__ field will be shown if you have a Database connection. 
4. The __Sign Up__ and __Forgot Password__ links will be shown if you have a Database connection. 

> **How does enterprise SSO work?** Consider a user that enters john@**fabrikam.com**. If there's an enterprise connection with an associated domain "**fabrikam.com**", then the password field will be hidden. When the user clicks on __Sign In__, he/she will be redirected to the corresponding identity provider (Google Apps, AD, Windows Azure AD, etc.) where that domain is registered. If the user is already logged in with the Identity Provider, then Single Sign On will happen.

## Browser Compatibility

We are using [BrowserStack](http://browserstack.com) and [Travis-CI](http://travis-ci.org) to run the test suite on multiple browsers on every push.

## License 

The MIT License (MIT)

Copyright (c) 2013 AUTH10 LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
