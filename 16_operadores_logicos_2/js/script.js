let funcionario = "Matheus";
let dono = "David";

if(funcionario == "Matheus" || dono == "David") {
    console.log("Bem vindo de volta a empresa");
} else {
    console.log("Não achamos seu registro no sistema");
}

if(funcionario == "Matheus" && 1>100 || dono == "David") {
    console.log("A parte da esquerda do OR retorna false mas a direita true e como é OR esse if vira true");
}