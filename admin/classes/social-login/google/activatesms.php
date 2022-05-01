<?php
require_once 'config.php';
require '../../User.class.php';

require_once '../../EmailBody.class.php';
require 'sendmail.php';

try{
      $adapter->authenticate();
      $userProfile = $adapter->getUserProfile();
      
      $email = $userProfile->email;

      $validation_code = mt_rand(100000, 999999);

      if($_COOKIE['lang'] == 'bs'){

            $subject = "Verifikacijski mail";
            $coll = new EmailBody();
            $body = $coll->resend_2fa_code_bs($validation_code); 
            
      }else{
            $subject = "Verification email";
            $coll = new EmailBody();
            $body = $coll->resend_2fa_code($validation_code); 
      }
      
      if(send_mail($email, $body, $subject)){
            
            $update_code = new User();
            $update_code-> update_code($email, $validation_code);
            
      }

      //   //Send an SMS using Gatewayapi.com
      // $url = "https://gatewayapi.com/rest/mtsms";
      // $api_token = "UXHeIC1yS1CCFqUCWqt7JVSEB4yQbGA6V_ZU36JjpRWM3ZGlLH1AAsTvyahI02Rj";
      
      //   //Set SMS recipients and content
      // $recipients = [str_replace("+","",$phone_number)];
      // $json = [
      //       'sender' => 'LAB387',
      //       'message' => 'Your verification code is: '.$validation_code,
      //       'recipients' => [],
      // ];
      // foreach ($recipients as $msisdn) {
      //       $json['recipients'][] = ['msisdn' => $msisdn];
      // }
      
      //   //Make and execute the http request
      //   //Using the built-in 'curl' library
      // $ch = curl_init();
      // curl_setopt($ch,CURLOPT_URL, $url);
      // curl_setopt($ch,CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
      // curl_setopt($ch,CURLOPT_USERPWD, $api_token.":");
      // curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($json));
      // curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
      // $result = curl_exec($ch);
      // curl_close($ch);
      
      if(isset($_GET['app'])){
            header('location: https://admin.lab387.com/verifynumber-google?app='.$_GET['app']);
      }
}catch(Throwable $t){
      if(isset($_GET['app'])){
            $app = $_GET['app'];

            if(isset($_GET['package'])){
                  $package = $_GET['package'];
                  header('location: https://admin.lab387.com/error?error=17&app='.$app.'&package='.$package);
            }else{
                  header('location: https://admin.lab387.com/error?error=17&app='.$app);
            }
            }else{
            header('location: https://admin.lab387.com/error?error=17');
            }
}