<?php
require_once 'config.php';

require_once '../../User.class.php';

try {
    if (isset($_COOKIE['timer'])) {
        setcookie("timer", null, -1, '/');
        unset($_COOKIE['timer']);
    }
    $adapter->authenticate();
    $userProfile = $adapter->getUserProfile();
    
    $email = $userProfile->email;
    
    $facebook_id = $userProfile->identifier;
    $login = new User();  
    $login->facebook_login($email, $facebook_id);

    require '../../../includes/login_social.inc.php';
}
catch( Exception $e ){
    echo $e->getMessage() ;
}