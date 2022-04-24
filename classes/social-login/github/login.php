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
    
    $github_id = $userProfile->identifier;
    
    $login = new User();  
    $login->github_login($email, $github_id);

    require '../../../includes/login_social.inc.php';
}
catch( Exception $e ){
    echo $e->getMessage() ;
}