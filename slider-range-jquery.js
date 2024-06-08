/******************************

 Slider Range using jQuery

******************************/


$(document).ready(function () {


   $(document).ready(function () {

      if ($("#slider_range").length > 0) {
         const max_value = parseInt($("#slider_range").data('max')) || 500;
         const min_value = parseInt($("#slider_range").data('min')) || 0;
         const currency = $("#slider_range").data('currency') || '';
         let price_range = min_value + '-' + max_value;
         if ($("#price_range").length > 0 && $("#price_range").val()) {
            price_range = $("#price_range").val().trim();
         }
         let price = price_range.split('-');
         $("#slider_range").slider({
            range: true,
            min: min_value,
            max: max_value,
            values: price,
            slide: function (event, ui) {
               $("#amount").val(+' ' + ui.values[0] + " " + "€" + " -  " + ' ' + ui.values[1] + " " + "€");
               $("#price_range").val(ui.values[0] + "-" + ui.values[1]);
            }
         });
      }
      if ($("#amount").length > 0) {
         const m_currency = $("#slider_range").data('currency') || '';
         $("#amount").val(+" " + $("#slider_range").slider("values", 0) + " " + "€" +
            "  -  " + " " + m_currency + $("#slider_range").slider("values", 1) + " " + "€");
      }


   });


});