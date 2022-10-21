// Deffinition de variables constante qui va recupérer les éléments du doc index.html par leurs id.
    // Ici on recupère les éléments day, month et year.
const day_element= document.getElementById('day'),
    month_element = document.getElementById('month'),
    year_element = document.getElementById('year');
    // Ici on recupère les élémets hour et minute.
const hour_element = document.getElementById('hour'),
    minute_element = document.getElementById('minute');

// Fonction qui va gèrer le dynamisme de la page.
function timeAnimation(){
    // Creation de l'objet date.
    let date = new Date();
// _____ Il est à noté que .get est une méthode de class qui permet d'obtenir la valeur rétourner de l'éxterieur de la class __________
    let day = date.getDate();
    // +1 car 'getMonth' retourne toujours le moin - 1.
    let month = (date.getMonth() + 1);
    // def et affectaion de la variable avec le format reduit de l'année --> output : 22.
    let year = date.getFullYear().toString().slice('2');
    let hour = date.getHours();
    let minute = date.getMinutes();

// Ce-ci est pour évité l'affichage : 1 au lieux de 01
    if(day < 10) day = `0${ day }`;
    if(month < 10) month = `0${ month }`;
    if(hour < 10) hour = `0${ hour }`;
    if(minute < 10) minute = `0${ minute }`;

// Utilisation de la methode 'innerText' pour insérer le doc .html la valeur de : day, month, year, hour, minute
    // Ce-ci va contribuer au dynamisme de la page en mettant à jours de manière continuel l'affichage de la page
    day_element.innerText = day;
    month_element.innerText = month;
    year_element.innerText = year;
    hour_element.innerText = hour;
    minute_element.innerText = minute;
}
// Fonction prédéfini de js qui fais appel à une fonction mis en argument en indiquand le temps en ms
setInterval(timeAnimation, 1000);

