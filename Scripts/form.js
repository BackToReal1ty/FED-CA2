"use strict";
window.addEventListener(
    "load",
    function () {
        //indicates that all elements with the class name needs-validation will be validated
        var forms = document.getElementsByClassName("needs-validation");

        //indicates that all elements with the class name validate-me will be validated
        var validateElement = document.getElementsByClassName("validate-me");

        //function to validate the above selected classes
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
                "submit",
                function (event) {
                    if (form.checkValidity() == false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    for (let i = 0; i < validateElement.length; i++) {
                        validateElement[i].classList.add("was-validated");
                    }
                },
                false
            );
        });
    },
    false
);
