/* post.js
** 
** Used on post pages
** - scrolling parallax effect
** - setting margin-top according to the header height
*/

'use strict';

var nav = require('./nav.js');
var images = require('./images.js');
// var shares = require('./shares.js');


document.onreadystatechange = function() {
  if ( document.readyState === 'complete' ) {

    nav.init();
    // images.setArticleImage( 80 );
    images.setCaptions();

    // shares.init();

    /*
    if(typeof fuckAdBlock === 'undefined') {
      adBlockDetected();
    } else {
      fuckAdBlock.onDetected(adBlockDetected);
    }
    */

  }
};
