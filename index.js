var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://joke3.p.rapidapi.com/v1/joke?nsfw=true",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "joke3.p.rapidapi.com",
		"x-rapidapi-key": "fcc216a1e7mshed1f9b0de178682p1a76b7jsn394d25e91ee7"
	},
}

$.ajax(settings).done(function (response) {
  $("#joke").html(response.content);
});

$(".newJoke").click(function(){
  $.ajax(settings).done(function (response) {
    $("#joke").html(response.content);
  console.log(response.content);
});
});
