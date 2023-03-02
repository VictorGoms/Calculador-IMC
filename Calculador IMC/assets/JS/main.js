const form = document.querySelector('.form');

form.addEventListener('submit' , function (evento){
    evento.preventDefault();
    const inputPeso= evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc=getImc(peso,altura);
    const classeImc= getClasseImc(imc);
    const msg = `Seu imc é ${imc} (${classeImc})`;
    setResultado(msg, true);

    
});

function getImc(peso,altura){
    const imc = peso/altura **2;
    return imc.toFixed(2);

}

function getClasseImc (imc){
    const classe = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9){
        return classe[5];
    }
    if(imc >= 34.9){
        return classe[4];
    }
    if(imc >= 29.9){
        return classe[3];
    }
     if(imc >= 24.9){
        return classe[2];
    }
    if(imc >= 18.5){
        return classe[1];
    }
    if (imc <18.5){
        return classe[0];
    }

}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, valido){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML='';

    

    const p = criaP();
    if(valido) 
    {p.classList.add('paragrafo-resultado');
    }
    else{
        p.classList.add('error');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
    
}