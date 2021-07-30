
// Step 1: Create reusable jQuery plugin
// =====================================

$.fancyConfirm = function( opts ) {
  opts  = $.extend( true, {
    title     : 'Are you sure?',
    message   : '',
    okButton  : 'OK',
    noButton  : 'Cancel',
    callback  : $.noop
  }, opts || {} );

  $.fancybox.open({
    type : 'html',
    src  :
    '<div class="fc-content" style="text-align: center;">' +
    '<h3>' + opts.title   + '</h3>' + '<br>' +
    '<p class="tright">' +
    '<a data-value="0" data-fancybox-close id="cancelBtn">' + opts.noButton + '</a>' +
    '<button data-value="1" data-fancybox-close class="btn" id=""okBtn">' + opts.okButton + '</button>' +
    '</p>' +
    '</div>',
    opts : {
      animationDuration : 350,
      animationEffect   : 'material',
      modal : true,
      baseTpl :
      '<div class="fancybox-container fc-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-stage"></div>' +
      '</div>' +
      '</div>',
      afterClose : function( instance, current, e ) {
        var button = e ? e.target || e.currentTarget : null;
        var value  = button ? $(button).data('value') : 0;

        opts.callback( value );
      }
    }
  });
}

// Step 2: Start using it!
// =======================

$("#call_confirm").click(function() {

  // Open customized confirmation dialog window
  $.fancyConfirm({
    title     : "Call (231) 709-3904",
    okButton  : 'Continue',
    noButton  : 'Cancel',
    callback  : function (value) {
      if (value) {
        console.log('continue');
        window.location = "tel:2317093904";
      } else {
        console.log('cancel');
      }
    }
  });

});