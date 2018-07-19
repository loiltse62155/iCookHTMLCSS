_satellite.pushBlockingScript(function(event, target, $variables){
  window.SNI = window.SNI || {};
SNI.Analytics = SNI.Analytics || {};
SNI.Analytics.readiness = {};
SNI.Analytics.sValues = {};
SNI.Analytics.maxWaitTime = 3500; //milliseconds
SNI.Analytics.readyToTrack = function() {
	var r = this.readiness, rkey = Object.keys(r), i = rkey.length;
    if ( i > 0 ) {
        while(i--){
           if ( !r[rkey[i]] ) {
                return false;
            }
        } 
    }
  return true;
};
SNI.Analytics.setReadyKey = function(key,value) {
	var r = this.readiness;
  _satellite.notify('setReadyKey:'+key+","+value, 1);
	r[key] = value;
	// start the countdown
	setTimeout(function() {
		SNI.Analytics.readiness = {};
	}, this.maxWaitTime);
};

( function () {
	if ( document.location.hostname.indexOf('cookingchanneltv.com') === -1 ) {
		// Don't wait for gigya on CCTV
		SNI.Analytics.setReadyKey("gigya",false);
	}
	SNI.Analytics.setReadyKey("dfp",false);
	if ( typeof CQ === "object" ){
		SNI.Analytics.setReadyKey("integrations",false);
	}
	// FoodNetwork Gigya set flag
	$(document).on('communityInit', function() {
		SNI.Analytics.setReadyKey("gigya",true);
	});
	$(document).on('sIntegrateReady', function() {
		SNI.Analytics.setReadyKey("integrations",true);
	});

	// Food.com Gigya set flag
	var subscribeSession = function() {
		if ( typeof FD === "object" ) {
			if ( FD.Session.complete ) {
				SNI.Analytics.setReadyKey("gigya",true);
			} else {
				FD.subscribe('FD.Session.complete', function() {
				SNI.Analytics.setReadyKey("gigya",true);
				});	
			}
		} else if (!SNI.Analytics.readyToTrack()){
			setTimeout(subscribeSession, 200);
		}
	},
	// DFP set flag
	subscribeSlots = function() {
		var dfpSlots;
		if ( typeof SniAds === "object" ) {
			SniAds.Event.subscribe("slotRenderComplete", function(object) {
			if ( object.lineItemId || object.creativeId ) {
				dfpSlots = SNI.Analytics.sValues.list1;
				dfpSlots = dfpSlots ? dfpSlots + "," + object.lineItemId+"|"+object.creativeId : object.lineItemId+"|"+object.creativeId;
				setTimeout(function() { SNI.Analytics.setReadyKey("dfp",true); },500);
				SNI.Analytics.sValues.list1 = dfpSlots;
			}
			});
		} else if (!SNI.Analytics.readyToTrack()) {
			setTimeout(subscribeSlots, 200);
		}
	};
	subscribeSlots();
	if ( document.location.hostname.indexOf('food.com') !== -1 ) {
		// This is only on Food.com
		subscribeSession();
	}
})(); 

});
