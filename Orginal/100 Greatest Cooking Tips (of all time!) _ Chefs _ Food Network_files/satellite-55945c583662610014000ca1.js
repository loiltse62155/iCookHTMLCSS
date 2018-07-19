_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
  var ct = 0;
  function override() {
    if ( typeof s === "object" && typeof s.Media === "object" ) {
	    s.Media.trackMilestones="50,90";
			s.Media.adTrackMilestones="";
    } else if ( ct < 20 ) {
    	setTimeout(override,250);
      ct++;
    }
  }
	 override()
})();
});
