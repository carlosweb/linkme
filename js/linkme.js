function enviar (){
    var emailValue = document.getElementById('emailtxt').value
    var areaValue = document.getElementById('areatxt').value
    var timestamp = new Date().getTime()
    // a variavel database vai receber as funções de acesso ao banco de dados
    var database = firebase.database()
    

    if (emailValue == 0 || areaValue == 0) {
        alert('Preecha os dados abaixo!')
    } else if (emailValue == '' || areaValue == '') {
        alert('Preecha os dados abaixo!')
    } else {
        database.ref(timestamp).set({
            email: emailValue,
            mensagem: areaValue
        })
        alert('Sua mensagem foi enviada com sucesso!')
    }
}
