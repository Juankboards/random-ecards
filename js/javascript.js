CARD = ["http://goo.gl/gL7ASL",
"http://goo.gl/uzwcIz",
"http://goo.gl/tX4Lff",
"http://goo.gl/kwV4Nu",
"http://goo.gl/Hh3ew5",
"http://goo.gl/VBNKRj",
"http://goo.gl/ZoUQFg",
"http://goo.gl/1VBQFD",
"http://goo.gl/XdtpsU",
"http://goo.gl/71wUwP",
"http://goo.gl/ZvjB0e",
"http://goo.gl/EteZiN",
"http://goo.gl/GltS7O",
"http://goo.gl/EGkksB",
"http://goo.gl/BMWNiF",
"http://goo.gl/lgEKiU",
"http://goo.gl/Ss0Od3",
"http://goo.gl/wnNmo5",
"http://goo.gl/hFrMwP",
"http://goo.gl/5O5uxp",
"http://goo.gl/RqpDOP",
"http://goo.gl/dEHFcd",
"http://goo.gl/f529a5",
"http://goo.gl/wvZiMU",
"http://goo.gl/06Moqd",
];

var randomNumber = Math.floor(Math.random()*25);
var src = CARD[randomNumber];

$(document).ready(function(){	
	$('#ecard').attr("src",src)
    $('#ecard').on({
        'click': function(){
            randomNumber = Math.floor(Math.random()*25);
	        src = CARD[randomNumber];
            $('#ecard').attr('src',src);
        }
    });
    $("#twitter-share-button").on({
    	'click': function(){ 
    		var str = encodeURIComponent(src + " This card of @someecards made me LMFO. I found it  through http://goo.gl/BR8a70 made by @juankboards");
    		var href = "https://twitter.com/intent/tweet?text=" + str;		
			window.open(href,'',' scrollbars=yes,menubar=no,width=500, resizable=yes,toolbar=no,location=no,status=no'); 
			return false
        }
    })

    $("#facebook-share-button").on({
    	'click': function(){     		
    		var href = "https://www.facebook.com/sharer/sharer.php?u=" + src;            
            window.open(href,'',' scrollbars=yes,menubar=no,width=500, resizable=yes,toolbar=no,location=no,status=no'); 
            return false
        }
    })

    $("#pinterest-share-button").on({
    	'click': function(){ 
    		var str = encodeURIComponent(src);		
    		var href = "https://es.pinterest.com/pin/create/button/?url=http%3A%2F%2Fgoo.gl%2FBR8a70&media=" + src + "&description= funny%20ecards%20from%20someecard%20official%20page";   		           
            window.open(href,'',' scrollbars=yes,menubar=no,width=500, resizable=yes,toolbar=no,location=no,status=no'); 
            return false
        }
    })
});