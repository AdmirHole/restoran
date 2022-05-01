$(document).ready(() => {

    /* document.getElementById("FileAttachment").onchange = function () {
        document.getElementById("fileuploadurl").value = this.value;
    }; */

    // provjera pw za otkljucavanje formi
    const profilePwForm = $('#profileCheckPw');
    const profilePwCheck = $('#profileConfirmPw');
    const profilePwCheckLabel = $('#labelPw');

    // forme
    const profileUpdateForm1 = $('#profileUpdate1');
    const profileUpdateForm2 = $('#profileUpdate2');
    const profileUpdatePwForm = $('#profileUpdatePw');

    // name i mail
    const profileName = $('#profileName');
    const profileMail = $('#profileMail');

    //password
    const profilePassword = $('#profilePassword');
    const repeatProfilePassword = $('#repeatProfilePassword');

    // user data
    const profilePhone = $('#profilePhone');
    const profileCountry = $('#profileCountry');
    const profileZip = $('#profileZip');
    const profileCity = $('#profileCity');
    const profileAdress = $('#profileAdress');

    // submit
    const profileUpdate1 = $('#profileSubmit1');
    const profileUpdate2 = $('#profileSubmit2');
    const profileUpdatePw = $('#profileSubmitPw');

    // messages
    const pwMsg = $('.profilePasswordMsg');
    const rePwMsg = $('.profileRepeatPasswordMsg');
    const nameMsg = $('.profileNameMsg');
    const mailMsg = $('.profileMailMsg');

    // response
    const form1response = $('#form1response');
    const form2response = $('#form2response');
    const formPwResponse = $('#formPwResponse');

    // regex
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function getParam(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp(name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    const id = getParam('id');

    profilePwForm.submit((e) => {
        e.preventDefault;
    });

    profilePwForm.submit((e) => {
        e.preventDefault;
        return false;
    });

    profilePwCheck.focusout(() => {
        const profilePwVal = profilePwCheck.val();

        if (profilePwVal.length < 8) {
            return false;
        } else {

            $.ajax({
                type: 'post',
                url: './includes/update.php',
                data: {
                    'profileId': id,
                    'password': profilePwVal
                },
                success: function (response) {
                    if (response == '*Valid Password') {
                        profilePwCheck.removeClass('is-invalid');
                        profilePwCheck.addClass('is-valid');
                        profilePwCheckLabel.text('Now feel free to update your info');

                        $('#profileUpdate1 *').removeAttr("disabled");
                        $('#profileUpdate2 *').removeAttr("disabled");
                        $('#profileUpdatePw *').removeAttr("disabled");
                        profilePwCheck.attr("disabled", "disabled");
                    } else if (response == '*Invalid Password') {
                        profilePwCheck.removeClass('is-valid');
                        profilePwCheck.addClass('is-invalid');
                        profilePwCheckLabel.text(response);
                    } else {
                        profilePwCheck.removeClass('is-valid');
                        profilePwCheck.addClass('is-invalid');
                    }
                }
            });
        }



        profileUpdateForm1.submit((e) => {

            e.preventDefault();

            if ($('#profileUpdateForm1 input').hasClass('is-invalid')) {
                return false;
            } else {
                /* form1response */
                const fullnameChecked = profileName.val();
                const emailChecked = profileMail.val();

                const submit = profileUpdate1.val();

                $.ajax({
                    type: 'post',
                    url: './includes/update.php',
                    data: {
                        'fullname': fullnameChecked,
                        'email': emailChecked,
                        'update1': submit
                    },
                    success: function (response) {
                        if (response == 'Updated!') {
                            form1response.text(response);
                        } else {
                            form1response.text(response);
                        }
                    }
                });
            }
        });

        profileUpdateForm2.submit((e) => {

            e.preventDefault();

            if ($('#profileUpdateForm2 input').hasClass('is-invalid')) {
                return false;
            } else {
                /* form2response */

                const phoneChecked = profilePhone.val();
                const countryChecked = profileCountry.val();
                const zipChecked = profileZip.val();
                const cityChecked = profileCity.val();
                const adressChecked = profileAdress.val();
                const submit2 = profileUpdate2.val();

                $.ajax({
                    type: 'post',
                    url: './includes/update.php',
                    data: {
                        'phone': phoneChecked,
                        'zip': zipChecked,
                        'country': countryChecked,
                        'city': cityChecked,
                        'adress': adressChecked,
                        'update2': submit2
                    },
                    success: function (response) {
                        if (response == 'Updated!') {
                            form2response.text(response);
                        } else {
                            form2response.text(response);
                        }
                    }
                });
            }
        });



        profileUpdatePwForm.submit((e) => {

            e.preventDefault();

            if ($('#profileUpdatePw input').hasClass('is-invalid')) {
                return false;

            } else if (repeatProfilePassword.val() == '' || repeatProfilePassword.val().length < 8) {
                return false;
            } else if (profilePassword.val().length < 8) {
                return false;
            } else {
                const passwordChecked = profilePassword.val();
                const passwordReChecked = repeatProfilePassword.val();
                const pwSubmitChecked = profileUpdatePw.val();

                $.ajax({
                    type: 'post',
                    url: './includes/update.php',
                    data: {
                        'password': passwordChecked,
                        'passwordRepeat': passwordReChecked,
                        'pwSubmit': pwSubmitChecked
                    },
                    success: function (response) {
                        if (response == 'Updated!') {
                            formPwResponse.text(response);
                        } else {
                            formPwResponse.text(response);
                        }
                    }
                });
            };
        });

    });

    //Pw Provjere
    profilePassword.focusout(() => {

        // Check if password is inputted 
        if (profilePassword.val() !== '') {

            // && if longer than 8 characters
            if (profilePassword.val().length < 8) {
                profilePassword.addClass('is-invalid');
                profilePassword.removeClass('is-valid');
                pwMsg.text('Min 8 characters required!');
            }
            // Check if password matches desired format
            // Uppercase, lowercase and a number
            else if (!regPassword.test(profilePassword.val())) {
                profilePassword.addClass('is-invalid');
                profilePassword.removeClass('is-valid');
                pwMsg.text('Provide a required format!');
            } else {
                profilePassword.removeClass('is-invalid');
                profilePassword.addClass('is-valid');
                pwMsg.text('');
            }
        } else {
            profilePassword.removeClass('is-invalid');
            profilePassword.removeClass('is-valid');
            pwMsg.text('');
        }
    });

    // Provjera za ponovljeni pw
    repeatProfilePassword.focusout(() => {

        // Check if passwords are set && are longer than 8 characters
        if (profilePassword.val().length > 7 && repeatProfilePassword.val().length > 7) {

            // Check if passwords match
            if (profilePassword.val() == repeatProfilePassword.val()) {
                repeatProfilePassword.removeClass('is-invalid');
                repeatProfilePassword.addClass('is-valid');
                rePwMsg.text('');

            } else {
                repeatProfilePassword.addClass('is-invalid');
                repeatProfilePassword.removeClass('is-valid');
                rePwMsg.text('Passwords do not match!');
            }
        } else {
            repeatProfilePassword.removeClass('is-invalid');
            repeatProfilePassword.removeClass('is-valid');
            rePwMsg.text('');
        }
    });

    profileName.focusout(() => {
        // Check if input is empty
        if (profileName.val() == '' && profileName.val().length < 5) {
            nameMsg.text('*Invalid Fullname');
            profileName.removeClass('is-valid');
            profileName.addClass('is-invalid');
        }
        // Check if given input contains two strings and a-z
        else if (profileName.val().length >= 5) {
            // Validate name
            checkName = profileName.val();
            $.ajax({
                type: 'post',
                url: './includes/validation.inc.php',
                data: {
                    'checkName': checkName
                },
                success: function (response) {

                    if (response == 'Good') {

                        profileName.removeClass('is-invalid');
                        profileName.addClass('is-valid');
                        nameMsg.text('');
                    } else {

                        profileName.removeClass('is-valid');
                        profileName.addClass('is-invalid');
                        nameMsg.text(response);
                    }
                }
            });
        }
    });

    profileMail.focusout(() => {

        // Check if input is empty
        if (profileMail.val() == '') {
            mailMsg.text('');
            profileMail.addClass('is-invalid');
        }
        // Check if email is correct
        else if (!regEmail.test(profileMail.val())) {
            profileMail.removeClass('is-valid');
            profileMail.addClass('is-invalid');
            mailMsg.text('Please enter a correct email!');

        } else {
            // Check if email is available
            checkEmail = profileMail.val();
            $.ajax({
                type: 'post',
                url: './includes/validation.inc.php',
                data: {
                    'checkEmail': checkEmail
                },
                success: function (response) {

                    if (response == 'E-mail alredy registred!') {
                        profileMail.removeClass('is-invalid');
                        profileMail.addClass('is-valid');
                        mailMsg.text('');
                    } else if (response == '*Valid email given') {
                        profileMail.removeClass('is-invalid');
                        profileMail.addClass('is-valid');
                        mailMsg.text('');
                    } else {
                        profileMail.removeClass('is-valid');
                        profileMail.addClass('is-invalid');
                        mailMsg.text(response);
                    }

                }
            })
        }
    });
});