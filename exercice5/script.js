typeof(15)
// Prediction:number
// Actual:15

typeof(5.5)
// Prediction:number
// Actual:5.5

typeof(NaN)
// Prediction:NaN est une valeur utilisée pour représenter une quantité qui n'est pas un nombre (Not a Number en).
// Actual:NaN

typeof("hello")
// Prediction:stri
// Actual:hello

typeof(true)
// Prediction:booléen
// Actual:true

typeof(1 != 2)
// Prediction:1 est différent de 2
// Actual:booléen

"hamburger" + "s"
// Prediction: c'est une concaténation
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:on ne peut pas concaténé une soustraction
// Actual:NaN

"1" + "3"
// Prediction: c'est la concaténation de 1 et 3
// Actual:1 3

"1" - "3"
// Prediction:on ne peut pas concaténé avec une soustraction
// Actual:NaN

"johnny" + 5
// Prediction:c'est la concaténation d'un élément string et un nombre
// Actual:johnny 5

"johnny" - 5
// Prediction:on ne peut pas concaténé avec une soustraction
// Actual:NaN

99 * "hello"
// Prediction:on ne peut pas multiplié un nombre et une chaine de caractére
// Actual:NaN

1 != 1
// Prediction:non 1 n'est différent de 2
// Actual:booléen

1 == "1"
// Prediction:non 1 n'est pas égale "1" car 1 est une chaine de caractére
// Actual:NaN

1 === "1"
// Prediction:non ils sont pas du meme type
// Actual:1