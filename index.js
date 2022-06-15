$("button").on("click", function(){
   var lol= $(this).attr("id")
   playsound(lol)
})
$(document).on("keypress", function(event){
   var lol= String.fromCharCode(event.which)
   switch (lol) {
      case 'w':
         var son=new Audio("sounds/tom1.mp3") 
         son.play()
         
         break;
         case 'a':
            var son=new Audio("sounds/tom2.mp3") 
            son.play()
            
            break;
            case 's':
               var son=new Audio("sounds/tom3.mp3") 
               son.play()
               
               break;
               case 'd':
                  var son=new Audio("sounds/tom4.mp3") 
                  son.play()
                  
                  break;
                  case 'j':
                     var son=new Audio("sounds/crash.mp3") 
                     son.play()
                     
                     break;
                     case 'k':
                        var son=new Audio("sounds/kick.mp3") 
                        son.play()
                        
                        break;
                        case 'l':
                           var son=new Audio("sounds/snare.mp3") 
                           son.play()
                           
                           break;
   
      default:
         break;
   }
})
function playsound(name){
   var sound= new Audio("sounds/"+name+".mp3")
   sound.play()
}