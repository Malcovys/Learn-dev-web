function calcul() {
    let first_element = document.getElementById('number1').value,
        second_elemet = document.getElementById('number2').value;
    let operator_element = document.getElementById('operator').value;
    
    if(operator_element == '+') resultat = parseFloat(first_element) + parseFloat(second_elemet);
    else if (operator_element == '-') resultat = parseFloat(first_element) - parseFloat(second_elemet);
    else if(operator_element == '*') resultat = parseFloat(first_element) * parseFloat(second_elemet);
    else if(operator_element == '/') resultat = parseFloat(first_element) / parseFloat(second_elemet);

    document.getElementById('resultat').value = resultat;
}