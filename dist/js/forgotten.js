$(document).ready(() => {

  const forgottenform = $('#forgotten-form');
  const email = $('#forgotten-pw');
  const emailMsg = $('.emailMsg');
  const forgotten_submit = $('#forgotten_submit');

  const password = $('#password');
  const passwordRe = $('#passwordRepeat');
  const passwordMsg = $('.passwordMsg');
  const repeatPasswordMsg = $('.repeatPasswordMsg');

  const pwMsg = $('#reset-pw-msg');
  pwMsg.css("visibility", "hidden");
  forgotten_submit.attr('disabled', true);

  $(document).on("keyup", email , function () {
    checkEmail = email.val();
    $.ajax({
      type: 'post',
      url: './includes/validation.inc.php',
      data: {
        'email_time': checkEmail
      },
      success: function (response) {
        if(response == "0"){
          pwMsg.css("visibility", "visible");
          pwMsg.css('color', 'red');
          forgotten_submit.attr('disabled', true);
          return true
        }else if(response == "1"){
          pwMsg.css("visibility", "hidden");
          forgotten_submit.attr('disabled', false);
        }
      }
    });
  });

  
  // $(document).on("click", forgotten_submit, function () {
  //   checkEmail = email.val();
  //   $.ajax({
  //     type: 'post',
  //     url: './includes/validation.inc.php',
  //     data: {
  //       'update_time': checkEmail
  //     },
  //     success: function (response) {
  //     }
  //   });
  // });

  email.focusout(() => {

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
              email.removeClass('is-valid');
              email.addClass('is-invalid');
              emailMsg.text('');
            } else if (item.valid == 0){
              email.removeClass('is-invalid');
              email.addClass('is-valid');
              emailMsg.text('');
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
});