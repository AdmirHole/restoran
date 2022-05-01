$(document).ready(function () {

    const editforma = $('#edit-form');
    const email = $('#email');
    const emailMsg = $('.emailMsg');
    const forgotten_submit = $('#forgotten_submit');
  
    const password = $('#newPassword');
    const passwordRe = $('#repeatPassword');
    const passwordMsg = $('.newPasswordMsg');
    const repeatPasswordMsg = $('.repeatPasswordMsg');
  
    // Check if input is empty
    email.focusout(() => {

        // Check if input is empty
        if (email.val() == '') {
          emailMsg.text('');
          email.removeClass('is-valid');
          email.removeClass('is-invalid');
        } else {
          // Check if email is available
          checkEmail = email.val();
          $.ajax({
            type: 'post',
            url: './includes/validation.inc.php',
            data: {
              'checkEmail': checkEmail
            },
            success: function (response) {
            
              var sanitized = '[' + response.replace('}{', '},{') + ']';
              var res = JSON.parse(sanitized);
      
              $.each(res, function (i, item) {
                if (res[0].valid == 1 && res[1].valid == 1) {
                  email.removeClass('is-invalid');
                  email.addClass('is-valid'); 
                
                } else if (item.valid == 0){
                  email.removeClass('is-valid');
                  email.addClass('is-invalid');
                  
                }
              })
            
          }
        });
      }
      });
   // Form validation 
  
   // Password validation
    password.focusout(() => {
  
    pass = password.val();
    passRe = passwordRe.val();
    // Validate pass
    
    $.ajax({
      type: 'post',
      url: './includes/validation.inc.php',
      data: {
        'pass': pass
      },
      success: function (response) {
        if (response) {
          result = JSON.parse(response);
  
          if (result.valid == 1) {
            password.removeClass('is-invalid');
            password.addClass('is-valid');
            passwordMsg.text('');
          } else {
            password.removeClass('is-valid');
            password.addClass('is-invalid');
            passwordMsg.text(result.msg);
          }
        }
      }
    });
    
  });
  
  passwordRe.focusout(() => {
    pass = password.val();
    passRe = passwordRe.val();
    if (pass == passRe) {
      passwordRe.removeClass('is-invalid');
      passwordRe.addClass('is-valid');
      repeatPasswordMsg.text('');
    } else {
      passwordRe.removeClass('is-valid');
      passwordRe.addClass('is-invalid');
      repeatPasswordMsg.text('');
    }
  });

  //RESET PASSWORD TIMER START

    //const email = $('#email-profile-val');
    const emaill = Cookies.get("email");
    const pwMsg = $('#reset-pw-msg-profile');
    const forgotten_submit_profile = $('#forgotten_submit_profile');
    
    forgotten_submit_profile.attr('disabled', true);
    pwMsg.css("visibility", "hidden");

    function check_status_pass() {
        //checkEmail = email.val();
        $.ajax({
            type: 'post',
            url: './includes/validation.inc.php',
            data: {
                'email_time': emaill
            },
            success: function (response) {
                //console.log(response);
                if(response == "0"){
                    pwMsg.css("visibility", "visible");
                    pwMsg.css('color', 'red');
                    forgotten_submit_profile.attr('disabled', true);
                    return true
                }else if(response == "1"){
                pwMsg.css("visibility", "hidden");
                forgotten_submit_profile.attr('disabled', false);
            }
        }
        });
        setTimeout(function () {
            check_status_pass();
        }, 2000);
    }
    check_status_pass();

  //RESET PASSWORD TIMER END
});