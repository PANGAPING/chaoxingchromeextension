function doyoudo(){
	var iframe = document.getElementById("iframe");
	var wtiframe = iframe.contentWindow.document.body.getElementsByTagName("iframe")[0];
	var oridata = wtiframe.getAttribute("data");
	var nowdata = oridata.replace(/true/ig,"false");
	wtiframe.setAttribute("data",nowdata);
	wtiframe.setAttribute("fastforward","false");
	wtiframe.setAttribute("switchwindow","false");
}
setTimeout(doyoudo,1000);