$(document).ready(function(){
  init();
})
function init(){
  main();
  console.log('...loaded');
}

var allData;
function main(){
  var jqxhr = $.ajax( "/api" )
    .done(function(e) {
      allData = e.obj.data
      getit();
    })
}



function getit(){
  $('button').on('click', function(e){
    $( "#list-img" ).empty();
    e.preventDefault();
    let tag = this.id;
    getTagImages(tag)
  })

}

function getTagImages(tag){
  for(let i=0;i<allData.length;i++){
    let current = allData[i];
    for(let i = 0; i<current.tags.length;i++){
      if(current.tags[i]===tag){
        var imgUrl = current.images.standard_resolution.url;
        $('#list-img').append( $('<li><img src='+imgUrl+'/></li>') )
      }
    }
  }
}
