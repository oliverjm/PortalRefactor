require.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery':'jquery/jquery',
        'bootstrap': 'bootstrap/bootstrap.min',
        'handlebars': 'handlebars/handlebars-v1.3.0'
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

require(['jquery', '../controllers/SideNavigationController'], function ($, SideNavigationController) {
    $('#app').html('Hello World');

    $(document).trigger('started', ['dumb']);
});