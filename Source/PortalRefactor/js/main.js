require.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery':'jquery/jquery',
        'bootstrap': 'bootstrap/bootstrap.min',
        'handlebars': 'handlebars/handlebars-v1.3.0',
        'signals': 'signals/signals'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['jquery', '../controllers/SideNavigationController', '../events/EventDispatcher', '../controllers/TopNavigationController'], function ($, SideNavigationController, EventDispatcher, TopNavigationController) {
    $('#app').html('Hello World');

    EventDispatcher.started.dispatch('This', 'Works');
});