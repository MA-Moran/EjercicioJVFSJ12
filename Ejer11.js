// Si la puntuación es mayor o igual a 60 puntos, la salida se "pasa". Si la puntuación es inferior a 60, el resultado es "no calificado".
//

var score = 75;         
            
    switch(true){
        case score >= 60 && score <=100:
                 console.log ("Calificado");
            break;
        case score < 60 && score >=0:
                  console.log ("No calificado");
            break;
    default:
              console.log ("Ilegal");
            break;
            }
