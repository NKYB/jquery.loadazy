/*!
 * LoadLazy v1.0.0
 * add a loading image and have it swap/fire event when the real image is loaded
 * http://applycontext.com
 *
 * Licensed under the GPL v3 License
 *
 * Copyright 2015 applycontext.com
 * 
 * Basic Example
 * 
 * <div id="image_contaner_div">  
 *      <img src="loading.png" data-src="on_fire_logo_that_spins.png">  
 *      <img src="loading.png" data-src="on_fire_logo_that_spins_large.png"> 
 *      <img src="loading.png" data-src="on_fire_logo_that_spins_giant.png"> 
 * </div>
 * <script>
 *      $('#image_contaner_div').Loadazy({imageLoaded: function(el, image){
 *          console.log('done loading image', el, image);
 *      }});
 * </script>     
 */


;(function ( $, window, document, console, undefined ) {
    var pluginName = "Loadazy";
    
    if(typeof(console) === 'undefined') {
        var console = {}
        console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
    }

    function Plugin( element, options, pluginName ) {
        var defaults = {
            element: element,
            dataSelector: 'src',
            imageLoaded: function(){}
        };
        this.options = $.extend(defaults, options);
        
        $.proxy(this._init(),this);
        return this;
    }
    
    Plugin.prototype = {
        _init: function(){
            var self = this;
            $(this.options.element).find('img').each($.proxy(function(index, el){
                var image = $('<img />');
                image.on('load', $.proxy(function () {
                    this._swap(el, image);
                },this));
                image.attr('src',$(el).data(this.options.dataSelector));
                if (image.complete) {
                    this._swap(el, image);
                }
            },this));
        },
        _swap: function(el, image){
            $(el).attr('src', image.attr('src'));
            this.options.imageLoaded(el, image);
        }
    };

    $.fn[pluginName] = function ( options ) {
        return new Plugin( this, options, pluginName );
    };
})( jQuery, window, document, console );