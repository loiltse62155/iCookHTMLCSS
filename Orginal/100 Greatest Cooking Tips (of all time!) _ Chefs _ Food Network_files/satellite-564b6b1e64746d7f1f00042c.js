_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
	var deriveTrackIngValues = function(context) {
      var $cntxtObj =  $(context),
      tgt = $cntxtObj.attr('href') || "",
      title = "n/a", found = [];
      if ($cntxtObj.attr('title')) {
           title = $cntxtObj.attr('title');
      } else {
           found = $cntxtObj.find('.title');
           if (found.length > 0 && found.html()) {
               title = found.html().replace(/<\/?[^>]+>/g, "");
           } else {
               found = $cntxtObj.find('img[alt]');
               if ( found.length > 0 && found.attr("alt") ) {
                   	title = found.attr("alt"); 
               } else {                   
                   	title = $cntxtObj.html();
                 		title = title ? title.replace(/<\/?[^>]+>/g, "") : "n/a";
               }
           }
       }
       if (tgt && tgt.indexOf("http:") === -1 && tgt.indexOf("mailto:") === -1) {
           tgt = document.location.protocol + '//' + document.location.host + '/' + tgt;
       } else if (!tgt && $(this).attr('title')) {
       	   tgt =  $cntxtObj.attr('title') + ( $cntxtObj.data('recipe-id') ? "-" +  $cntxtObj.data('recipe-id') : "");
       }
       return { ModuleName: "Content Stream",
                LinkTitle: title,
                LocUrl: document.location.href,
                LinkPosition:  $cntxtObj.parents('.content-stream').index(context),
                TargetUrl: tgt }
    }
     $('.content-stream a').click(function (data) {
            SNI.Analytics.moduleTrackLS(this, deriveTrackIngValues(this));
        });
})();   
});
