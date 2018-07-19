_satellite.pushAsyncScript(function(event, target, $variables){
  SniAds.Event.subscribe("walmart_switched", function() {
  SNI.Analytics.fireEvent("event993");
  setTimeout(function(){
	  $("#buywmt input[type=submit]").click(function(){
  	  SNI.Analytics.moduleTrackLS(this,{
    	        ModuleName: "Recipe Ingredient List",
      	      LinkTitle: "Buy At Walmart", 
        	    LinkPosition: "1"
  		});
	  });
   },5000);
 });

SniAds.Event.subscribe("walmart_submit", function(){
  	  SNI.Analytics.moduleTrackLS(this,{
    	        ModuleName: "Recipe Ingredient List",
      	      LinkTitle: "Buy At Walmart", 
        	    LinkPosition: "2"
  		});
 });

$((function(){
  var attached = false;
  $(".ingredients").click(
      function(){
        if (!attached) {
          attached = true;
          $(".box-add-recipe-button").click(
              function(){
                SNI.Analytics.moduleTrackLS(this,{
          			ModuleName: "Recipe Ingredient List",
          			LinkTitle: "Add To Grocery List",
          			LinkPosition: "2"
                    });
              });
        }  
     });
})());

});
