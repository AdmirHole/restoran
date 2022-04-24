<?php
require_once "./classes/User.class.php";
$class = new User();
$grupe = $class->get_grupe();
?>
<div class="container hei-10">
    <div class="row justify-content-center ">
        <div class="col-6 w-50 hei-5 d-flex flex-column justify-content-center align-content-center">
            <div class="mt-3 row">
                <label for="insertArtikla" class="col-sm-2 col-form-label">Naziv artikla</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="insertArtikla" value="">
                </div>
            </div>
            <div class="mt-3 row">
                <label for="insertCijena" class="col-sm-2 col-form-label">Cijena</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="insertCijena">
                </div>
            </div>
            <div class="mt-3 row">
                <label for="insertKolicina" class="col-sm-2 col-form-label">Količina</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="insertKolicina">
                </div>
            </div>
            <div class="mt-3 row">
                <label for="grupa" class="col-sm-2 col-form-label">Grupa</label>
                <div class="col-sm-10">
                    <select id="grupa" class="form-control">
                        <?php
                        foreach ($grupe as $key) {
                            echo "<option value=" . $key['id'] . ">" . $key["naziv_grupe"] . "</option>";
                        }
                        ?>

                    </select>
                </div>
            </div>
            <div class="mt-3 row">
                <label for="insertKolicina" class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    <button type="button" class="btn btn-primary artikalSave">Spasi</button>
                </div>
            </div>
        </div>
    </div>
</div>