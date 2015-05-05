#Loadazy v1.0.0
jQuery plugin to add a loading image and have it swap/fire event when the real image is loaded
http://applycontext.com

Basic Example
```
<div id="image_contaner_div">  
     <img src="loading.png" data-src="on_fire_logo_that_spins.png">  
     <img src="loading.png" data-src="on_fire_logo_that_spins_large.png"> 
     <img src="loading.png" data-src="on_fire_logo_that_spins_giant.png"> 
</div>
```
```
<script>
     $('#image_contaner_div').Loadazy({imageLoaded: function(el, image){
         console.log('done loading image', el, image);
     }});
</script>     
```
Licensed under the GPL v3 License

Copyright 2015 applycontext.com
