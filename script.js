function criptografar() {

    let btnCopiar = document.getElementById("copy-btn");
    let btnReset = document.getElementById("btn-reset");
    let texto = document.getElementById("texto").value;
    let tituloMenssagem = document.getElementById("titulo-menssagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");
    

    let textoCriptografado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

   

    if (texto.length != 0) {
        texto = textoCriptografado;
        tituloMenssagem.textContent = textoCriptografado;
        paragrafo.textContent = "";
        boneco.src = "https://raw.githubusercontent.com/ReneFarias/decodificador_one/main/img/cad_fechado.png";
    } else {
        boneco.src = "https://raw.githubusercontent.com/ReneFarias/decodificador_one/main/img/erro.jpg";
        tituloMenssagem.textContent = "Nenhuma menssagem foi encontrada para criptografar!";
        paragrafo.textContent = "👈Insira o texto que deseja criptografar";
        alert("Por favor, insira um texto para criptografar!");
        return textoCriptografado;
    }
    tituloMenssagem.value = textoCriptografado, btnCopiar.style.display='block';
    tituloMenssagem.value = textoCriptografado, btnReset.style.display='block';
}

function descriptografar() {
    let btnCopiar = document.getElementById("copy-btn");
    let btnReset = document.getElementById("btn-reset");
    let texto = document.getElementById("texto").value;
    let tituloMenssagem = document.getElementById("titulo-menssagem");

    let textoCriptografado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    if (texto.length != 0 ) {
        texto = textoCriptografado;
        tituloMenssagem.textContent = textoCriptografado;
        paragrafo.textContent = "";
        boneco.src = "https://raw.githubusercontent.com/ReneFarias/decodificador_one/main/img/cad_aberto.png";
    } else {
        boneco.src = "https://raw.githubusercontent.com/ReneFarias/decodificador_one/main/img/erro.jpg";
        tituloMenssagem.textContent = "Nenhuma menssagem foi encontrada para descriptografar!";
        paragrafo.textContent = "👈Insira o texto que deseja descriptografar.";
        alert("Por favor, inserira um texto para descriptografar!");
        return textoCriptografado;
    }
    tituloMenssagem.value = textoCriptografado, btnCopiar.style.display='block';
    tituloMenssagem.value = textoCriptografado, btnReset.style.display='block';
}
function copyToClickBoard(){
    
    var content = document.getElementById("titulo-menssagem").innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("✅Texto copiado para área de transferência...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}