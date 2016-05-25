var keywords;
var moduleCode;

function readTextFile(file)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        keywords = allText.split("\n");
        keywords.pop();
        generateRandom();
      }
    }
  }
  rawFile.send(null);
}



function generateRandom(){
  var item = keywords[Math.floor(Math.random()*keywords.length)];
  $('#randomWord').text(item);
}



$('.randombutton').click(function(){
  generateRandom();
})


var selector = 0;
var nameList = ["Interaction Design", "Digital Media", "Web Programming", "Product Development"];
changeColour(nameList[selector]);



$('#moduleNext').click(function(){
  if(selector == nameList.length-1){
    selector = 0;
  }
  else{
    selector++;
  }
  $('.name').text(nameList[selector]);
  changeColour(nameList[selector]);
})



$('#modulePrevious').click(function(){
  if(selector == 0){
    selector = nameList.length-1;
  }
  else{
    selector--;
  }
  $('.name').text(nameList[selector]);
  changeColour(nameList[selector]);
})


function changeColour(mod_name){
  switch(mod_name) {
    case "Interaction Design":
    moduleCode = "ID";
    break;
    case "Digital Media":
    moduleCode = "DMSN";
    break;
    case "Web Programming":
    moduleCode = "WP";
    break;
    case "Product Development":
    moduleCode = "PD";
    break;
  }
  $("#name").removeClass();
  $("#name").addClass("name "+ moduleCode );
  var randnum = Math.floor((Math.random() * 1000000) + 1);
  readTextFile("keywordSources/"+ moduleCode + ".txt?version="+ randnum);
}
