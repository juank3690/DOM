

let play=document.getElementById("benviar");

let intro =document.getElementById("intro");
let victoria=document.getElementById("victoria");
let vict=document.getElementById("vict");



play.addEventListener('click',function(){
    intro.style.display="none";

   

    var numeroPeleas = document.getElementById('batallas').value;

    var piedra=document.getElementById("piedra");
    var papel=document.getElementById("papel");
    var tijera=document.getElementById("tijera");

    var piedram=document.getElementById("piedram");
    var papelm=document.getElementById("papelm");
    var tijeram=document.getElementById("tijeram");

    var punt_prog=document.getElementById("punt_prog");
    var punt_usua=document.getElementById("punt_usua");
    var punts=document.getElementById("punts");

    var final=document.getElementById("final");

   

    function parada(){
        intro.style.display="flex";  
        let menu=document.getElementById("menu");
        menu.style.display="none";
        victoria.style.display="flex";
        victoria,style.zIndex="200";
        if(parseInt(punt_prog) > parseInt(punt_usua)){
            vict.textContent="Programa";
        }
        if(parseInt(punt_prog) < parseInt(punt_usua)){
            vict.textContent="Usuario";
        }
        if(parseInt(punt_prog) == parseInt(punt_usua)){
            vict.textContent="Empate";
        }
    }


    /*
    let valor=parseInt(mganado.textContent)
        valor++;
        valor.toString;
        mganado.textContent=valor;
        console.log(mganado.textContent);
    */
    
    
    
    
        
      piedra.addEventListener('click',function(){
        if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
            parada();
        }
        
        valorm=Math.floor(Math.random()*3);
        

            
        if(valorm==0){
            piedram.style.transform = "scale(1.5)";
            piedram.style.border = "5px solid #a46424";
            piedram.style.zIndex="5";
            setTimeout(function(){
            piedram.style.transform = "scale(1.0)";
            piedram.style.border = "none";
            }, 2000);
            punts.textContent="Nadie";

             //final
             let val=parseInt(final.textContent);
             val++;
             val.toString;
             final.textContent=val;
             console.log(final.textContent);
             

    
        }
        if(valorm==1){
            if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
                parada();
            }
            papelm.style.transform = "scale(1.5)";
            papelm.style.border = "5px solid #ecec53";
            papelm.style.zIndex="5";
            setTimeout(function(){
                papelm.style.transform = "scale(1.0)";
                papelm.style.border = "none";
                papelm.style.zIndex="1";
            }, 2000);
            let valor=parseInt(punt_prog.textContent)
            valor++;
            valor.toString;
            punt_prog.textContent=valor;
            punts.textContent="Programa";

            //final
            let val=parseInt(final.textContent);
            val++;
            val.toString;
            final.textContent=val;
            console.log(final.textContent);
            
            
        }
        if(valorm==2){
            if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
                parada();
            }
            
            tijeram.style.transform = "scale(1.5)";
            tijeram.style.border = "5px solid #5353ec";
            tijeram.style.zIndex="5";
            setTimeout(function(){
            tijeram.style.transform = "scale(1.0)";
            tijeram.style.border = "none";
            tijeram.style.zIndex="1";
            }, 2000);
            
            let valor=parseInt(punt_usua.textContent);
            valor++;
            valor.toString;
            punt_usua.textContent=valor;
            punts.textContent="Usuario";

             //final
             let val=parseInt(final.textContent)
             val++;
             val.toString;
             final.textContent=val;
             console.log(final.textContent);
        }

      })  
      //----------------

      papel.addEventListener('click',function(){
        if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
            parada();
        }
        valorm=Math.floor(Math.random()*3);
        if(valorm==0){
            
            piedram.style.transform = "scale(1.5)";
            piedram.style.border = "5px solid #a46424";
            piedram.style.zIndex="5";
            setTimeout(function(){
            piedram.style.transform = "scale(1.0)";
            piedram.style.border = "none";
            piedram.style.zIndex="1";
            }, 2000);
            let valor=parseInt(punt_usua.textContent)
            valor++;
            valor.toString;
            punt_usua.textContent=valor;
            punts.textContent="Usuario";
             //final
             let val=parseInt(final.textContent);
             val++;
             val.toString;
             final.textContent=val;
             console.log(final.textContent);
        }
        if(valorm==1){
            if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
                parada();
            }
            
            papelm.style.transform = "scale(1.5)";
            papelm.style.border = "5px solid #ecec53";
            papelm.style.zIndex="5";
            setTimeout(function(){
            papelm.style.transform = "scale(1.0)";
            papelm.style.border = "none";
            papelm.style.zIndex="1";
            }, 2000);
            punts.textContent="Nadie";
             //final
             let val=parseInt(final.textContent);
             val++;
             val.toString;
             final.textContent=val;
             console.log(final.textContent);
        }
        if(valorm==2){
            if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
                parada();
            }
            tijeram.style.transform = "scale(1.5)";
            tijeram.style.border = "5px solid #5353ec";
            tijeram.style.zIndex="5";
            setTimeout(function(){
            tijeram.style.transform = "scale(1.0)";
            tijeram.style.border = "none";
            tijeram.style.zIndex="1";
            }, 2000);
            let valor=parseInt(punt_prog.textContent)
            valor++;
            valor.toString;
            punt_prog.textContent=valor;
            punts.textContent="Programa";
             //final
             let val=parseInt(final.textContent);
             val++;
             val.toString;
             final.textContent=val;
             console.log(final.textContent);
        }

      })  
      //-----------------
      
      tijera.addEventListener('click',function(){
        if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
            parada();
        }
        
        valorm=Math.floor(Math.random()*3);
        if(valorm==0){
            piedram.style.transform = "scale(1.5)";
            piedram.style.border = "5px solid #a46424";
            piedram.style.zIndex="5";
            setTimeout(function(){
                piedram.style.transform = "scale(1.0)";
                piedram.style.border = "none";
                piedram.style.zIndex="1";
            }, 2000);
            let valor=parseInt(punt_prog.textContent);
            valor++;
            valor.toString;
            punt_prog.textContent=valor;
            punts.textContent="Programa";
             //final
            let val=parseInt(final.textContent);
            val++;
            val.toString;
            final.textContent=val;
            console.log(final.textContent);
        }
        if(valorm==1){
            if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
                parada();
            }
            papelm.style.transform = "scale(1.5)";
            papelm.style.border = "5px solid #ecec53";
            papelm.style.zIndex="5";
            setTimeout(function(){
                papelm.style.transform = "scale(1.0)";
            papelm.style.border = "none";
            papelm.style.zIndex="1";
            }, 2000);
            
            let valor=parseInt(punt_usua.textContent);
            valor++;
            valor.toString;
            punt_usua.textContent=valor;
            punts.textContent="Usuario";
             //final
             let val=parseInt(final.textContent);
             val++;
             val.toString;
             final.textContent=val;
             console.log(final.textContent);
        }
        if(valorm==2){
            if(parseInt(final.textContent)==parseInt(numeroPeleas-1)){
                parada();
            }
            tijeram.style.transform = "scale(1.5)";
            tijeram.style.border = "5px solid #5353ec";
            tijeram.style.zIndex="5";
            setTimeout(function(){
                tijeram.style.transform = "scale(1.0)";
            tijeram.style.border = "none";
            tijeram.style.zIndex="1";
            }, 2000);
            punts.textContent="Nadie";
             //final
             let val=parseInt(final.textContent);
             val++;
             val.toString;
             final.textContent=val;
             console.log(final.textContent);
        }

      })  


    
        



     

     


})

