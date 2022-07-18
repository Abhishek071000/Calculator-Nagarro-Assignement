$(document).ready(function () {
    $("#add-btn").click(function () {
        if ($("#task-input").val() != "") {
            $("#todo").append(
                $('<div class="row justify-content-center align-items-center text-white my-2">' +
                    '<p class="col-sm-8 m-0 bg-dark py-2 rounded">' +
                    $("#task-input").val() +
                    '</p>' +
                    '<i class="col-sm-1 text-center fas fa-trash text-danger py-2"></i>' +
                    '</div>')
            );
            $("#task-input").val("");
            $("i.fas.fa-trash").click(function () {
                $(this).parent().remove();
            });
        }
    });
});