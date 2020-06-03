$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    const inputFullName = $("input#fullName").val();
    const inputAnimal = $("input:radio[name=animal]:checked").val();

    $(".fullName").text(inputFullName);
    $(".animal").text(inputAnimal);

    $("#receipt").show();
  });

  //const inputfavMusic = $("input#favMusic").val();
});