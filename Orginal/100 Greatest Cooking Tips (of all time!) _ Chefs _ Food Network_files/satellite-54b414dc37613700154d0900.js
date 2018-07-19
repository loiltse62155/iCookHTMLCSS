/*
* Custom tracking for Gigya Registration
*/
SNI.Analytics = SNI.Analytics || {};
SNI.Analytics.trackGigyaRegistration = function(network) {
  // if network is true, this represents a new-to-network user
	if (typeof CQ_Analytics === "object" && CQ_Analytics.Sitecatalyst) {
		CQ_Analytics.Sitecatalyst.events=[];
		s.events="";
	} else {
		s.events="";
	}
		s.linkTrackVars = "events";
		s.linkTrackEvents = "event22";
		if(typeof s === "object"){
		s.events="event22";
		if ( network ) {
			s.linkTrackEvents = "event22,event23";
			s.events=s.apl(s.events,"event23",",",2);
		}
		s.linkTrackEvents=s.events;
		s.tl(this, 'o', 'logEvent Gigya registration');
	}
	if (typeof CQ_Analytics === "object" && CQ_Analytics.Sitecatalyst) {
		CQ_Analytics.Sitecatalyst.events=[];
		s.events="";
	} else {
		s.events="";
	}
	s.linkTrackVars = "";
	s.linkTrackEvents = "";
};

SNI.Analytics.fireGigyaAbandonment = function(event) {
	// if network is true, this represents a new-to-network user
	if ( SNI.Analytics.blockAbandonment ) {
		return;
	}
	if (typeof CQ_Analytics === "object" && CQ_Analytics.Sitecatalyst) {
		CQ_Analytics.Sitecatalyst.events=[];
		s.events="";
	} else {
		s.events="";
	}
	if(typeof s === "object"){
		s.linkTrackVars = "eVar50,events";
		s.linkTrackEvents = "event85";
		s.eVar50 = SNI.Analytics.formGigyaLast;
		s.events="event85";
		s.linkTrackEvents=s.events;
		s.tl(event, 'o', 'logEvent Gigya abandonment');
	}
	if (typeof CQ_Analytics === "object" && CQ_Analytics.Sitecatalyst) {
		CQ_Analytics.Sitecatalyst.events=[];
		s.events="";
	} else {
		s.events="";
	}
	s.linkTrackVars = "";
	s.linkTrackEvents = "";
};

SNI.Analytics.trackGigyaScreenSet = function(event) {
	var modulename = event.currentScreen;
	if ( modulename === "gigya-register-email-screen" ) {
		SNI.Analytics.trackGigyaAbandonment('.gigya-screen-dialog');
	}
	$('.gigya-screen-dialog div[onclick*=providerClick]').click( function() {
		var $obj = $(this);
		SNI.Analytics.moduleTrackLS(this,{
				ModuleName: modulename,
				LinkTitle: $obj.attr('title'),
				LinkPosition: $('.gigya-screen-dialog div[onclick*=providerClick], a').index($obj),
				TargetUrl: $obj.attr('title') + " Auth Screen"
			});
	});
	$('.gigya-screen-dialog a').click( function() {
		var $obj = $(this);
		if ( $obj.hasClass('gigya-screen-dialog-close') && modulename === "gigya-register-email-screen" ) {
			SNI.Analytics.fireGigyaAbandonment();
		}
		SNI.Analytics.moduleTrackLS(this,{
				ModuleName: modulename,
				LinkTitle: $obj.hasClass('gigya-screen-dialog-close') ? "close" : $obj.html(),
				LinkPosition: $('.gigya-screen-dialog div[onclick*=providerClick], a').index($obj),
				TargetUrl: $obj.attr("data-switch-screen")
			});
	});
}


SNI.Analytics.trackGigyaAbandonment = function(selector) {
	var $form = $(selector);
	if ( $form.length > 0 ) {
		$form.find('input').change(function () {
			SNI.Analytics.formGigyaLast = "last_elememt:"+ $(this).attr('name');
		});
		$form.find('select').change(function () {
			SNI.Analytics.formGigyaLast = "last_elememt:"+ $(this).attr('name');
		});
		$form.submit(function () {
			SNI.Analytics.blockAbandonment = true;
		});
		$(window).bind('beforeunload',function(event){
			SNI.Analytics.fireGigyaAbandonment(event);
		});
    }
};

/*
 * Partner Plugin: Gigya v3 (BEGIN)
 */
var gigya_omniture_conf = { 
    linkName: 'Gigya Action', 
  eventMap : [ 
    {
      gigEvent:"login",
      omtrEvents:["event37"],
      mapVars:["eVar71=user.loginProvider", "eVar36=getAge()", "eVar36=getGender()", "eVar72=getiRank()", "eVar10=updateSNIUserObj()", "prop75='Logged In'"] 
    }, 
    {
      gigEvent:"sendDone",
      omtrEvents:["event91"],
      mapVars:["eVar70=providers","products"] 
    }, 
    {
      gigEvent:"commentSubmitted",
      omtrEvents:["event59"], 
      mapVars:["eVar70=getCommentProviders()","products"] 
    },
    {
      gigEvent:"reactionClicked--DISABLED",
      omtrEvents:[""], 
      mapVars:["=reaction.ID","products"]
    }
  ],
  updateSNIUserObj : function(evt) {
		s._waitingForSNI = true;
 		SNI.Analytics.setReadyKey("gigya",false);
    $(document).on("userLogin",function(){SNI.Analytics.setReadyKey("gigya",true);});
		setTimeout(function(){ s._waitingForSNI = false; }, 2000);
    return evt.user.UID;
  },
	getCommentProviders:function(evt) {			
		var g=evt.providerPostIDs;
		if(g&&typeof(g)=="object"){  
			var b = "",f;
			for (f in g) b += (b ? "," : "") + f;
			return b;
		}
		return '';
	},
	getAge:function(evt) {		
		var a=evt.user.age;
		if(typeof(a)=="number"&&a>0){  
			return a;
		}
		return '?';
	},
	getGender:function(evt) {			
		var g=evt.user.gender;
		if(typeof(g)=="string"&&g.length>0){  
			return g;
		}
		return '?';
	},
	getiRank:function(evt) {		
		if(typeof(evt.user.iRank)=="string"){
            var r = parseFloat(evt.user.iRank).toFixed(0);
            if(r >= 0.0001) return r;
		}
		return '?';
	}
};
/*
 * Partner Plugin: Gigya v3 (END)
 */
