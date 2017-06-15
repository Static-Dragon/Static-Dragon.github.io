$(document).ready(function() { 
	var currentDate = new Date(); 
	$(".year").text(currentDate.getFullYear());
	dob = new Date("1998/12/29");
	$(".age").text(Math.floor((currentDate-dob) / (365.25 * 24 * 60 * 60 * 1000)));
	$('#repo1').repo({ user: 'Static-Dragon', name: 'brata' });
	$('#repo2').repo({ user: 'Static-Dragon', name: 'HDC-2017' });
});
