var topics = ["Thor", "Superman", "Loki", "Iron Man", "Black Panther", "Black Widow"];
console.log(topics);

function displaySuperheroInfo(){

}

function createSuperheroButtons(){
    $(".buttonsGoHere").empty();

    for(var i=0; i < topics.length; i++){
        var sButton = $("<button>");
        sButton.addClass("superhero");
        sButton.attr("data-superhero", topics[i]);
        sButton.text(topics[i]);
        $(".buttonsGoHere").append(sButton);
    }
}

$("#submitGitInput").on("click", function(event){
    event.preventDefault();

    var hero = $("#hero-input").val().trim();

    topics.push(hero);
    console.log(topics);
    createSuperheroButtons();
})

createSuperheroButtons();