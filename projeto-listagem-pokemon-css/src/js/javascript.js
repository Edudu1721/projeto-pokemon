const botaoAlterarTema = (document.getElementById("botao-alterar-tema"))

const body = (document.querySelector("body"))

const botaoTrocarDeTema = ( document.querySelector(".imagem-botao"))

botaoAlterarTema.addEventListener("click", ()=>{
    const modoescuroativo = body.classList.contains("modo-escuro")
    if (modoescuroativo){
        body.classList.remove("modo-escuro")
        botaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png")
    }else{
    body.classList.add("modo-escuro")
    botaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
})