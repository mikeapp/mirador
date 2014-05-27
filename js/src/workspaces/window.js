(function($) {

  $.Window = function(options) {

     jQuery.extend(true, this, {
         element:           null,
         appendTo:          null,
         manifest:          null,
         uiState:           {'ThumbnailsView': true, 'ImageView': false},
         overlayState:      {'metadata': false, 'toc': false, 'thumbnails' : false}
         
     }, $.DEFAULT_SETTINGS, options);
          
     this.init();

  };

  $.Window.prototype = {
      init: function () {
            this.element = jQuery(this.template()).appendTo(this.appendTo);

            this.bindEvents();
      },
      
      bindEvents: function() {
            var _this = this;
            
            jQuery.subscribe('manifestToWindow', function(_, manifest) {
                _this.manifest = manifest;
                
                jQuery.each(_this.uiState, function(key, value){ 
                    if (value) {
                        var view = new $[key]( {manifest: manifest, appendTo: _this.element, parent: _this} );
                    }
                });
            });
      },
      
      //template should be based on workspace type
      template: Handlebars.compile([
      '<div class="window">',
      '</div>'
      ].join(''))
  };

}(Mirador));

