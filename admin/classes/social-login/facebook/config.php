<?php
require_once 'vendor/autoload.php';
  
$config = [
    'callback' => 'https://admin.lab387.com/classes/social-login/facebook/index.php',
    'keys'     => ['key' => '318639806066859', 'secret' => '34644b4384386abdae17188e575bd86e'],
    'authorize' => true
];
  
$adapter = new Hybridauth\Provider\Facebook( $config );