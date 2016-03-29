
// If the user says they are hungry suggest a cuisine type based on whether they
// want something spicy, not spicy or have no preference.

module.exports = function(robot) {
  robot.respond(/i'm hungry/i, function(msg) {
    // Define a list of cuisine types that are not spicy, moderate or spicy
    // Return a suggested cuisine style based on the style of food the user
    // wants.

    // Call the function to get the cuisine preference and return the suggestion
    // to the user. msg is the object passed in and message is the property
    // containing what the user entered.

    msg.reply("How about " + getCuisine(msg.message));
  });
}

function getCuisine(message) {
  // Define the list of cuisine types and styles and randomly select an
  // element

    var cuisines = [
      {
        cuisine: "American",
        cuisine_type: "Bland"
      },
      {
        cuisine: "Chinese",
        cuisine_type: "Moderate"
      },
      {
        cuisine: "Indian",
        cuisine_type: "Spicy"
      },
      {
        cuisine: "Italian",
        cuisine_type: "Bland"
      },
      {
        cuisine: "Thai",
        cuisine_type: "Spicy"
      }
    ];
    // Is the user looking for something spicy, bland or no preference?
    var spicy = /spicy/i;
    var notSpicy = /not spicy/i;

    // First test for a "not spicy" preference and return a list of non-spicy
    // cuisine options
    if (notSpicy.test(message)) {
      var cuisineChoices = cuisines.filter(function(cuisine) {
        return cuisine.cuisine_type !== "Spicy";
      })
      }
    // Now test for a "spicy" preference and return a list of spicy cuisine
    // options
    else if (spicy.test(message)) {
      var cuisineChoices = cuisines.filter(function(cuisine) {
        return cuisine.cuisine_type == "Spicy";
      })
    }
    // Otherwise return all cuisine options
    else {
      var cuisineChoices = cuisines;
    };

    // Create a list of the numerical key values for the available cuisines
    // to enable one to be randomly selected
    var tempList = Object.keys(cuisineChoices);

    // Create a random index value based on the key values
    var randomSuggestion = tempList[Math.floor(Math.random() * tempList.length)];

    return cuisineChoices[randomSuggestion].cuisine;
};
