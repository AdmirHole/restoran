<?php
require_once 'config.php';

require_once '../../User.class.php';

$adapter->authenticate();
        $userProfile = $adapter->getUserProfile();
        
        $email = $userProfile->email;
        $six_digit_code = htmlspecialchars($_POST['verify']);
$code = new User();

if(isset($_POST['verifycheck']) && isset($_POST['verify'])){
        $date = date('Y-m-d',strtotime('+30 days'));

        if(isset($_POST['app_name'])){
            if(isset($_POST['package'])){
                $code-> stop_2fa_social($email, $date, $six_digit_code, $_POST['app_name'], $_POST['package']);
            }else{
                $code-> stop_2fa_social($email, $date, $six_digit_code, $_POST['app_name'], 'none');
            }
        }else{
            $code-> stop_2fa_social($email, $date, $six_digit_code, 'AdminLab', 'none');
        }
    }elseif(isset($_POST['verify']) && !isset($_POST['verifycheck'])){
        if(isset($_POST['app_name'])){
            if(isset($_POST['package'])){
                
            $code-> verification_code_social($email, $six_digit_code, $_POST['app_name'], $_POST['package']);
            }else{
                
            $code-> verification_code_social($email, $six_digit_code, $_POST['app_name'], 'none');
            }
        }else{
            $code-> verification_code_social($email, $six_digit_code, 'AdminLab', 'none');
        }
    }