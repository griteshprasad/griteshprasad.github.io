var clicked = 0;
	function alertIt(){
    	clicked++;
        if(clicked == 1){
        	alert("Please Earphones laga lijiye pink circle ko click krne se pehle...");
        }
        if(clicked == 2){
        	alert("Arre badtameez..chaliye earphones lagaiye jaldi...ab firse click kijiye");
        }
        if(clicked == 3){
        	alert("Laga liya na earphone ???...ok, now click again");
        }
        if(clicked == 4){
        	alert("Pakka na ???...chaliye kr lijiye pink button firse click");
        }
        if(clicked == 5){
        	alert("Thik hai ab click kijiye uss pink circle pe...ye final..hehehe");
        }
        if(clicked > 5){
        	window.location.replace("../vid/vid.html");
        }
    }