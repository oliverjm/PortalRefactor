define(['jquery', 'handlebars', '../extensions/HandlebarsExtensions', '../events/EventDispatcher'], function ($, Handlebars, HandlebarsExtensions, EventDispatcher) {
    var data = {
        areas: [
            {
                'id': 1,
                'path': 'www.google.com',
                'icon': 'glyphicon-cog',
                'title': 'Goggle'
            },
            {
                'id': 2,
                'path': 'www.espn.com',
                'icon': 'glyphicon-leaf',
                'title': 'ESPN'
            }
        ]
    };
    
    var leftNavigationTemplate = HandlebarsExtensions.getTemplate('LeftNavigationTemplate');

    var leftNavigationHtml = leftNavigationTemplate(data);

    $('#leftNav').html(leftNavigationHtml);

    EventDispatcher.started.add(onStarted);

    function onStarted(param1, param2) {
        alert(param1 + ' | ' + param2);
    }
});