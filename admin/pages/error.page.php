<?php include 'sections/header.php'; ?>

<?php include 'sections/navbar.php'; ?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper entry-page">

    <!-- Content Header (Page header) -->
    <section class="entry-header">
        <div class="container-fluid">
            <a href="index">
            <img src="https://adminlab387.b-cdn.net/dist/images/logos/logo.png" alt="Lab387 logo" class="logo">
            </a>
        </div><!-- /.container-fluid -->
    </section>

<p class="text-center confirmation"><?php
    if(!empty($_GET['error']) && $_GET['error'] ==  '1')
    {
        echo language('error-page', 'err1');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "2"){
            echo language('error-page', 'err2');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "3"){
            echo language('error-page', 'err3');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="create-new-password" class="btn btn-index"><?php echo language('buttons', 'go-back'); ?>k<i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "4"){
            echo language('error-page', 'err4');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "5"){
            echo language('error-page', 'err5');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "6"){
            echo language('error-page', 'err6'); ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="reset-password" class="btn btn-index"><?php echo language('buttons', 'reset-pass'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "7"){
            echo language('error-page', 'err7');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "8"){
            echo language('error-page', 'err8');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?>e<i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "9"){
            //Error prepare
            echo language('error-page', 'err4');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "10"){
            echo language('error-page', 'err4');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }
        else if ($_GET['error'] == "11"){
            echo language('error-page', 'err11');
            ?>
            <section class="buttons">
                    <div class="login-register-buttons"> 
                        <a href="register" class="btn btn-index"><?php echo language('home', 'register'); ?> <i class="fas fa-user-plus"></i></a>
                    </div>
                <?php
                }
    
        else if ($_GET['error'] == "12"){
            echo language('error-page', 'err12');
            ?>
            <section class="buttons">
                    <div class="login-register-buttons">
                        <a href="login" class="btn btn-index"><?php echo language('home', 'login'); ?> <i class="fas fa-sign-in-alt"></i></a></div>
    <?php
    }else if ($_GET['error'] == "13"){
        echo language('error-page', 'err13');
        ?>
<section class="buttons">
        <div class="login-register-buttons"> 
            <a href="register" class="btn btn-index"><?php echo language('home', 'register'); ?> <i class="fas fa-user-plus"></i></a>
        </div>
    <?php
    }else if ($_GET['error'] == "14"){
        echo language('error-page', 'err14');
        ?>
<section class="buttons">
        <div class="login-register-buttons"> 
            <a href="register" class="btn btn-index"><?php echo language('home', 'register'); ?> <i class="fas fa-user-plus"></i></a>
        </div>
    <?php
    }else if ($_GET['error'] == "15"){
        echo language('error-page', 'err15');
        if(isset($_GET['app'])){
            if(isset($_GET['package'])){
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-github?app=<?php echo $_GET['app']; ?>&package=<?php echo $_GET['package']; ?>" class="btn btn-index">Enter phone number <i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }else{
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-github?app=<?php echo $_GET['app']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }
        }else{
            ?>
        <section class="buttons">
        <div class="login-register-buttons"> 
            <a href="authenticate-github" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?> <i class="fas fa-user-plus"></i></a>
        </div>
        <?php
        }
    }else if ($_GET['error'] == "16"){
        echo language('error-page', 'err15');
        if(isset($_GET['app'])){
            if(isset($_GET['package'])){
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-linkedin?app=<?php echo $_GET['app']; ?>&package=<?php echo $_GET['package']; ?>" class="btn btn-index">Enter phone number <i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }else{
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-linkedin?app=<?php echo $_GET['app']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }
        }else{
            ?>
        <section class="buttons">
        <div class="login-register-buttons"> 
            <a href="authenticate-linkedin" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
        </div>
        <?php
        }
    }else if ($_GET['error'] == "17"){
        echo language('error-page', 'err15');
        if(isset($_GET['app'])){
            if(isset($_GET['package'])){
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-google?app=<?php echo $_GET['app']; ?>&package=<?php echo $_GET['package']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }else{
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-google?app=<?php echo $_GET['app']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }
        }else{
            ?>
        <section class="buttons">
        <div class="login-register-buttons"> 
            <a href="authenticate-google" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
        </div>
        <?php
        }
    }else if ($_GET['error'] == "18"){
        echo language('error-page', 'err15'); 
        if(isset($_GET['app'])){
            if(isset($_GET['package'])){
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-twitter?app=<?php echo $_GET['app']; ?>&package=<?php echo $_GET['package']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }else{
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-twitter?app=<?php echo $_GET['app']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }
        }else{
            ?>
        <section class="buttons">
        <div class="login-register-buttons"> 
            <a href="authenticate-twitter" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
        </div>
        <?php
        }
    }else if ($_GET['error'] == "19"){
        echo language('error-page', 'err15');
        if(isset($_GET['app'])){
            if(isset($_GET['package'])){
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-facebook?app=<?php echo $_GET['app']; ?>&package=<?php echo $_GET['package']; ?>" class="btn btn-index">Enter phone number <i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }else{
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate-facebook?app=<?php echo $_GET['app']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }
        }else{
            ?>
        <section class="buttons">
        <div class="login-register-buttons"> 
            <a href="authenticate-facebook" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
        </div>
        <?php
        }
    }else if ($_GET['error'] == "20"){
        echo language('error-page', 'err15');
        if(isset($_GET['app'])){
            if(isset($_GET['package'])){
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate?app=<?php echo $_GET['app']; ?>&package=<?php echo $_GET['package']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }else{
                ?>
                <section class="buttons">
                <div class="login-register-buttons"> 
                <a href="authenticate?app=<?php echo $_GET['app']; ?>" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?> <i class="fas fa-user-plus"></i></a>
                </div>
                <?php
            }
        }else{
            ?>
        <section class="buttons">
        <div class="login-register-buttons"> 
            <a href="authenticate" class="btn btn-index"><?php echo language('buttons', 'enter-nmbr'); ?><i class="fas fa-user-plus"></i></a>
        </div>
        <?php
        }
    }elseif ($_GET['error'] == "21"){   
        echo language('error-page', 'err21');
            ?>
            <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div> <?php
    }elseif ($_GET['error'] == "22"){   
        echo language('error-page', 'err22');
        ?>
        <section class="buttons">
            <div class="login-register-buttons">
                <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
            </div> <?php
}elseif ($_GET['error'] == "23"){   
    echo language('error-page', 'err23');
    ?>
    <section class="buttons">
        <div class="login-register-buttons">
            <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
        </div> <?php
}elseif ($_GET['error'] == "24"){   
    echo language('error-page', 'err24');
    ?>
    <section class="buttons">
        <div class="login-register-buttons">
            <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
        </div> <?php
}elseif ($_GET['error'] == "25"){   
    echo language('error-page', 'err25');
    ?>
    <section class="buttons">
        <div class="login-register-buttons">
            <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
        </div> <?php
}elseif ($_GET['error'] == "26"){   
    echo language('error-page', 'err26');
    ?>
    <section class="buttons">
        <div class="login-register-buttons">
            <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
        </div> <?php
}elseif ($_GET['error'] == "27"){   
    echo language('error-page', 'err27');
    ?>
    <section class="buttons">
        <div class="login-register-buttons">
            <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
        </div> <?php
}elseif ($_GET['error'] == "28"){  
    echo language('error-page', 'err28'); 
    echo "<br>";
    echo language('error-page', 'err28.5');
    ?>
    <section class="buttons">
        <div class="login-register-buttons">
            <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
        </div> <?php
}elseif ($_GET['error'] == "29"){   
    echo language('error-page', 'err29');
    ?>
    <section class="buttons">
        <div class="login-register-buttons">
            <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
        </div> <?php
}else {
    echo language('error-page', 'err4');
        ?>
        <section class="buttons">
                <div class="login-register-buttons">
                    <a href="index" class="btn btn-index"><?php echo language('buttons', 'home'); ?><i class="fas fa-sign-in-alt"></i></a>
                </div>
<?php
    }

    ?>

</p>


</div> <!-- Content Wrapper END -->

<?php include 'sections/footer.php'; ?>