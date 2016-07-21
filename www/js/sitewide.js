/**
 * Created by simba on 14/02/15.
 */
/* Function to load scripts */
var load_script = function( options ) {
    /*
     Use text/javascript is no type is defined.
     */
    if ( options.type === undefined ) {
        options.type = 'text/javascript' ;
    }
    /*
     Create an JS element and add it to the end of the current list of elements.
     */
    source_element = document.createElement('SCRIPT') ;
    source_element.type = options.type ;
    source_element.src = options.script ;
    source_element.defer = true ;
    source_element.async = true ;
    /*
     If a callback has been provided then run that code once the script has been successfully donwloaded and is in a ready state.
     */
    if ( typeof( options.callback ) == "function" ) {
        source_element.onreadystatechange = source_element.onload = function() {
            var state = source_element.readyState;
            if ( !options.done && ( !state || /loaded|complete/.test( state ) ) ) {
                options.done = true ;
                options.callback() ;
            }
        };
    }
    document.getElementsByTagName('head')[0].appendChild( source_element ) ;
};

//Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59740288-1', 'auto');
ga('send', 'pageview');


//Quiddi Scripts
//Call credit script
load_script( { script: "//d3c3cq33003psk.cloudfront.net/opentag-88319-1593523.js" } ) ;
load_script( { script: "//d2oh4tlt9mrke9.cloudfront.net/Record/js/sessioncam.recorder.js" } ) ;
