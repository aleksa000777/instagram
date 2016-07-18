$(document).ready(function(){
  init();
})
function init(){
  main();
  getinsta();
}

var allData;
function main(){
  var jqxhr = $.ajax( "/api" )
    .done(function(e) {
      allData = e.obj.data
      // console.log(e);
      getTags();
      getit();
    })
}

function getit(){
  $('button').on('click', function(e){
    $( "#list-img" ).empty();
    e.preventDefault();
     tag = this.id;
    getTagImages(tag)
  })
}

function getTagImages(tag){
  for(var i=0;i<allData.length;i++){
    var current = allData[i];
    for(var y = 0; y<current.tags.length;y++){
      if(current.tags[y]===tag){
        var imgUrl = current.images.standard_resolution.url;
        $('#list-img').append( $('<li><img src='+imgUrl+'/></li>') )
      }
    }
  }
}

function getTags(){
  var allTags = [];
  for(var i=0;i<allData.length;i++){
    var current = allData[i];
    for(var y = 0; y<current.tags.length;y++){
      if(allTags.indexOf(current.tags[y]) > -1){
      }
      else{
        allTags.push(current.tags[y])
      }
    }
  }
  createButton(allTags)
}

function createButton(allTags){
  for(var i=0;i<allTags.length;i++){
    var singleTag = allTags[i];
    $('.list-buttons').append( $('<button id='+allTags[i]+'>'+allTags[i]+'</button>') )
  }

}




function getinsta(){
  var jqxhr = $.ajax( "/apiinsta" )
    .done(function(e) {
      var allData = e.mydata;
      // JSON.stringify(allData);
      // console.log(allData);
    })
}
