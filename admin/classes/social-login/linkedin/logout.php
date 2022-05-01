<?php
require_once 'config.php';
 
try {
    if ($adapter->isConnected()) {
        $adapter->disconnect();
        echo 'Logged out the user';
        echo '<p><a href="../../../index.php">Go back to Index page</a></p>';
    }
}
catch( Exception $e ){
    echo $e->getMessage() ;
}