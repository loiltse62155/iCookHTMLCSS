_satellite.pushAsyncScript(function(event, target, $variables){
  //Start of DoubleClick Floodlight Tag: Please do not remove
//URL of the webpage where the tag is expected to be placed: http://www.foodnetwork.com/
//Revised: 08/20/2014
(function(){
var urlstr = document.location.protocol + "//3642305.fls.doubleclick.net/activityi;src=3642305;type=count332;",
u1 = mdManager.getParameterString("SctnDspName"),
u2 = mdManager.getParameterString("Sponsorship"),
u3 = mdManager.getParameterString("Type"),
IFRM = document.createElement('iframe'),
send = false;
if (location.host=="www.foodnetwork.com"){
	//homepage
	if (location.pathname==="/"){
		urlstr += "cat=homep613;";
    send = true;
	} else if (location.pathname==="/chefs.html" || location.pathname.indexOf("/chefs/") > -1 || location.pathname.indexOf("/hosts/") > -1) {
		//chef pages
		u2 = mdManager.getParameterString("talentName");
		urlstr += "cat=fn_mu625;";
    send = true;
	} else if (location.pathname==="/shows.html" || location.pathname.indexOf("/shows/") > -1) {
		//show pages
		urlstr += "cat=multi147;";
    send = true;
  } else if (location.pathname==="/recipes.html" || location.pathname.indexOf("/recipes/") > -1 || location.pathname.indexOf("/holidays-and-parties/") > -1 || location.pathname.indexOf("/healthy/") > -1){
		//recipe pages
		u3 = mdManager.getParameterString("Title");
		urlstr += "cat=fn_mu928;";
    send = true;
	} else if (location.pathname==="/restaurants.html" || location.pathname.indexOf("/restaurants/") > -1){
		u3 = mdManager.getParameterString("Title");
		urlstr += "cat=multi442;";
    send = true;
	}  else if (location.pathname==="/videos.html" || location.pathname.indexOf("/videos/") > -1){
		u3 = mdManager.getParameterString("Title");
		urlstr += "cat=multi836;";
    send = true;
	}
} else if (location.host==="blog.foodnetwork.com"){
	u3 = mdManager.getParameterString("Title");
	urlstr += "cat=multi836;";
  send = true;
}
if ( send ) {
	urlstr += "u1=" + u1 + ";";
	urlstr += "u2=" + u2 + ";";
	urlstr += "u3=" + u3 + ";";
	urlstr += "ord=" +  Math.random() * 10000000000000 + "?";
	IFRM.src = urlstr;
	IFRM.width = 1; 
	IFRM.height = 1
	IFRM.setAttribute("frameborder",0); 
	IFRM.setAttribute("style","display:none");
	document.body.insertBefore(IFRM,document.body.firstChild);
}
})();
//End of DoubleClick Floodlight Tag: Please do not remove
});
