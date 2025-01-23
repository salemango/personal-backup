$('#generate-names').on('click', function() { // Generates names when you click on the generate names button

    // Selection results
    let startingLetter = $('#starting-letter').val();
    let nameLengths = $('#name-length').val();
    let nameAmount = $('#name-amount').val();

    // Make an array to hold each generated name
    let nameArray = [];
    nameArray.length = nameAmount;
    // console.log(nameArray.length); // Testing purposes

    // Index for the random letter - initialization
    let letterIndex = 0;

    // Other 
    let names = 0; // Counter variable for name amount

    // Clears the displayed name UL if it has items in it from prior generation
    $("#gen-names-grid").empty();

    for (names = 0; names < nameArray.length; names++) { // Fill out the array
        nameArray[names] = generateNames(startingLetter, nameLengths) 
        $("#gen-names-grid").append(`<li class="child">${nameArray[names]}</li>`);
    }

    // console.log(nameArray); // Testing purposes  
})

// Saves a name when you click or tap on it. Currently - Working as intended
$('#gen-names-grid').on('click', '.child', function() {
    let nameToSave = $(this).text();
    $('#saved-names-grid').append(`<li class="child">${nameToSave}</li>`);
    console.log(nameToSave);
})

// Deletes a name from the saved names grid when you click or tap on it. Currently - WIP
$('#saved-names-grid').on('click', '.child', function() {
    $(this).remove();
})

$('#save-all').on('click', function() { // Sends all the generated names to the saved names grid when clicked. Currently - Working as intended

    // Counter variable
    let names = 0;

    let namesToSave = $('#gen-names-grid').children().map(function(){ // Retrieve the text content of each generated name element and puts it in a jQuery object
        return $(this).text(); // Returns text content
    }) 

    namesToSave = namesToSave.toArray(); // Converts the result (a jQuery object) into a text array that can be put into a different output

    // console.log(namesToSave); // Testing purposes
    for (names = 0; names < namesToSave.length; names++) {
        $('#saved-names-grid').append(`<li class="child">${namesToSave[names]}</li>`);
    }
}
)

$('#clear-all').on('click', function() { // Clears all the saved names when clicked. Currently - Working as intended
    $('#saved-names-grid').empty();
}) 

// Random number generator. Currently - Working as intended
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNames(startingLetter, nameLengths) { // This function generates the names. Call it whenever you need to generate a name. Currently - Working as intended. 
    /* Bugs to fix - None */

    // letter variables
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    let vowels = ["a", "e", "i", "o", "u"];

    // final name container variables
    let finalName = "";
    let nextLetter = "";

    // letters counter variable
    let letters; // Counter variable for letter amount
    let nextLetterType = startingLetter;

    // Generates the name
    for (letters = 0; letters < nameLengths; letters++) { // Generates correct amount of letters
            if (nextLetterType == 1) { // Adds a random vowel
                nextLetter = vowels[randomNum(0,4)]; // Chooses a random vowel
                finalName = finalName + nextLetter; // Adds that vowel to the name
                nextLetterType = 2; // Changes the type of the next letter
            }
            else if (nextLetterType == 2) { // Adds a random consonant
                nextLetter = consonants[randomNum(0,20)]; // Chooses a random consonant
                finalName = finalName + nextLetter; // Adds that consonant to the name
                nextLetterType = 1; // Changes the type of the next letter
            }
    }

    console.log(finalName); // Testing purposes

    return finalName;
}
