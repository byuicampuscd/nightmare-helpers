# nightmare-helpers
Adds helper functions to the nightmare object

## Install
````
npm i https://github.com/byuicampuscd/nightmare-helpers.git --save
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
This allows you to wait until a click on a link resolves. Helpful for redirects. At this point not sure if it waits for page load or not.
#### Use
````javascript
    nightmare.waitURL({{url}});
```` 
- url: {string} | {regex obj} Url you want to wait for

#### Example
````javascript
    nightmare
        .goto("http:\\your.coolplace.com\login")
        .click(".login-button")
        .waitURL("http:\\your.coolplace.com\homepageAfterLogin")
````


### Set Wait Time out
This allows you to set the `waitTimeout` the fly. It adds together the number of minuts, seconds and milliseconds to a total waitTimeout time 
#### Use
````javascript
    nightmare.setWaitTimeout({{min}}, {{sec}}, {{ms}});
```` 
- min: {int} Number of minutes the timeout should have
- sec: {int} Number of seconds the timeout should have
- ms:  {int} Number of milliseconds the timeout should have

#### Example
````javascript
    nightmare
        .setWaitTimeout(1,2,3)
        .wait("div#cooldiv")
        .setWaitTimeout(0,0,250)
````
This would wait 1 min \* 60 \* 1000 + 2 seconds * 1000 + 3 miliseconds = 62,003 milliseconds before the `.wait("div#cooldiv")` would timeout. Then after set it to 250 millisconds for any folowing waits. 

### Go to Local 
This a convenience function make resolves a local path passed in to an absolute path on the local system and adds the file protocol `file:///` to the front of the path. Nice if you want to have a settings page load first.

#### Use
````javascript
    nightmare.gotoLocal({{pathText}});
```` 
- pathText: {string} local path can be relitive or absolute path.

#### Example
````javascript
    nightmare
        .gotoLocal("./settingsPage.html")
````
This will load `settingsPage.html` from the same folder.

