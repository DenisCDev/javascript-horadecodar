var programador = {
    nome: "Denis",
    idade: 18,
    stack: "JavaScript e Java",
    fullstack: true,
    empresa: null
};

console.log(programador);
console.log(typeof programador);
console.log(programador.idade);

console.log("Meu nome é " + programador.nome);

programador.stack = "JS, Java, React, Node, Typescript, Next e Spring Boot";

console.log(programador.stack);

programador.instagram = "@denis.desenvolvedor";
console.log(programador);
console.log(programador.instagram);