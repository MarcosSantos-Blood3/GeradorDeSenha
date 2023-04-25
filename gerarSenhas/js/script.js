
function gerar(){
    
    //Guardando os input em uma variavel
    
    let tamanhoDaSenha = document.getElementById('tamanhoDasSenhas').value
    let numeroDeSenha = document.getElementById('numeroDeSenhas').value

    //Guardando as checkbox em variaveis

    let incluirEspecial = document.getElementById('incluirCaracterEspecial').checked
    let incluirNumeros = document.getElementById('incluirNumeros').checked
    let incluirMaiusculas = document.getElementById('incluirMaiusculas').checked

    //Caracteres basicos para a senha
    let char = 'abcdefghijklmnopqrtsuvwxyz'
    
    //Variavel que guarda a senha
  


    //Condições que verificam e adicionam mais possibilidades as senhas geradas.
    
    if(incluirEspecial){
      char =  char + '!@#$%&*'
    }
    if(incluirMaiusculas){
        char = char + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(incluirNumeros){
        char = char + '1234567890'
    }


    //Sistema de repetição para gerar varias senhas aleatórias

    for ( let i = 0; i < numeroDeSenha; i++){
        let senha = '' 
        for(let i = 0; i < tamanhoDaSenha;i++){
            
            var aleatorio = Math.floor(Math.random()* char.length )
            senha += char.substring(aleatorio,aleatorio + 1)
        }
       
        document.getElementById('resultado').value += senha + '\n'

    }

}

function limpar(){

    //  Pegando o valor de dentro das Input e zerando elas
    document.getElementById('tamanhoDasSenhas').value = '';
    document.getElementById('numeroDeSenhas').value = '';
    

    //  Pegando o valor True Or False da check box e definindo como false
    document.getElementById('incluirCaracterEspecial').checked = false;
    document.getElementById('incluirNumeros').checked = false;
    document.getElementById('incluirMaiusculas').checked = false;

    // Pegando o resultado das senhas geradas e limpando elas
    document.getElementById('resultado').value = ''
}