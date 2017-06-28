/* eslint-env node, browser */
/* eslint no-console:0 */
module.exports = function (Nightmare) {
    //this is what the nightmare.use function does so I figured it would work and it does
    Nightmare.prototype.waitURL = function (url) {
        //it cues up the wait for us
        this.wait(function (url) {
            url = new RegExp(url);
            return url.test(document.location.href);
        }, url);

        //and keeps going
        return this;
    }

    //This allows you to change the wait time out on the fly
    Nightmare.action("setWaitTimeout", function (min, sec, ms, done) {

        min = min * 60 * 1000;
        sec = sec * 1000;
        var timeOut = min + sec + ms;
        this.options.waitTimeout = timeOut;

        console.log('Set wait timeout to:', timeOut);

        done();
    });

    //This resolves a local path to an absolute path on the local system and adds the file protocol
    Nightmare.prototype.gotoLocal = function (pathText) {
        var path = require('path');
        if (pathText.search(/https?/) > -1) {
            throw new Error("gotoLocal is used to load local files not web addresses.");
        }

        // preppend file protocol and make absolute path
        this.goto("file:///" + path.resolve(pathText));

        //and keep going
        return this;
    }

    //This is an example of how to pass in and recive data
    /*
    Nightmare.action('printJAM', function (name, options, parent, win, renderer, done) {
            console.log(name);
            parent.respondTo('printJAM', function (words, done) {
                //document.querySelector('h1').innerHTML = words;
                console.log("electron scope: " + words);
                done(null, words);

            });
            done();
        },
        function (words, done) {
            console.log("words1: " + words);
            //console.log(this);
            this.child.call('printJAM', words, done);
            return this;
        }
    );
    */
}

