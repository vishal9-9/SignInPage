$(document).ready(function() {
    $("#sign_in").validate({
            rules: {
                input_pass: {
                        required: true,
                        minlength: 8
                    },
                input_email: {
                        required: true,
                        email: true
                    }

                },
            messages: {
                input_pass: {
                        required: "This Field is required",
                        minlength: "Minimum Length Should Be 8"
                    },
                input_email: {
                        email: "The email should be in the format: abc@domain.tld",
                        required: ""
                    }
                }
        });
});

