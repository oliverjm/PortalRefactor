define(['signals'], function (Signal) {

    function start() {
        this.started.dispatch('event', 'started');
    }

    return {
        started: new Signal(),
        start: start
    };
});