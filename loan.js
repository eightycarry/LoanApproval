$(document).ready(function () {
    var myRules =
        {
            salary: {
                required: true,
                digits: true
            },

            credit: {
                required: true,
                min: 300,
                max: 850,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            salary: {
                required: "Must enter your height",
                min: "Height must be between 59 and 79 inches",
                max: "Height must be between 59 and 79 inches",
                digits: "Numbers only please!"
            },

            credit: {
                required: "Must enter your weight",
                min: "Weight must be between 88lbs and 353 lbs",
                max: "Weight must be between 88lbs and 353 lbs",
                digits: "Numbers only please!"
            }
        }

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: calculateBMI,
            rules: myRules,
            messages: myMessages
        }
    );



});