define(['../events/EventDispatcher'], function (EventDispatcher) {
    EventDispatcher.started.add(onStarted);

    function onStarted(param1, param2) {
        alert(param1 + ' | ' + param2);
    }
});