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
