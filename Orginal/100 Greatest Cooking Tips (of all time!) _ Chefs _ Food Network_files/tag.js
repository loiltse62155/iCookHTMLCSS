(function(){var r,p,g,f=i(),o=0,c=document,j=c.getElementById("_bapw-link"),h=(c.location.protocol=="https:"),u=(h?"https":"http")+"://",b="c.betrad.com/pub/",k="info.evidon.com",q=window._bap_p_overrides,w=0,v=0,m=560,n=720,l=h||(q&&q.hasOwnProperty(r)&&q[r].new_window)||f,t=false;function i(){return(/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i).test(navigator.userAgent)||(/Android/).test(navigator.userAgent)||(/iPhone/).test(navigator.userAgent)||(/iPad/).test(navigator.userAgent)}function s(x){var d=new Image(0,0);d.style.display="none";d.src=u+"l.betrad.com/pub/p.gif?pid="+r+"&ocid="+p+"&i"+x+"=1&mb="+(f?"2":"0")+"&r="+Math.random()}function e(){if(typeof(window.innerWidth)=="number"&&typeof(window.innerHeight)=="number"){w=window.innerWidth;v=window.innerHeight}else{if(document.documentElement&&document.documentElement.clientWidth&&document.documentElement.clientHeight){w=document.documentElement.clientWidth;v=document.documentElement.clientHeight}else{if(document.body&&document.body.clientWidth&&document.body.clientHeight){w=document.body.clientWidth;v=document.body.clientHeight}}}return(v<=m)||(w<=n)}function a(B,d){var x=c.getElementsByTagName("head")[0]||c.documentElement,y,A=c.createElement("script");function z(){A.onload=A.onreadystatechange=null;x.removeChild(A);d()}A.async=true;A.src=B;if(d){A.onreadystatechange=function(){if(!y&&(this.readyState=="loaded"||this.readyState=="complete")){y=true;z()}};A.onload=z}x.insertBefore(A,x.firstChild)}if(c.getElementById("_bapw-icon")!==null){c.getElementById("_bapw-icon").src=u+b+"icon1.png"}j.onmouseover=function(){if(!t){t=true;a(u+b+"third.js");a(u+k+"/first_party/"+r)}j.href=g?"":"http://"+k+"/pub_info/"+r+"?v=1&nt="+o+"&nw="+((l||e())?"true":"false")+(g?"&preview=true":"")};j.onclick=function(){if(!g&&(l||e())||(window._bap_fp&&!EVIDON.OPTOUT.DATA.thirdPartyCookiesEnabled)){s("c");j.href=j.href.replace("false","true");return true}this.onclick="return "+false;a(u+"ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js",function(){a(u+b+"pub2.js",function(){BAPW.i(j,{pid:r,ocid:p},g,1)})});return false};(function(){var d,x=c.getElementsByTagName("script");for(d=0;d<x.length;d++){r=+x[d].getAttribute("data-ev-tag-pid");p=+x[d].getAttribute("data-ev-tag-ocid");g=+x[d].getAttribute("data-ev-tag-preview");if(r&&p){return}}throw"Evidon Notice: pid/ocid not found."}());if(!g){s("i")}}());