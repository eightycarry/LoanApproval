$(document).ready(function () {
    var myRules =
        {
            salary: {
                required: true,
                min: 0,
                max: 1000000,
                digits: true

            },

            credit: {
                required: true,
                min: 300,
                max: 850,
                digits: true
            },

            months: {
                required: true,
                min: 0,
                max: 1000000,
                digits: true
            },
        };

    // Object containing the error messages
    var myMessages =
        {
            salary: {
                required: "Must enter your salary",
                digits: "Numbers only please!",
                min: "Your salary cannot be negative!",
                max: "You probably shouldn't even be using this website"
            },

            credit: {
                required: "Must enter your credit score",
                min: "Credit score must be between 300 and 850",
                max: "Credit score must be between 300 and 850",
                digits: "Numbers only please!"
            },

            months: {
                required: "Must enter the amount of months you've been working at your current job",
                min: "Cannot enter a negative amount!",
                max: "You've been there a long time!",
                digits: "Numbers only please!"
            },
        }

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: loanApproval,
            rules: myRules,
            messages: myMessages
        }
    );

    $("#loanButton").click(loanApproval);

    function loanApproval() {
        var salary = parseInt($("#salary").val());
        var creditScore = parseInt($("#credit").val());
        var months = parseInt($("#months").val());

        if ((salary >= 40000) && (creditScore >= 600)) {
            $("#outputLoan").text("Loan approved!");
        } else if ((salary >= 40000) && (creditScore < 600) && (months > 12)) {
            $("#outputLoan").text("Loan approved!");
        } else if ((salary < 40000) && (creditScore >= 600) && (months > 12)) {
            $("#outputLoan").text("Loan approved!");
        } else if (months < 12) {
            $("#outputLoan").text("Loan not approved.");
        } else {
            $("#outputLoan").text("Loan not approved.");
        }

        /*if (salary >= 40000 && creditScore >= 600) {
            $("#outputLoan").text("Loan approved");
        } else if (salary >= 40000 && creditScore < 600 && months > 12) {
            $("#outputLoan").text("Loan approved");
        } else if (salary >= 40000 && creditScore < 600 && months < 12) {
            $("#outputLoan").text("Loan denied");
        }*/
    }

});