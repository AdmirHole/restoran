<?php
require_once 'config.php';
require '../../User.class.php';

try{
        $adapter->authenticate();
        $userProfile = $adapter->getUserProfile();       
        $email = $userProfile->email;

        $phone_number_raw = htmlspecialchars($_POST['number']);
        $phone_number = str_replace(" ","","$phone_number_raw");
        $validation_code = mt_rand(100000, 999999);

        $insert_phonenumber = new User();

        $insert_phonenumber-> insert_phone_number($email, $phone_number, $validation_code);

        

        //Send an SMS using Gatewayapi.com
        $url = "https://gatewayapi.com/rest/mtsms";
        $api_token = "UXHeIC1yS1CCFqUCWqt7JVSEB4yQbGA6V_ZU36JjpRWM3ZGlLH1AAsTvyahI02Rj";
        
        //Set SMS recipients and content
        $recipients = [str_replace("+","",$phone_number)];
        $json = [
                'sender' => 'LAB387',
                'message' => 'Your verification code is: '.$validation_code,
                'recipients' => [],
        ];
        foreach ($recipients as $msisdn) {
                $json['recipients'][] = ['msisdn' => $msisdn];
        }
        
        //Make and execute the http request
        //Using the built-in 'curl' library
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
        curl_setopt($ch,CURLOPT_USERPWD, $api_token.":");
        curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($json));
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);
        
        if(isset($_POST['app_name'])){
                $app = $_POST['app_name'];

                $check_app = new User();
                        if($check_app->check_apps($_POST['app_name']) == true){
                                if(isset($_POST['package'])){
                                        $package = $_POST['package'];
                                        header('location: https://admin.lab387.com/verifynumber-github?app='.$app.'&package='.$package);
                                }else{
                                        header('location: https://admin.lab387.com/verifynumber-github?app='.$app);
                                }
                        }else{
                                header('location: https://admin.lab387.com/verifynumber-github');
                        }
        }else{
                header('location: https://admin.lab387.com/verifynumber-github');
        }
}catch(Throwable $t){
        if(isset($_POST['app_name'])){
                $app = $_POST['app_name'];
        
                if(isset($_POST['package'])){
                        $package = $_POST['package'];
                        header('location: https://admin.lab387.com/error?error=15&app='.$app.'&package='.$package);
                }else{
                        header('location: https://admin.lab387.com/error?error=15&app='.$app);
                }
                }else{
                header('location: https://admin.lab387.com/error?error=15');
                }     
}