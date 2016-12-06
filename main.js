module.exports = function (Nightmare) {
    //this is what the use function does so I figured it would work
    Nightmare.prototype.waitURL = function (url) {
        this.wait(function (url) {
            url = new RegExp(url);
            return url.test(document.location.href);
        }, url);

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
