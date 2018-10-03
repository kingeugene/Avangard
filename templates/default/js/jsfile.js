
var sp_preloader = '0';
var sp_gotop = '1';
var sp_offanimation = 'fullscreen';
jQuery(function($) {
    initChosen();
    $("body").on("subform-row-add", initChosen);

    function initChosen(event, container) {
        container = container || document;
        $(container).find(".advancedSelect").chosen({
            "disable_search_threshold": 10,
            "search_contains": true,
            "allow_single_deselect": true,
            "placeholder_text_multiple": "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0430\u0431\u043e \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0435\u044f\u043a\u0456 \u043e\u043f\u0446\u0456\u0457",
            "placeholder_text_single": "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",
            "no_results_text": "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"
        });
    }
});


