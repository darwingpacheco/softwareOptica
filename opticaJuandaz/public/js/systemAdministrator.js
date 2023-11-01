class systemAdministratorJs {
  insertUser() {

    const name = document.getElementById("name");
    const id_city = document.getElementById("id_city");
    const id_departament = document.getElementById("id_departament");
    const id_country = document.getElementById("id_country");
    const id_role = document.getElementById("id_role");
    const password = document.getElementById("password");
    const sex = document.getElementById("sex");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const years_experience = document.getElementById("years_experience");
    const phone = document.getElementById("phone");
    const admission = document.getElementById("admission");
    const birth_date = document.getElementById("birth_date");
    const documento = document.getElementById("document");
    const surname = document.getElementById("surname");

    function mostrarAlertaCampoVacio(campo) {
      Swal.fire({
        title: 'ERROR',
        text: `El campo ${campo} está vacío`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }

    if (name.value.trim() === "") {
      mostrarAlertaCampoVacio("Nombre");
    }else if (id_city.value.trim() === "") {
      mostrarAlertaCampoVacio("Ciudad");
    } else if (id_departament.value.trim() === "") {
      mostrarAlertaCampoVacio("Departamento");
    } else if (id_country.value.trim() === "") {
      mostrarAlertaCampoVacio("País");
    } else if (id_role.value.trim() === "") {
      mostrarAlertaCampoVacio("Rol");
    } else if (password.value.trim() === "") {
      mostrarAlertaCampoVacio("Contraseña");
    } else if (sex.value.trim() === "") {
      mostrarAlertaCampoVacio("Sexo");
    } else if (address.value.trim() === "") {
      mostrarAlertaCampoVacio("Dirección");
    }else if (email.value.trim() === "") {
      mostrarAlertaCampoVacio("Correo");
    } else if (years_experience.value.trim() === "") {
      mostrarAlertaCampoVacio("Años de experiencia");
    } else if (phone.value.trim() === "") {
      mostrarAlertaCampoVacio("Telefono");
    } else if (admission.value.trim() === "") {
      mostrarAlertaCampoVacio("Fecha de ingreso");
    } else if (birth_date.value.trim() === "") {
      mostrarAlertaCampoVacio("Fecha de nacimiento");
    } else if (documento.value.trim() === "") {
      mostrarAlertaCampoVacio("Documento");
    } else if (surname.value.trim() === "") {
      mostrarAlertaCampoVacio("Apellidos");
    }else{
      Swal.fire({
        title: 'LISTO',
        text: `USUARIO CREADO`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

    fetch("createUsersController/insertUser", {
      method: "POST",
      body: object,
    })
      .then((resp) => resp.text())
      .then(function (data) {
        try {
          object = JSON.parse(data);
          toastr.error(object.message);
        } catch (error) {
          document.querySelector("#content").innerHTML = data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  showSearchUsers(token_access) {
    var object = new FormData();
    object.append("token_access", token_access);
    $('#my_modal').modal('show');
    document.querySelector("#modal_title").innerHTML = "Actualizar Usuario";
    fetch("searchUsersController/showSearchUsers", {
      method: "POST",
      body: object,
    })
      .then((resp) => resp.text())
      .then(function (data) {
        document.querySelector("#modal_content").innerHTML = data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateSearchUsers() {
    var object = new FormData(document.querySelector("#update_User"));

    fetch("searchUsersController/updateSearchUsers", {
      method: "POST",
      body: object,
    })
      .then((resp) => resp.text())
      .then(function (data) {
        try {
          object = JSON.parse(data);
          toastr.error(object.message);
        } catch (error) {
          document.querySelector("#content").innerHTML = data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  search() {
    var object = new FormData(document.querySelector("#formSearch"));
    fetch('searchUsersController/search',{
      method: 'POST',
      body: object
    })
    .then((resp)=> resp.text())
    .then(function(data){
      try{
        object=JSON.parse(data);
        toastr.error(object.message);
      }
      catch(error){
        document.querySelector('#content').innerHTML=data;
        toastr.success('Usuario encontrado');
      }
    })
    .catch(function(error){
      console.log(error);
    });
  }
}

var Administrador = new systemAdministratorJs();
