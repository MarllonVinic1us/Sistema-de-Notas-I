let nota = 0;
let notas = [];
let total = 0;
let media = 0;
let tamanho = 0;
let a = 1;
let b = 1;

nota = parseFloat(prompt(`Digite a nota ${a++}`));

while(nota >= 0){

    notas.push(nota);
    nota = parseFloat(prompt(`Digite a nota ${a++}`));


}

tamanho = notas.length;


for(let m of notas){


    total += m;
}

media = total/tamanho;
document.write(`Média da Turma: ${media.toFixed(1)} <br><br>`);

for(let n of notas){
    
    if(n >= 6){
        
        document.write(`Nota ${b++}: ${n.toFixed(1)}; Situação: Aprovado(a)<br>`); 

    }else if(n >= 2 && n < 6){

        document.write(`Nota ${b++}: ${n.toFixed(1)}; Situação: Recuperação Final<br>`); 

    }else{

        document.write(`Nota ${b++}: ${n.toFixed(1)}; Situação: Reprovado(a)<br>`); 

    }

} 
    




