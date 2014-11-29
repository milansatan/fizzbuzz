$(document).ready(function(){
	console.log('hello');
	
	$('#number').keyup(function(enter){
		if(enter.keyCode == 13){
			numList();
		}
	});

	$('#btn').click(function(){
		numList();
	});

	function numList(){
		var num = +$('#number').val();
		var aNums = [];
		var string = "";
		for(var i = 1; i <= num; i++){
			if(i % 3 == 0 || i % 5 == 0){
				if(i % 3 ==0 && i % 5 != 0){
					$('#listnum').append('<p id="order">fizz' + '</p><br>');
				}else if(i % 5 == 0 && i % 3 != 0){
					$('#listnum').append('<p id="order">buzz' + '</p><br>');
				}else{
					$('#listnum').append('<p id="order">fizz buzz' + '</p><br>');
				}
				
			}else{
				$('#listnum').append('<p id="order">'+ i + '</p><br>');
			}
		}

		
	}
	
});

		