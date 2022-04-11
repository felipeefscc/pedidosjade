function sendwpp() {
    
    var name = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var pedido = document.getElementById("pedido").value;


    var url = "https://wa.me/+5571991223898?text="
    + "Nome: " + name + "%0a"
    + "Telefone: " + telefone + "%0a"
    + "Email: " + email  + "%0a"
    + "Pedido: " + pedido;
    

    window.open(url, '_blank').focus();
}
