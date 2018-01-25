$(function() {
	var dt = new Date().getHours();
	if (dt >= 0 && dt <= 11){
		document.getElementById('day').innerHTML="Morning";
	}else if (dt >= 12 && dt <= 17){
		 document.getElementById('day').innerHTML="Afternoon";
	}else {
		 document.getElementById('day').innerHTML="Evening";
	}
});
