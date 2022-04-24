<?php
require_once 'vendor/autoload.php';
 
$config = [
    'callback' => 'https://admin.lab387.com/classes/social-login/github/index.php',
    'keys'     => [
                    'id' => '081cb53895c631e65924',
                    'secret' => '95cd88ce4ddd19dbb3c2a7e3f210f641205cccc8'
                ],
    'scope'    => 'read:user user:email',
];
 
$adapter = new Hybridauth\Provider\GitHub( $config );