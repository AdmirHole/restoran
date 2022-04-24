$(document).ready(() => {

  const loginForm = $('#login-form');
  const email = $('#loginEmail');
  const emailMsg = $('.emailMsg');
  const password = $('#loginPassword');
  const passwordMsg = $('.passwordMsg');
  const login = $('#login');

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
// End of email validation

  password.focusout(() => {
    password.removeClass('is-valid');
    password.removeClass('is-invalid');
    passwordMsg.text('');
  });

  // Form validation 
  loginForm.submit((e) => {
    e.preventDefault();

    if ($('input').hasClass('is-invalid')) {
      return false;
    } else {
      let checkbox = '0';
      if ($('#rememberMe').prop('checked')) {
        checkbox = '1';
      }
      const emailChecked = email.val();
      const passwordChecked = password.val();
      const submit = login.val();
      const app_name = $('#app_name').val();

      let fetched_id;
      $.ajax({
        type: 'post',
        url: './includes/login.inc.php',
        data: {
          'email': emailChecked,
          'check_mail' : ''
        },
        success: function (response) {
          //console.log(response);

          fetched_id = response;
      }
    })

      $.ajax({
        type: 'post',
        url: './includes/login.inc.php',
        data: {
          'email': emailChecked,
          'password': passwordChecked,
          'remember': checkbox,
          'login': submit,
          'app': app_name
        },
        success: function (response) {
          Cookies.remove('timer');
          console.log(response);
          
          // 0 & 1-check if 2FA is active before login; 1-active; 0-not active
          // 2-login is done via app
          // 'err' - there is a problem with the entered phone number
          // AppName - login/register via app but there is no free package for that app
          // blocked - user is blocked
          // pending - user needs to verify his number
          // pendingAppName - user needs to verify his number (login/register via app)
          // incorrectpassAppName - wrong password entered when logging in via apps
          if (response == "0") {
            window.location.href = 'https://admin.lab387.com/applications';
        }else if(response == "1") {
          window.location.href = 'https://admin.lab387.com/verifynumber-login';
        }else if(response == "2"){
          window.location.href = 'https://admin.lab387.com/includes/send-data-'+app_name+'.php?id='+fetched_id;
        }else if(response == "err"){
          window.location.href = 'https://admin.lab387.com/error?error=20';
        }else if(response == "LogoLab" || response == "TranslateLab" || response == "NodeLab"){
          window.location.href = 'https://admin.lab387.com/subscriptions?app='+response;
        }else if(response == "blocked"){
          window.location.href = 'https://admin.lab387.com/error?error=25';
        }else if(response == "pending"){

          window.location.href = 'https://admin.lab387.com/confirmation-login';
          //window.location.href = 'https://admin.lab387.com/verifynumber'; za koristenje SMS 2FA

        }else if(response == "pendingLogoLab" || response == "pendingcalculy" || response == "pendingShorty" || response == "pendingQuizy" || response == "pendingTranslateLab"){
          
          let res = response.replace(/pending/gi, "");

          window.location.href = 'https://admin.lab387.com/confirmation-login?app='+res;
          //window.location.href = "https://admin.lab387.com/verifynumber?app="+res; za koristenje SMS 2FA

        }else if(response == "incorrectpassLogoLab" || response == "incorrectpasscalculy" || response == "incorrectpassShorty" || response == "incorrectpassQuizy"){
          let res = response.replace(/incorrectpass/gi, "");
          window.location.href = "https://admin.lab387.com/login?error=1&app="+res;
        }else{
          window.location.href = 'https://admin.lab387.com/login?error=1';
        } 
      }
    })
  }
});
})