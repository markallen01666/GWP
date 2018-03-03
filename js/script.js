// Great War Project webapp functionality
// for MVCAP by M Allen: Freelance Web Developer - 2017

// Enable functionality when document has loaded
$(document).ready(function() {
  // Complete contact form address using Javascript to challenge spam bot address collection 
  var contactform =  document.getElementById('contactform');
  contactform.setAttribute('action', 'https://formspree.io/' + 'webadmin' + '@' + 'mvcap' + '.' + 'org.uk');
});
