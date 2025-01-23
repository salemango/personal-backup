// Generates the new webpage based on inputs
document.getElementById('meal-form').addEventListener("submit", function(e) {    
    
    e.preventDefault(); // For testing variable purposes. Remember to remove the parameter e when you're done with this

    // Variable declarations
        // Monday
        let mondayBreakfast = document.getElementById('monday-breakfast').value;
        let mondaySnack1 = document.getElementById('monday-snack-1').value;
        let mondayLunch = document.getElementById('monday-lunch').value;
        let mondaySnack2 = document.getElementById('monday-snack-2').value;
        let mondayDinner = document.getElementById('monday-dinner').value;
        // console.log(mondayBreakfast, mondaySnack1, mondayLunch, mondaySnack2, mondayDinner); // For testing

        // Tuesday 
        let tuesdayBreakfast = document.getElementById('tuesday-breakfast').value;
        let tuesdaySnack1 = document.getElementById('tuesday-snack-1').value;
        let tuesdayLunch = document.getElementById('tuesday-lunch').value;
        let tuesdaySnack2 = document.getElementById('tuesday-snack-2').value;
        let tuesdayDinner = document.getElementById('tuesday-dinner').value;
        // console.log(tuesdayBreakfast, tuesdaySnack1, tuesdayLunch, tuesdaySnack2, tuesdayDinner); // For testing

        // Wednesday 
        let wednesdayBreakfast = document.getElementById('wednesday-breakfast').value;
        let wednesdaySnack1 = document.getElementById('wednesday-snack-1').value;
        let wednesdayLunch = document.getElementById('wednesday-lunch').value;
        let wednesdaySnack2 = document.getElementById('wednesday-snack-2').value;
        let wednesdayDinner = document.getElementById('wednesday-dinner').value;
        // console.log(wednesdayBreakfast, wednesdaySnack1, wednesdayLunch, wednesdaySnack2, wednesdayDinner); // For testing

        // Thursday
        let thursdayBreakfast = document.getElementById('thursday-breakfast').value;
        let thursdaySnack1 = document.getElementById('thursday-snack-1').value;
        let thursdayLunch = document.getElementById('thursday-lunch').value;
        let thursdaySnack2 = document.getElementById('thursday-snack-2').value;
        let thursdayDinner = document.getElementById('thursday-dinner').value;
        // console.log(thursdayBreakfast, thursdaySnack1, thursdayLunch, thursdaySnack2, thursdayDinner); // For testing
        
        // Friday
        let fridayBreakfast = document.getElementById('friday-breakfast').value;
        let fridaySnack1 = document.getElementById('friday-snack-1').value;
        let fridayLunch = document.getElementById('friday-lunch').value;
        let fridaySnack2 = document.getElementById('friday-snack-2').value;
        let fridayDinner = document.getElementById('friday-dinner').value;
        // console.log(fridayBreakfast, fridaySnack1, fridayLunch, fridaySnack2, fridayDinner); // For testing

        // Saturday
        let saturdayBreakfast = document.getElementById('saturday-breakfast').value;
        let saturdaySnack1 = document.getElementById('saturday-snack-1').value;
        let saturdayLunch = document.getElementById('saturday-lunch').value;
        let saturdaySnack2 = document.getElementById('saturday-snack-2').value;
        let saturdayDinner = document.getElementById('saturday-dinner').value;
        // console.log(saturdayBreakfast, saturdaySnack1, saturdayLunch, saturdaySnack2, saturdayDinner); // For testing

        // Sunday
        let sundayBreakfast = document.getElementById('sunday-breakfast').value;
        let sundaySnack1 = document.getElementById('sunday-snack-1').value;
        let sundayLunch = document.getElementById('sunday-lunch').value;
        let sundaySnack2 = document.getElementById('sunday-snack-2').value;
        let sundayDinner = document.getElementById('sunday-dinner').value;
        // console.log(sundayBreakfast, sundaySnack1, sundayLunch, sundaySnack2, sundayDinner); // For testing

    // Create a new window for the planner
        myText = ("<html> <head> <title>My Meal Planner</title> </head> <body>"); // Document start
        
        // Monday
            myText += ("<section> <h1>Monday</h1> \n <ul> \n") // Starts the section
                myText += ("<li>Monday breakfast: " + mondayBreakfast + "</li> \n");
                myText += ("<li>Monday first snack: " + mondaySnack1 + "</li> \n");
                myText += ("<li>Monday lunch: " + mondayLunch + "</li> \n");
                myText += ("<li>Monday second snack: " + mondaySnack2 + "</li> \n");
                myText += ("<li>Monday dinner: " + mondayDinner + "</li> \n");
            myText += ("</ul> </section>"); // Finishes the section
        // End

        // Tuesday
            myText += ("<section> <h1>Tuesday</h1> \n <ul> \n") // Starts the section
                myText += ("<li>Tuesday breakfast: " + tuesdayBreakfast + "</li> \n");
                myText += ("<li>Tuesday first snack: " + tuesdaySnack1 + "</li> \n");
                myText += ("<li>Tuesday lunch: " + tuesdayLunch + "</li> \n");
                myText += ("<li>Tuesday second snack: " + tuesdaySnack2 + "</li> \n");
                myText += ("<li>Tuesday dinner: " + tuesdayDinner + "</li> \n");
            myText += ("</ul> </section>"); // Finishes the section
        // End

        // Wednesday
            myText += ("<section> <h1>Wednesday</h1> \n <ul> \n") // Starts the section
                myText += ("<li>Wednesday breakfast: " + wednesdayBreakfast + "</li> \n");
                myText += ("<li>Wednesday first snack: " + wednesdaySnack1 + "</li> \n");
                myText += ("<li>Wednesday lunch: " + wednesdayLunch + "</li> \n");
                myText += ("<li>Wednesday second snack: " + wednesdaySnack2 + "</li> \n");
                myText += ("<li>Wednesday dinner: " + wednesdayDinner + "</li> \n");
            myText += ("</ul> </section>"); // Finishes the section
        // End

        // Thursday
            myText += ("<section> <h1>Thursday</h1> \n <ul> \n") // Starts the section
                myText += ("<li>Thursday breakfast: " + thursdayBreakfast + "</li> \n");
                myText += ("<li>Thursday first snack: " + thursdaySnack1 + "</li> \n");
                myText += ("<li>Thursday lunch: " + thursdayLunch + "</li> \n");
                myText += ("<li>Thursday second snack: " + thursdaySnack2 + "</li> \n");
                myText += ("<li>Thursday dinner: " + thursdayDinner + "</li> \n");
            myText += ("</ul> </section>"); // Finishes the section
        // End

        // Friday
            myText += ("<section> <h1>Friday</h1> \n <ul> \n") // Starts the section
                myText += ("<li>Friday breakfast: " + fridayBreakfast + "</li> \n");
                myText += ("<li>Friday first snack: " + fridaySnack1 + "</li> \n");
                myText += ("<li>Friday lunch: " + fridayLunch + "</li> \n");
                myText += ("<li>Friday second snack: " + fridaySnack2 + "</li> \n");
                myText += ("<li>Friday dinner: " + fridayDinner + "</li> \n");
            myText += ("</ul> </section>"); // Finishes the section
        // End

        // Saturday
            myText += ("<section> <h1>Saturday</h1> \n <ul> \n") // Starts the section
                myText += ("<li>Saturday breakfast: " + saturdayBreakfast + "</li> \n");
                myText += ("<li>Saturday first snack: " + saturdaySnack1 + "</li> \n");
                myText += ("<li>Saturday lunch: " + saturdayLunch + "</li> \n");
                myText += ("<li>Saturday second snack: " + saturdaySnack2 + "</li> \n");
                myText += ("<li>Saturday dinner: " + saturdayDinner + "</li> \n");
            myText += ("</ul> </section>"); // Finishes the section
        // End

        // Sunday
            myText += ("<section> <h1>Sunday</h1> \n <ul> \n") // Starts the section
                myText += ("<li>Sunday breakfast: " + sundayBreakfast + "</li> \n");
                myText += ("<li>Sunday first snack: " + sundaySnack1 + "</li> \n");
                myText += ("<li>Sunday lunch: " + sundayLunch + "</li> \n");
                myText += ("<li>Sunday second snack: " + sundaySnack2 + "</li> \n");
                myText += ("<li>Sunday dinner: " + sundayDinner + "</li> \n");
            myText += ("</ul> </section>"); // Finishes the section
        // End


    // Download and print buttons. Print functionality is built in with onclick
    myText += ("<button type='button' onclick='window.print()'>Print meal planner</button");

    flyWindow = window.open('about:blank', 'myPlanner', 'width=600, height=800, left=200, top=200'); // Opens the window

    // Give new window URL(?)
    flyWindow.URL = 'myPlanner.html'

    
    // Makes the popup window responsive
        if (window.screen.width < 750) {
            flyWindow.resizeTo(300, 500);
        } 
        else if (window.screen.width > 750 && window.screen.width < 1000) {
            flyWindow.resizeTo(500, 700);
        }
    // End
    
    flyWindow.document.write(myText); // Writes the text in
})

// Clears form when clicked. Current status: Working as intended
document.getElementById('clear-form').addEventListener("click", function() {
    document.getElementById('meal-form').reset();
})
