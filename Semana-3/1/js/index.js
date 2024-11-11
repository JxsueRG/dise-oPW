$(document).ready(function(){
    cargarEstados();

    function cargarEstados(){
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            data: {'lista' : 'todos'},
            dataType: "json",
            success: function(estados){
                $("#estados").append("<option value=''>Seleccione una opcion</option>");  
                $.each(estados, function(i, estado){
                    $("#estados").append("<option value=" + estado.idestado + ">" + estado.nombre + "</option>");  
                });
            },
            error: function(){
                alert("Error en la peticion ajax");
            }
        });
    }

    $("#agregar").click(function(){
        var nombreEstado = $("#estado").val();
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            data: {
                'ADD': 'estado',
                'nombre': nombreEstado
            },
            dataType: 'json',
            success: function(data){
                alert(data.estado);
                $("#divAgregar").toggle();
                $("#estados").empty();
                cargarEstados();
            },
            error: function(data){
                alert(data.estado);
            }
        });
    });

    $("#eliminar").click(function(){
        var nombreEliminar = $("#estadoEliminar").val();
        $("#divEliminar").toggle();
        if(nombreEliminar === ""){
            alert("El nombre es requerido");
            return;
        }
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            dataType: "json",
            data: {
                'DELETE': 'estado',
                'nombre': nombreEliminar
            },
            success: function(data){
                $("#estados").empty();
                alert(data.estado);
                cargarEstados();
            },
            error: function(data){
                alert(data.estado);
            }
        });
    });

$("#actualizar").click(function(){
    var idEstado = $("#idEstado").val();
    var nombreEstado = $("#estadoActualizar").val(); // Aquí se agregó el "#" para seleccionar el elemento correctamente
    if(nombreEstado === ""){
        alert("Ingrese un nombre válido");
        return;
    }
    $("#divActualizar").toggle();
    $.ajax({
        url: "crud/estados.php",
        type: "POST",
        dataType: "json",
        data: {
            "UPDATE": "estado",
            "idEstado": idEstado,
            "nombre": nombreEstado
        },
        success: function(data){
            $("#estados").empty();
            cargarEstados();
            alert(data.estado);
        }
    });
});


    $("#btAgregar").click(function(){
        $("#divAgregar").toggle();
    });
    $("#btEliminar").click(function(){
        $("#divEliminar").toggle();
    });
    $("#btActualizar").click(function(){
        $("#divActualizar").toggle();
        $("#idEstado").val($("#estados").val());
        $("#estadoActualizar").val($("#estados option:selected").text());
    });
});
