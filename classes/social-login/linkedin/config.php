<?php
require_once 'vendor/autoload.php';
 
$config = [
    'callback' => 'https://admin.lab387.com/classes/social-login/linkedin/index.php',
    'keys'     => [
                    'id' => '78u148xtox5fhl',
                    'secret' => 'N6053EIKpkZS9ZyD'
                ],
    'scope'    => 'r_liteprofile r_emailaddress',
];
 
$adapter = new Hybridauth\Provider\LinkedIn( $config );