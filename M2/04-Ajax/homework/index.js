let amigo;

const btnVerAmigos = $("#boton").click(() => {
  $("#lista").append(`<h2>${"Mis amigos!"}</h2>`);
  $("#lista").empty();
  $.get("http://localhost:5000/amigos", (elemento) => {
    for (const value of elemento) {
      $("#lista").append(`<li>${value.name}</li>`);
    }
  });
  $("img").remove();
  $("#verAmigos").remove();
});

const btnSearch = $("#search").click(() => {
  const id = $("#input")[0].value;
  $.get(`http://localhost:5000/amigos/${id}`, (elemento) => {
    $("#amigo").text(elemento.name);
    amigo = elemento.name;
  });
});

const btnDelete = $("#delete").click(() => {
  const id = $("#inputDelete")[0].value;
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    complete: function () {
      $("#success").text(`Tu amigo ${amigo} fue borrado con exito`);
    },
  });
});
