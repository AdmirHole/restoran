$(document).ready(() => {

  const form = $('#recover_form');
  const password = $('#password');
  const passwordMsg = $('.passwordMsg');
  const passwordRe = $('#passwordRep');
  const passwordReMsg = $('.passwordReMsg');

  const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

  const recover_submit = $('#recover');

  function getParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const id = getParam('id');


  password.focusout(() => {

    // Check if password is inputted 
    if (password.val() !== '') {
      passwordMsg.text('');

      // && if longer than 8 characters
      if (password.val().length < 8) {
        password.addClass('is-invalid');
        password.removeClass('is-valid');
        if (Cookies.get("lang") == "Bosnian" ) {
          passwordMsg.text('Molimo Vas unesite minimalno 8 karaktera!');
        
        }  
        else if (Cookies.get("lang") == "English" ){
          passwordMsg.text('Min 8 characters required!');
        } 
        else if (Cookies.get("lang") == "Deutch" ){
          passwordMsg.text('Mindestens 8 Zeichen erforderlich');
        }
        
      }
      // Check if password matches desired format
      // Uppercase, lowercase and a number
      else if (!regPassword.test(password.val())) {
        password.addClass('is-invalid');
        password.removeClass('is-valid');
        if (Cookies.get("lang") == "Bosnian" ) {
          passwordMsg.text('Molimo Vas unesite ispravan format lozinke!');
      
        }  
        else if (Cookies.get("lang") == "English" ){
          passwordMsg.text('Provide a required format!');
        } 
        else if (Cookies.get("lang") == "Deutch" ){
          passwordMsg.text('Die angegebenen Passwörter stimmen nicht überein');
        }
      } else {
        password.removeClass('is-invalid');
        password.addClass('is-valid');
        passwordMsg.text('');
      }
    } else {
      password.removeClass('is-invalid');
      password.removeClass('is-valid');
      passwordMsg.text('');
    }

    passwordRe.focusout(() => {

      // Check if passwords are set && are longer than 8 characters
      if (password.val().length > 7 && passwordRe.val().length > 7) {

        // Check if passwords match
        if (password.val() == passwordRe.val()) {
          passwordRe.removeClass('is-invalid');
          passwordRe.addClass('is-valid');
          passwordReMsg.text('');
        } else {
          passwordRe.addClass('is-invalid');
          passwordRe.removeClass('is-valid');
          if (Cookies.get("lang") == "Bosnian" ) {
            passwordReMsg.text('Lozinke se ne podudaraju!');
        
          }  
          else if (Cookies.get("lang") == "English" ){
            passwordReMsg.text('Provided passwords do not match!');
          } 
          else if (Cookies.get("lang") == "Deutch" ){
            passwordReMsg.text('Geben Sie ein erforderliches Format an!');
          }
        
        }
      } else {
        passwordRe.removeClass('is-invalid');
        passwordRe.removeClass('is-valid');
        passwordReMsg.text('');
      }
    });
  });


  // Form submiting
  form.submit((e) => {
    e.preventDefault();

    if (recover_submit.hasClass('disabled')) {
      return false;
    } else {

      const new_password = password.val();
      const new_passwordRe = passwordRe.val();
      const submit = recover_submit.val();

      form.load('./includes/forgotten_password.inc.php', {
        new_password: new_password,
        new_passwordRe: new_passwordRe,
        id: id,
        recover: submit
      });
    }
  });
  

});