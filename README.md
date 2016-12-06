# nightmare-helpers
Adds helper functions to the nightmare object

## Install
````
npm i https://github.com/byuicampuscd/nightmare-helpers.git -save
````
## Use
This module needs to ran before nightmare is used so that the prototype can be added to.
#### Example
````javascript
Nightmare = require('nightmare');
require('nightmare-helpers')(Nightmare);
````

## API

### Wait for url after click link to new page
#### Use
`nightmare.waitURL({{url}})` 
- url: {string} || {regex obj} Url you want to wait for

#### Example
````javascript
nightmare
    .goto("http:\\your.coolplace.com\login")
    .click(".login-button")
    .waitURL("http:\\your.coolplace.com\homepageAfterLogin")
````

~~## Change wait timeout time~~