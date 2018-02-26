$(document).ready(function(){
  $("#submit").click(function(){
    $('#photos').empty();
    var tag=$('#tag').val();
    $.getJSON('https://api.flickr.com/services/rest/?format=json&sort=relevance&method=flickr.photos.search&per_page=30&text='+tag+'&api_key=7a3e3541095e4084a72e09ea2f342865&nojsoncallback=1', function (data) {
      if(jQuery.isEmptyObject(data.photos.photo)){
        $('#photos').append('No result found, try another research </br>');
      }
      else{
        $.each(data.photos.photo, function(i,item){
        var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'
        $('#photos').append('<div class="col-lg-3 col-md-4 col-xs-6"> <a href="#" class="d-block mb-4 h-100"> <img class="img-fluid img-thumbnail" style="height:250px;width:250px;"src="'+photoURL+'" alt="" ></a> </div>');
        });
      }
    });
  });
});
