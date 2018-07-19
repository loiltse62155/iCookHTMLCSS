_satellite.pushAsyncScript(function(event, target, $variables){
  //***Sizmek***
var pageQS = location.search, pagePath = location.pathname, cmpType;

if (pagePath.indexOf("/shows/all-star-academy.html") !=-1 || pagePath.indexOf("/shows/chopped-junior.html") !=-1 || pagePath.indexOf("/shows/spring-baking-championship.html") !=-1 || pagePath.indexOf("/shows/cake-wars.html") !=-1 || pagePath.indexOf("/shows/burgers-brew-and-que.html") !=-1 || pagePath.indexOf("/shows/cutthroat-kitchen/camp-cutthroat.html") !=-1 || pagePath.indexOf("/shows/worst-cooks-in-america.html") !=-1 || pagePath.indexOf("/shows/halloween-baking-championship.html") !=-1 || pagePath.indexOf("/shows/clash-of-the-grandmas.html") !=-1 || pagePath.indexOf("/shows/holiday-baking-championship.html") !=-1) 
{

if ((pageQS.indexOf("nl=") != -1) || (pageQS.indexOf("xp=") != -1) || (pageQS.indexOf("oc=") != -1) || (pageQS.indexOf("vty=") != -1) || (pageQS.indexOf("soc=") != -1) || (pageQS.indexOf("syc=") != -1) || (pageQS.indexOf("vpid=") != -1)) {
	cmpType="other";
	document.cookie="cmpType=other; path=/";
}
else {
	if (document.cookie.indexOf("cmpType=") != -1) {
		cmpType = _satellite.readCookie("cmpType");
		//console.log("cmpType read from cookie - " + cmpType);
	}
	else {
		cmpType="direct-paid";
		document.cookie="cmpType=direct-paid; path=/";
	}
}
		
if (cmpType === "direct-paid") {
	var ebRand = Math.random()+'';
	ebRand = ebRand * 1000000;
	var sizmekID1, sizmekID2;		
	if (pagePath.indexOf("/shows/all-star-academy.html") !=-1) {sizmekID1 = "796305"; sizmekID2 = "796306";}
	else if (pagePath.indexOf("/shows/chopped-junior.html") !=-1) {sizmekID1 = "796311"; sizmekID2 = "796313";}
	else if (pagePath.indexOf("/shows/spring-baking-championship.html") !=-1) {sizmekID1 = "796316"; sizmekID2 = "796317";}
	else if (pagePath.indexOf("/shows/cake-wars.html") !=-1) {sizmekID1 = "796320"; sizmekID2 = "796321";}
	else if (pagePath.indexOf("/shows/burgers-brew-and-que.html") !=-1) {sizmekID1 = "796324"; sizmekID2 = "796325";}
	else if (pagePath.indexOf("/shows/cutthroat-kitchen/camp-cutthroat.html") !=-1) {sizmekID1 = "796328"; sizmekID2 = "796329";}
	else if (pagePath.indexOf("/shows/worst-cooks-in-america.html") !=-1) {sizmekID1 = "796332"; sizmekID2 = "796333";}
	else if (pagePath.indexOf("/shows/halloween-baking-championship.html") !=-1) {sizmekID1 = "796336"; sizmekID2 = "796337";}
	else if (pagePath.indexOf("/shows/clash-of-the-grandmas.html") !=-1) {sizmekID1 = "796340"; sizmekID2 = "796341";}
	else if (pagePath.indexOf("/shows/holiday-baking-championship.html") !=-1) {sizmekID1 = "796344"; sizmekID2 = "796345";}
	else {sizmekID1 = "n/a"; sizmekID2 = "n/a";}
	if (sizmekID1 !== "n/a") {
		$.getScript("http://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=" + sizmekID1 + "&rnd=" + ebRand);
		$.getScript("http://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=" + sizmekID2 + "&rnd=" + ebRand);
	}
}
}
//************
});
