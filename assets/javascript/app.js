var topics = [
  "Thor",
  "Superman",
  "Loki",
  "Iron Man",
  "Black Panther",
  "Black Widow"
];
//console.log(topics);

function displaySuperheroInfo() {
  var superhero = $(this).attr("data-superhero");
  //console.log(superhero);
  var apiKey = "6XBUDGQR4FAaHOOfq7JGQbvis3K0SU5x";
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    superhero +
    "&api_key=" +
    apiKey +
    "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    //console.log(response);
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      var rating = results[i].rating;
      console.log(rating);
      var ratingInfo = $("<p>").text("Rating: " + rating);
      var superGif = $("<img>");
      superGif.attr("src", results[i].images.fixed_height_still.url);

      gifDiv.append(ratingInfo);
      gifDiv.append(superGif);
     
      $("#gifsGoHere").prepend(gifDiv);
    }
  });
}

function createSuperheroButtons() {
  $("#buttonsGoHere").empty();

  for (var i = 0; i < topics.length; i++) {
    var sButton = $("<button>");
    sButton.addClass("superhero");
    sButton.attr("data-superhero", topics[i]);
    sButton.text(topics[i]);
    $("#buttonsGoHere").append(sButton);
  }
}

$("#submitGitInput").on("click", function(event) {
  event.preventDefault();

  var hero = $("#hero-input")
    .val()
    .trim();

  topics.push(hero);
  //console.log(topics);
  createSuperheroButtons();
});

$(document).on("click", ".superhero", displaySuperheroInfo);

createSuperheroButtons();
