$(document).ready(function() {
 
  $("#barras").click(function() {
    if ( $("#menu").hasClass("collapse")) {
      $("#menu").removeClass("collapse")
    } else {
      $("#menu").addClass("collapse")
    }
  })
})

$(document).ready(function() {
  $("#slide").addClass("active")
})

function cadastraremail() {
  let email = document.getElementById("campoemail").value;
  alert("O e-mail " + email + " foi cadastrado com sucesso!");
}

function adicionarcarrinho() {
  alert("O item foi adicionado com sucesso ao carrinho de compras!");
}

function login() {
  alert("Bem vindo!");
}
