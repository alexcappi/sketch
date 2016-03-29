$(document).ready(function(){

	var size = prompt("Enter the number of rows you want in your grid");

	wrapper = $('.wrapper');

	for (i = 0; i<size; i++){
		for (j = 0; j<size; j++){
			var div = document.createElement('div');
			$(div).addClass('cell');
			wrapper.append(div);
		}
		wrapper.append('<br>');
	}
});