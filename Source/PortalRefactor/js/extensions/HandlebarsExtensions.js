define(['handlebars'], function (Handlebars) {

    function getTemplate(name) {
        if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
            $.ajax({
                url: './templates/' + name + '.handlebars',
                success: function (data) {
                    if (Handlebars.templates === undefined) {
                        Handlebars.templates = {};
                    }
                    Handlebars.templates[name] = Handlebars.compile(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    debugger;
                    console.log(textStatus, errorThrown);
                },
                async: false
            });
        }
        return Handlebars.templates[name];
    }

    return {
        getTemplate: getTemplate
    };
});