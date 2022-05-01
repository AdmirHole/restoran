$(document).ready(function () {
    // Fullname validation
    $(".grupaSave").click(() => {

        let nazivGrupe = $("#nazivGrupe").val();

        $.ajax({
            type: 'post',
            url: './includes/users.php',
            data: {
                "naziv_grupe": nazivGrupe
            },
            success: function (data) {
                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                if (data) {
                    Command: toastr["success"]("Uspješno insertovana grupa")
                } else {
                    Command: toastr["error"]("Greška!!")
                }
            }
        })
    })
    $(".artikalSave").click(() => {

        let idGrupe = $("#grupa option:selected").val();
        let nazivArtikla = $("#insertArtikla").val();
        let cijena = $("#insertCijena").val();
        let kolicina = $("#insertKolicina").val();

        $.ajax({
            type: 'post',
            url: './includes/users.php',
            data: {
                idGrupe,
                nazivArtikla,
                cijena,
                kolicina,
                "artikalSave": ""
            },
            success: function (data) {
                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                if (data) {
                    Command: toastr["success"]("Uspješno insertovan artikal")
                } else {
                    Command: toastr["error"]("Greška!!")
                }
            }
        })
    })

    

    //END READY
})