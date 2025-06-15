const elo = ["FERRO" , "BRONZE" , "PRATA", "OURO", "DIAMANTE", "LENDÁRIO", "IMORTAL"]
 
 let resultado = level(100, 14)

function level (v, d){
	let rank = v - d 
    return rank
   }
 
  console.log("O valor do resultado é: "+resultado);
  console.log(" Está no Elo: "+calcularElo(resultado));
    
  function calcularElo(resultado){
	let nivel;  
    switch(true) { 
     case (resultado <= 10 ):
    	nivel = elo[0];
    	break;
     case (resultado <= 20 ):
    	nivel = elo[1];
    	break;
     case (resultado <= 50 ):
    	nivel = elo[2];
    	break;
     case (resultado <= 80 ):
    	nivel = elo[3];
    	break;
     case (resultado <= 90 ):
    	nivel = elo[4];
    	break;
     case (resultado <= 100 ):
    	nivel = elo[5];
	    break;    
     defaul: 
    	nivel = elo[6];
    }
  return nivel;
  }