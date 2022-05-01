<?php

/*** Function for loading the page ***/
function load_page($page)
{
    // Check is page empty. If it is, load the default page
    if ($page === '') {
        require 'pages/index.page.php';
        return;
    }
    // Create whitelist so nonexisting page cannot be loaded, and pages with third argument can be loaded without problems
    if (isset($_SESSION['login'])) {
            switch ($page) {
                    // Normal pages in whitelist
                case 'insert-grupu':
                case 'login';
                case 'index';
                case 'insert-artikala';

                    require 'pages/' . $page . '.page.php';
                    break;
                    // Example of the page with third argument ($data)
                default:
                    // Load index by default
                    require 'pages/applications.page.php';
                    return;
            }
    } else {
        switch ($page) {
                // Normal pages in whitelist
            case 'login':
            case 'register':
            case 'index':

                require 'pages/' . $page . '.page.php';
                break;
                // Example of the page with third argument ($data)

            default:
                // Load index by default
                require 'pages/index.page.php';
                return;
        }
    }
}
