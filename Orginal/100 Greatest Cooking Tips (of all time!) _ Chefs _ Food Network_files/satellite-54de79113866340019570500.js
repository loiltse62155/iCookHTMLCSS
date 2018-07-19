_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){ 
  var org_tl = s.tl; 
	s.tl = function() { 
  	if ( s.events === 'event1' ) { 
  	  s.events = ""
  	}; 
  	return org_tl.apply(this,arguments);
	} 
})();
});
