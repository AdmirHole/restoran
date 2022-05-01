<?php
require_once 'config.php';

require '../../User.class.php';

try {
    if (isset($_COOKIE['timer'])) {
        setcookie("timer", null, -1, '/');
        unset($_COOKIE['timer']);
    }
    $adapter->authenticate();
    $userProfile = $adapter->getUserProfile();

    $email = $userProfile->email;

    setcookie('email', $email, time() + (86400 * 30), "/");

    $username = $userProfile->displayName;

    $id = $userProfile->identifier;

    $facebook = new User();

    if(isset($_SESSION['app']) && !isset($_SESSION['package'])){
        $app = $_SESSION['app'];
        $facebook ->check_social_email($email, $id, $app, false);
    }elseif(isset($_SESSION['app']) && isset($_SESSION['package'])){
        $app = $_SESSION['app'];
        $package = $_SESSION['package'];
        $facebook ->check_social_email($email, $id, $app, $package);
    }else{
        $facebook ->check_social_email($email, $id, 'AdminLab', false);
    }
    

}
catch( Exception $e ){
    echo $e->getMessage() ;
}