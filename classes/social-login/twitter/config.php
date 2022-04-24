<?php
require_once 'vendor/autoload.php';
  
$config = [
    'callback' => 'https://admin.lab387.com/classes/social-login/twitter/index.php',
    'keys'     => ['key' => 'eYRH9hQQDXXUUvP95PZD6Z4C1', 'secret' => 'lTLFz3ILBHhvm9Kr6Zyj3Ig8KVVWsy9ekTs7kfCLfLm2pgfsg7'],
    'authorize' => true
];
  
$adapter = new Hybridauth\Provider\Twitter( $config );