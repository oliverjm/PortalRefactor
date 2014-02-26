requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery':'jquery/jquery',
        'bootstrap': 'bootstrap/bootstrap.min',
        'handlebars': 'handlebars/handlebars-v1.3.0',
        'handlebarsExtensions': 'handlebars/extensions/handlebars.extensions'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'handlebarsExtensions': {
            deps: ['handlebars']
        }
    }
});

requirejs(['jquery', 'handlebars', 'handlebarsExtensions'], function ($, Handlebars) {
    $('#app').html('Hello World');
});