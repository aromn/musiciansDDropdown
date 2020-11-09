(function($) {


    $.fn.dynamicDropdown = function(options) {

        // Defining default settings for the plugin.
        var settings = $.extend({
            url: '',
            key: '',
            value: '',
        }, options);
        
        // if the target is not a select, exits.
        if ( $(this)[0].tagName != 'SELECT' )
        {
          console.log('ERROR: Target is not a select object');
          return false;
        }

        // if the target doesn't have the class form-control from bootstrap, then is added to the target.
        if ( $(this)[0].className != 'form-control' ) {
          $(this).addClass('form-control');
        }

        // Create variable to reference 'this' object and use it later.
        let this_obj = $(this);

        // If the url was not defined or is empty, it raises an error and exits the execution.
        if (!settings.url || settings.url == '') {
          console.log('%c ERROR: Please provide an URL in the settings of the dropdown', 'background: red');
          return false;
        }
       
        // AJAX call to the url provided in the plugin's settings.
        $.getJSON(settings.url, function(result) {
          

          if (settings.key != '' && settings.value == '') {

              /* creates key object with the name of the parameter in the AJAX function above
                 concatenated with the value in settings.key. */
              var key_obj = 'result.' + settings.key;

              // for each key in result.{name of the key}...
              Object.keys(eval(key_obj)).forEach(function(x){

                // checks if the key is not an object, if true, it skips the object.
                if(typeof eval(key_obj)[x] !== 'object') 
                {
                  this_obj.append('<option>' + eval(key_obj)[x] + '</option>');  
                }
              });
          
          // If settings.key is empty and settings.value is not empty...      
          } else if (settings.key == '' && settings.value != '') {

              // For each key in result...
              Object.keys(result).forEach(function(x){

                // append the keys at settings.value to this_obj, i.e the select object.
                this_obj.append('<option>' + result[x][settings.value] + '</option>');
              });

          } else {
              var key_obj = 'result.' + settings.key;
              Object.keys(eval(key_obj)).forEach(function(x){
                this_obj.append('<option>' + eval(key_obj)[x][settings.value] + '</option>');  
              });
          }
          

        // If the call to the URL don't return a json object, it returns an error.
        }).fail(function() {
            console.log('%c ERROR: ' + 'Response data from ' + settings.url + ' is not a JSON object',
                'background: red');
        })
    };

}(jQuery));
