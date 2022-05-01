<?php
include 'autoloader.inc.php';
include 'register.inc.php';
/* $lang = create_lang_arr2(); */


// Check for email availability 
if (isset($_POST['checkEmail'])) {

  val_email($_POST['checkEmail']);
  regex_email($_POST['checkEmail']); //ovo je za bazu 


}
// Validate Fullname
else if (isset($_POST['checkName'])) {

  val_name($_POST['checkName']);

}else if (isset($_POST['pass'])) {
  regex_pass($_POST['pass']);
} 
// Registration process
else if (isset($_POST['register'])){

  $cookiename = 'email';
  $cookieemail = $_POST['email'];
  setcookie($cookiename, $cookieemail, time() + (86400 * 30), "/");
  

  if (val_name($_POST['fullname'])['valid'] == 1) {
    if (regex_email($_POST['email'])['valid'] == 1) {
      if (regex_pass($_POST['password'])['valid'] == 1) {

        if(isset($_POST['app'])){
          echo "app";
          register_user($_POST['fullname'], $_POST['email'], $_POST['password'], $_POST['app'], $_POST['package']);
        }else{
          register_user($_POST['fullname'], $_POST['email'], $_POST['password'], 'AdminLab', false);
        }

      }else{

        echo "Bad Password";
        
      }
    }else{
      echo "Bad email"; 
    }
  }else{
    echo "Bad Name";
  }
  
} 
else{
  //...
  // Nakon provjera 
  //require 'login.inc.php';
}
//Validate fullname function
function val_name($fullname){
  if (preg_match('/^[A-žÀ-ÿš]+ [A-žÀ-ÿ]+$/', $fullname) > 0 && strlen($fullname) > 5) {
    $niz = [
      'valid' => 1,
      'msg' => "Good name"
    ];
  } else {

    $niz = [
      'valid' => 0,
      'msg' => "Bad name"
    ];

    //echo /* $lang["errors"]["Invalid name!"] */'Invalid name!';
  }
  if (isset($_POST['register'])) {
    return $niz;
  }else{
    echo json_encode($niz);
  }
  
} 
//END

//Check if email is registered
function val_email($email){
  $test = new User();
  if ($test->check_email(htmlentities($email, ENT_QUOTES)) == false) {
    $niz = [
      'valid' => 1,
      'msg' => "Not registered"
    ];
  } else {

    $niz = [
      'valid' => 0,
      'msg' => "Email alredy registered"
    ];
    //echo /* $lang["errors"][];
  }
  if (isset($_POST['register'])) {
    return $niz;
  } else {
    echo json_encode($niz);
  }
}
//END



//Validate EMAIL
function regex_email($email){
  if (filter_var(htmlentities($email, ENT_QUOTES), FILTER_VALIDATE_EMAIL)) {
    $niz = [
      'valid' => 1,
      'msg' => "Good email"
    ];
  } else {

    $niz = [
      'valid' => 0,
      'msg' => "Bad email"
    ];
    //echo /* $lang["errors"][];
  }
  if (isset($_POST['register'])) {
    return $niz;
  } else {
    echo json_encode($niz);
  }
}
//END

function regex_pass($pass){
  if(preg_match('/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[\W])\S*$/', $pass)){
    $niz = [
      'valid' => 1,
      'msg' => "Good password"
    ];
  } else {
    $niz = [
      'valid' => 0,
      'msg' => "Bad password"
    ];
  }
  if (isset($_POST['register'])) {
    return $niz;
  } else {
    echo json_encode($niz);
  }
}

// Check for phone number availability 
if (isset($_POST['checkNumber'])) {

  $phone_number_raw = $_POST['checkNumber'];
  $phone_number = str_replace(" ","","$phone_number_raw");

  val_number($phone_number);


}  

//Check if phone number is registered
function val_number($number){
  $test = new User();
  if ($test->check_phone_number(htmlentities($number, ENT_QUOTES)) == false) {
    $niz = [
      'valid' => 1,
      'msg' => "Not registered"
    ];
  } else {

    $niz = [
      'valid' => 0,
      'msg' => "Phone number is not valid or is already in use"
    ];
    //echo /* $lang["errors"][];
  }
  if (isset($_POST['numberSubmit'])) {
    return $niz;
  } else {
    echo json_encode($niz);
  }
}
//END

if(isset($_POST['email_time'])){
  $time = new User();

  if($time -> check_time_pass($_POST['email_time'], time()) == true){
    echo "1";
  }else{
    echo "0";
  }

}

if(isset($_POST['update_time'])){
  $time = new User();
  $time ->update_time_pass($_POST['update_time'], time());
}