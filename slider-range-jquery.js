/******************************

 Slider Range using jQuery

******************************/


$(document).ready(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100,
        values: [20, 80],
        slide: function(event, ui) {
            $("#range-value").text(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#range-value").text($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1));
});
