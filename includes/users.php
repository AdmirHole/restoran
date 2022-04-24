<?php
require_once '../classes/User.class.php';

$class = new User();

if (isset($_POST['naziv_grupe'])) {
    echo json_encode($class->insert_grupe($_POST["naziv_grupe"]));
}
if (isset($_POST['artikalSave'])) {
    echo json_encode($class->insert_artikla($_POST["idGrupe"], $_POST["nazivArtikla"], $_POST["cijena"], $_POST["kolicina"]));
}
