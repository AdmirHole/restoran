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
    $google_id= '';
    $linkedin_id = $userProfile->identifier;
    $github_id  = '';
    $time = date('Y-m-d H:i:s');
    $token = md5($username.$github_id.$time);
    $password = md5($github_id.$time);

    $linkedin_register = new User();
    if ($linkedin_register->check_apps($app) == true) {

        if(isset($_GET['package'])){
            $package = $_GET['package'];
            $linkedin_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, $app, $package);
        }else{
            $linkedin_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, $app, false);
        }

    }else{
        $linkedin_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, 'AdminLab', false);
    }
}
catch( Exception $e ){
    echo $e->getMessage() ;
}
}