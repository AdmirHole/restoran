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


        if (isset($_SESSION['status']) && $_SESSION['status'] == '2') {
            switch ($page) {
                    // Normal pages in whitelist
                case 'change-number':
                case 'error':
                case 'insert-grupu':
                case 'confirmation':
                case 'reset-password':
                case 'confirm-reset-password':
                case 'profile':
                case 'applications':
                case 'subscriptions':
                case 'transactions':
                case 'users':
                case 'create-new-password':
                case 'admin-applications':
                case 'packages':
                case 'authenticate':
                case 'verifynumber':
                case 'verifynumber-login':
                case 'authenticate-facebook':
                case 'verifynumber-facebook';
                case 'verifynumber-twitter';
                case 'authenticate-twitter';
                case 'verifynumber-google';
                case 'authenticate-google';
                case 'verifynumber-github';
                case 'authenticate-github';
                case 'verifynumber-linkedin';
                case 'authenticate-linkedin';
                case 'mail-message';
                case 'login';
                case 'insert-artikala';
                case 'appregister';
                case 'confirmation-login';

                    require 'pages/' . $page . '.page.php';
                    break;
                    // Example of the page with third argument ($data)
                default:
                    // Load index by default
                    require 'pages/applications.page.php';
                    return;
            }
        } elseif (isset($_SESSION['status']) && $_SESSION['status'] == '1') {
            switch ($page) {
                    // Normal pages in whitelist
                case 'change-number':
                case 'error':
                case 'confirmation':
                case 'insert-grupu':
                case 'reset-password':
                case 'confirm-reset-password':
                case 'profile':
                case 'applications':
                case 'subscriptions':
                case 'transactions':
                case 'users':
                case 'create-new-password':
                case 'admin-applications':
                case 'packages':
                case 'authenticate':
                case 'verifynumber':
                case 'verifynumber-login':
                case 'authenticate-facebook':
                case 'verifynumber-facebook';
                case 'verifynumber-twitter';
                case 'authenticate-twitter';
                case 'verifynumber-google';
                case 'authenticate-google';
                case 'verifynumber-github';
                case 'authenticate-github';
                case 'verifynumber-linkedin';
                case 'authenticate-linkedin';
                case 'mail-message';
                case 'insert-artikala';
                case 'login';
                case 'appregister';
                case 'confirmation-login';

                    require 'pages/' . $page . '.page.php';
                    break;
                    // Example of the page with third argument ($data)
                default:
                    // Load index by default
                    require 'pages/applications.page.php';
                    return;
            }
        } elseif (isset($_SESSION['status']) && $_SESSION['status'] == '3') {
            switch ($page) {
                    // Normal pages in whitelist
                case 'change-number':
                case 'error':
                case 'confirmation':
                case 'insert-grupu':
                case 'reset-password':
                case 'confirm-reset-password':
                case 'profile':
                case 'applications':
                case 'subscriptions':
                case 'transactions':
                case 'users':
                case 'create-new-password':
                case 'admin-applications':
                case 'packages':
                case 'authenticate':
                case 'verifynumber':
                case 'verifynumber-login':
                case 'authenticate-facebook':
                case 'verifynumber-facebook';
                case 'verifynumber-twitter';
                case 'authenticate-twitter';
                case 'verifynumber-google';
                case 'authenticate-google';
                case 'verifynumber-github';
                case 'authenticate-github';
                case 'verifynumber-linkedin';
                case 'authenticate-linkedin';
                case 'mail-message';
                case 'insert-artikala';
                case 'login';
                case 'appregister';
                case 'confirmation-login';

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
                case 'change-number':
                case 'error':
                case 'confirmation':
                case 'reset-password':
                case 'insert-grupu':
                case 'confirm-reset-password':
                case 'profile':
                case 'applications':
                case 'subscriptions':
                case 'transactions':
                case 'create-new-password':
                case 'authenticate':
                case 'verifynumber':
                case 'verifynumber-login':
                case 'authenticate-facebook':
                case 'verifynumber-facebook';
                case 'verifynumber-twitter';
                case 'authenticate-twitter';
                case 'verifynumber-google';
                case 'authenticate-google';
                case 'verifynumber-github';
                case 'authenticate-github';
                case 'verifynumber-linkedin';
                case 'authenticate-linkedin';
                case 'mail-message';
                case 'insert-artikala';
                case 'login';
                case 'appregister';
                case 'confirmation-login';

                    require 'pages/' . $page . '.page.php';
                    break;
                    // Example of the page with third argument ($data)
                default:
                    // Load index by default
                    require 'pages/applications.page.php';
                    return;
            }
        }
    } else {
        switch ($page) {
                // Normal pages in whitelist
            case 'login':
            case 'change-number':
            case 'register':
            case 'index':
            case 'error':
            case 'packages':
            case 'insert-grupu':
            case 'confirm-reset-password':
            case 'reset-password':
            case 'create-new-password':
            case 'confirmation':
            case 'authenticate':
            case 'verifynumber':
            case 'verifynumber-login':
            case 'authenticate-facebook':
            case 'verifynumber-facebook';
            case 'verifynumber-twitter';
            case 'authenticate-twitter';
            case 'verifynumber-google';
            case 'authenticate-google';
            case 'verifynumber-github';
            case 'authenticate-github';
            case 'verifynumber-linkedin';
            case 'authenticate-linkedin';
            case 'mail-message';
            case 'appregister';
            case 'confirmation-login';
            case 'insert-artikala';

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
