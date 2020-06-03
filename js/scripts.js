$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    const inputFullName = $("input#fullName").val();
    const inputAnimal = $("input:radio[name=animal]:checked").val();
    const inputFavMusic = $("#favMusic").val();
    const inputColor = $("#color").val();

    $(".fullName").text(inputFullName);
    $(".animal").text(inputAnimal);
    $(".favMusic").text(inputFavMusic);
    $(".color").text(inputColor);
    $("#receipt").show();
  });

});