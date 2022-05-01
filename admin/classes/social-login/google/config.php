<?php
require_once 'vendor/autoload.php';
 
$config = [
    'callback' => 'https://admin.lab387.com/classes/social-login/google/index.php',
    //'callback' => 'http://localhost/officelab/classes/social-login/google/index.php',
    'keys'     => [
                    'id' => '314931218270-7apnpturb1o5snb3b3uj6mb2u0nvuap2.apps.googleusercontent.com',
                    'secret' => 'jrv28OWBVUcZ0ZuCPyw7vBmz'
                ],
    'scope'    => 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    'authorize_url_parameters' => [
            'approval_prompt' => 'force', // to pass only when you need to acquire a new refresh token.
            'access_type' => 'offline'
    ]
];
 
$adapter = new Hybridauth\Provider\Google( $config );