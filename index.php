<?php
require 'sections/header.php';
require 'includes/pages.inc.php';

// Here we include proper page content
if (isset($_GET['page']))
    load_page($_GET['page']);
else
    load_page('index');

require 'sections/footer.php';