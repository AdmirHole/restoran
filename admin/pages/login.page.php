<?php
require_once "./classes/User.class.php";
$class = new User();
$grupe = $class->get_grupe();
?>
<div class="container hei-10">
    <div class="row justify-content-center ">
        <div class="col-6 w-50 hei-5 d-flex flex-column justify-content-center align-content-center">
            <div class="mt-3 row">
                <label for="username" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="username" value="">
                </div>
            </div>
            <div class="mt-3 row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password">
                </div>
            </div>
            <div class="mt-3 row">
                <label for="login" class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    <button type="button" class="btn btn-primary login">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>