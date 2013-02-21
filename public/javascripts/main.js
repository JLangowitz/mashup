$(document).ready(function(){
	$('#upload').submit(function () {
		var user = $('#user').text();
		var URL = $('#URL').val();
		var description = $('#description').val() || 'No Description';
		if (URL){		
			$.post("/upload", { "user": user, "URL": URL, "description": description },
				function(err){
					console.log(err);
					console.log('hi');
		            if (err){
		            	console.log('error',err);
		            }
		            else{
		            	console.log('hi');
						$('#URL').val('');
						$('#description').val('');
					}
		        });
		}
		return false;
	});
	setInterval()
});

function vidFeed(){
  $.get('/update', function(data){
    $('#vids').html(data);
  });
}