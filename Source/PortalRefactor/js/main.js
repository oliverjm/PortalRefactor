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

require(['jquery', '../controllers/SideNavigationController', '../controllers/TopNavigationController'], function ($, SideNavigationController, TopNavigationController) {
    $('#app').html('Hello World');

    TopNavigationController.started.add(SideNavigationController.onStarted);
    TopNavigationController.start();
});