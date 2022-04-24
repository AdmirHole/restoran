<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once 'vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
$sid = 'ACa5c8a19335810878d7e5de3a419fdfda';
$token = '7916658cc28a44d558795d69ccf165f5';
$twilio = new Client($sid, $token);

$verificationNumber = mt_rand(100000, 999999);

$message = $twilio->messages
                  ->create("+387603563482", // to
                           ["body" => "Your verification code is: $verificationNumber", "from" => "+13863336736"]
                  );

echo $verificationNumber;
