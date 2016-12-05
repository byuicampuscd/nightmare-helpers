modules.export = function (Nightmare) {

    Nightmare.prototype.waitURL = function (url) {
        this.wait(function (url) {
            url = new RegExp(url);
            return url.test(document.location.href);
        }, url);

        return this;

    }
}
