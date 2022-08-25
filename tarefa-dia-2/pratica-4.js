let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if(produtoA["internacional"] == true){
    produtoA.valor *= 1.2;
    console.log(produtoA.valor);
}else {
    produtoA.valor *= 1.12
    console.log(produtoA.valor)
}

if(produtoB.internacional == true){
    produtoB.valor *= 1.2
    console.log(produtoB.valor)
}else {
    produtoB.valor *= 1.12
    console.log(produtoB.valor)
}
if(produtoC.internacional == true){
    produtoC.valor *= 1.2
    console.log(produtoC.valor)
}else {
    produtoC.valor *= 1.12
    console.log(produtoC.valor)
}