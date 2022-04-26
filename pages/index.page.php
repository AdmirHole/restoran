<?php
require_once "./classes/User.class.php";
$class = new User();
$grupe = $class->get_menu();
?>
<div class="container">
    <div class="wrapper">
        <div class="logo"><img src="./dist/images/oscar.jpg" alt="" class="image"></div>
        <table class="table">
            <?php
            foreach ($grupe as $key => $value) {
                echo "<thead>
                        <tr>
                            <th scope='col'>{$key}</th>
                            <th scope='col'></th>
                        </tr>
                    </thead><tbody>";
                foreach ($value as $key) {
                    echo "
                        <tr>
                            <td>{$key['naziv']}</td>
                            <td>{$key['cijena']} KM</td>
                        </tr>
                        ";
                }
                echo "</tbody>";
            }
            ?>
            
            
        </table>
    </div>
</div>


<!-- <div>
<img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https:\\facebook.ba&choe=UTF-8" title="Link to Google.com" />

</div> -->