/* j'ai déclaré une variable */
const temperatureCelsius = 20;
/* j'ai déclaré une autre variable 
et de l'autre coté on va convertir en calculant pour avoir la variable que j'ai déclaré*/
const temperaturefahrenheit = temperatureCelsius*9/5+32;
/* u00b0 est le code pour avoir le 0 avant c ou le f
j'ai déclaré une autre variable dans laquel la valeur de la variable1 est la conversion de la variable 2*/
const conversion = temperatureCelsius+"\u00b0C"+" is "+temperaturefahrenheit+"\u00b0F";
console.log(conversion);
