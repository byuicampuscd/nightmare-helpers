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

    Nightmare.action("setWaitTimeout", function (min, sec, ms, done) {

        min = min * 60 * 1000;
        sec = sec * 1000;
        var timeOut = min + sec + ms;
        this.options.waitTimeout = timeOut;

        console.log('Set wait timeout to:', timeOut);

        done();

    });
}
//di
