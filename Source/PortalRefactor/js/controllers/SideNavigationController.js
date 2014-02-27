define(['jquery', 'handlebars'], function ($, Handlebars) {
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

    var leftNavigationSource = '<ul id="left-nav"class="nav nav-list">' +
                                    '<li class="nav-header">Grant Manager</li>' +
                                    '<li id="main-leftNav-li"><a href="/main.html"><i class="icon-home"></i>Home</a></li>' +
                                    '{{#areas}}' +
                                    '<li id="{{id}}-leftNav-li">' +
                                       '<a href="{{path}}">' +
                                          '<i class="glyphicon {{icon}}"></i>' +
                                             '{{title}}' +
                                       '</a>' +
                                    '</li>' +
                                    '{{/areas}}' +
                                 '</ul>';

    var leftNavigationTemplate = Handlebars.compile(leftNavigationSource);

    var leftNavigationHtml = leftNavigationTemplate(data);

    $('#leftNav').html(leftNavigationHtml);
});