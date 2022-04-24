$(document).ready(() => {

  const fullname = $('#fullname');
  const fullnameMsg = $('.fullnameMsg');

  const email = $('#register-email');
  const emailMsg = $('.emailMsg');

  const password = $('#password');
  const passwordRe = $('#passwordRepeat');
  const passwordMsg = $('.passwordMsg');
  const repeatPasswordMsg = $('.repeatPasswordMsg');
  




  // Form validation 
  $('#register_form').submit((e) => {

    e.preventDefault();

    if ($('input').hasClass('is-invalid')) {
      return false;
    } else {

      const fullnameChecked = fullname.val();
      const emailChecked = email.val();
      const passwordChecked = password.val();
      const passwordReChecked = passwordRe.val();
      const submit = $('#register').val();
      const app_name = $('#app_name').val();
      const package = $('#package').val();

      $.ajax({
        type: 'post',
        url: './includes/validation.inc.php',
        data: {
          'fullname': fullnameChecked,
          'email': emailChecked,
          'password': passwordChecked,
          'password1': passwordReChecked,
          'register': submit,
          'app': app_name,
          'package' : package
        },
        success: function (response) {
          Cookies.remove('timer');
        
          if(response){
            window.location.href = 'https://admin.lab387.com/confirmation'
          //  window.location.href = 'https://admin.lab387.com/authenticate?app='+app_name+"&package="+package; //promijenio za 2FA
            console.log(response);
          }
        }
      });
    }
  });
  // End of Form validation



  // Fullname validation
  fullname.focusout(() => {

    // Check if input is empty
    if (fullname.val() == '') {
      fullnameMsg.text('');
      fullname.removeClass('is-valid');
      fullname.removeClass('is-invalid');
    }
    // Check if given input contains two strings and a-z
    else{
      // Validate name
      checkName = fullname.val();
      $.ajax({
        type: 'post',
        url: './includes/validation.inc.php',
        data: {
          'checkName': checkName
        },
        success: function (response) {
          if (response) {
            result = JSON.parse(response);

            if (result.valid == 1) {
              fullname.removeClass('is-invalid');
              fullname.addClass('is-valid');
              fullnameMsg.text('');
            } else {
              fullname.removeClass('is-valid');
              fullname.addClass('is-invalid');
              fullnameMsg.text(result.msg);


            }
          }
        }
      });
    }
  });
  // End of Fullname validation

  // Email validation
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
              emailMsg.text('');
            } else if (item.valid == 0){
              email.removeClass('is-valid');
              email.addClass('is-invalid');
              emailMsg.text(item.msg);
            }
          });
         
      }
    });
  }
})
  // End of email validation
 
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



// Phone number validation

const numberSubmit = $('#numberSubmit');
const number = $('#number');
const numberMsg = $('.phoneNumMsg');

numberSubmit.click(function(e){
  e.preventDefault();
});

number.focusout(() => {

  // Check if input is empty
  if (number.val() == '') {
    numberMsg.text('');
    number.removeClass('is-valid');
    number.removeClass('is-invalid');
  } else {
    // Check if email is available
    checkNumber = number.val();
    $.ajax({
      type: 'post',
      url: './includes/validation.inc.php',
      data: {
        'checkNumber': checkNumber
      },
      success: function (response) {
       
        var sanitized = '[' + response.replace('}{', '},{') + ']';
        var res = JSON.parse(sanitized);

        $.each(res, function (i, item) {
          if (item.valid == 1) {
            number.removeClass('is-invalid');
            number.addClass('is-valid');
            numberMsg.text('');
            numberSubmit.off('click');
          } else if (item.valid == 0){
            number.removeClass('is-valid');
            number.addClass('is-invalid');
            numberMsg.text(item.msg);
            numberSubmit.on('click',function(e){
              e.preventDefault();
            });
                  
          }

        });
    }
  });
}
})
// End of phone number validation
