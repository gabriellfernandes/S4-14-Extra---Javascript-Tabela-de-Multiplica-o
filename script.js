// Se preferir, utilize o script em um arquivo .js separado.
function tabuada(){ // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // todo: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for(let p = 0; p <= 10; p++){
            x[i].push(i * p)
        }
    }
    
    console.table(x)
}

tabuada()


//bonus :3
function tabuadaBonus(o){ // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // todo: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= o; i++) {
        x[i] = [];
        for(let p = 0; p <= o; p++){
            x[i].push(i * p)
        }
    }
    console.table(x)
}

tabuadaBonus(3)