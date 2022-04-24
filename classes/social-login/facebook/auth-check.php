<?php
require_once 'config.php';

require_once '../../User.class.php';
$adapter->authenticate();
        $userProfile = $adapter->getUserProfile();
        
        $email = $userProfile->email;

$date_now = date("Y-m-d");

if(isset($_GET['app']) && !isset($_GET['package'])){

        $check_auth = new User();
        if ($check_auth->check_apps($_GET['app']) == true) {
                $check_auth-> check_auth_social($email, $date_now, $_GET['app'], false);
        }else{
                $check_auth-> check_auth_social($email, $date_now, 'AdminLab', false);       
        }
        
}elseif(isset($_GET['app']) && isset($_GET['package'])){
        $check_auth = new User();
        if ($check_auth->check_apps($_GET['app']) == true) {
                $check_auth-> check_auth_social($email, $date_now, $_GET['app'], $_GET['package']);
        }else{
                $check_auth-> check_auth_social($email, $date_now, 'AdminLab', false);       
        }
}