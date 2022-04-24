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
    $facebook_id = $userProfile->identifier;
    $twitter_id = '';
    $google_id= '';
    $linkedin_id ='';
    $github_id ='';
    $time = date('Y-m-d H:i:s');
    $token = md5($username.$facebook_id.$time);
    $password = md5($facebook_id.$time);

    $facebook_register = new User();
    if ($facebook_register->check_apps($app) == true) {

        if(isset($_GET['package'])){
            $package = $_GET['package'];
            $facebook_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, $app, $package);
        }else{
            $facebook_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, $app, false);
        }

    }else{
        $facebook_register ->social_register($fullname, $username, $email, $password, $token, $facebook_id, $twitter_id, $google_id, $linkedin_id, $github_id, 'AdminLab', false);
    }
}
catch( Exception $e ){
    echo $e->getMessage() ;
}
}