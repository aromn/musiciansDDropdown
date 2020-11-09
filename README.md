# dynamicdropdown-jquery

## a simple jquery plugin to feed a dropdown with json data.

## dependencies:
    * jquery
    * bootstrap(not necessary but makes it looks better).

## instructions

1. Clone this repository or install it via npm, and include musiciansddropdown.js file:
  ```
    $ git clone https://github.com/aromn/musiciansDDropdown.git
    $ # or
    $ npm install musiciansddropdown
    
    <script src="path/to/musiciansddropdown.js"></script>
  ```
 
2. Call the plugin in your HTML select dropdown:
  ```
  
    <select class="form-control" id="myDropdown"></select>
  
    $('#myDropdown').dynamicDropdown({
      url: 'http://your-url/',
      key: 'json-key',
      value: 'json-value'
    });
  ```
  
Optionally you can add **form-control** class from bootstrap, or the plugin will add it by itself.

## docs

***url (REQUIRED)***: The url to send the request. 

***key (OPTIONAL only if value is provided)***: A known Json key; Since every json has keys and values, once you know the name of the key you want to use, set it up as the key option.

***value (OPTIONAL)***: A know Json value. Json format has keys and values, sometimes values are other json objects, at this moment the plugin will ignore values if they are json objects.


