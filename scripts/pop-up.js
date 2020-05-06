//JK Popup Window Script (version 3.0)- By JavaScript Kit (http://www.javascriptkit.com)
//Visit JavaScriptKit.com for free JavaScripts
//This notice must stay intact for legal use
//Win Type: Pop Up | Always

//Specify URLs to randomly select from and popup/popunder:
//To display a single URL, just remove all but the first entry below:
var popurls = new Array()
popurls[0] = "http://www.thinkbigelectric.com/coupon.html"

function openpopup(popurl) {
    var winpops = window.open(popurl, "", "width=550,height=300,toolbar,location,status,scrollbars,menubar,resizable")
}

openpopup(popurls[Math.floor(Math.random() * (popurls.length))])