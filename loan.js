$(document).ready(function () {
    var myRules =
        {
            salary: {
                required: true,
                digits: true,

            },

            credit: {
                required: true,
                min: 300,
                max: 850,
                digits: true
            },

            months: {
                required: true,
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            salary: {
                required: "Must enter your salary",
                digits: "Numbers only please!",
            },

            credit: {
                required: "Must enter your credit score",
                min: "Credit score must be between 300 and 850",
                max: "Credit score must be between 300 and 850",
                digits: "Numbers only please!"
            }
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
            $("#outputLoan").text("Loan denied");
        } else {
            $("#outputLoan").text("Loan denied");
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