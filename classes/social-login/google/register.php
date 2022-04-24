<?php
require_once 'config.php';

require '../../User.class.php';

if(isset($_GET['app'])){

    $app = $_GET['app'];

try {
    $adapter->authenticate();
    $userProfile = $adapter->getUserProfile();
    
    $email = $userProfile->email;
    $fullname = $userProfile->displayName;
    $username = $fullname.date('mdHis');
    $facebook_id ='';
    $twitter_id ='';
    $google_id= $userProfile->identifier;
    $linkedin_id ='';
    $github_id  = '';
    $time = date('Y-m-d H:i:s');
    $token = md5($username.$google_id.$time);
    $password = md5($google_id.$time);

    $google_register = new User();
    if ($google_register->check_apps($app) == true) {

        if(isset($_GET['package'])){
            $package = $_GET['package'];
            $google_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, $app, $package);
        }else{
            $google_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, $app, false);
        }

    }else{
        $google_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, 'AdminLab', false);
    }
}
catch( Exception $e ){
    echo $e->getMessage() ;
}
}