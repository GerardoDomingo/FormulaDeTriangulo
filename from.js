function area(){
    let l1=parseFloat(document.getElementById('l1').value);
    let l2=parseFloat(document.getElementById('l2').value);
    let l3=parseFloat(document.getElementById('l3').value);
    if (l1 + l2 > l3 || l1+l3> l2 || l3 +l2 >l1){
        let resultado= (l1 +l2 + l3)* 0.5;
        var result= Math.sqrt(resultado*(resultado-l1)*(resultado-l2)*(resultado-l3))
        document.getElementById('RA').value=result;
    }
}
function perimetro(){
    let l1=parseFloat(document.getElementById('l1').value);
    let l2=parseFloat(document.getElementById('l2').value);
    let l3=parseFloat(document.getElementById('l3').value);
    let resultado=(l1+l2+l3);
    document.getElementById('RP').value=resultado;
}
function tipo(){
    let l1=parseFloat(document.getElementById('l1').value);
    let l2=parseFloat(document.getElementById('l2').value);
    let l3=parseFloat(document.getElementById('l3').value);
    if (l1==l2 || l2==l3 || l3==l1){
        resultado="Triangulo equilatero"
    }
    else if (l1==l2 || l1==l3 || l2==l3){
        resultado="Triangulo isoceles"
    }
    else{
        resultado="Triangulo escaleno"
    }
    document.getElementById('RT').value=resultado;

}