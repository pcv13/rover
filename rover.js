var Rover = {
  position: [0,0],
  direction:""
}
var m=1;
var d = prompt().toUpperCase()
function as(){
  switch(Rover.direction) {
    case 'N':{
    if(Rover.position[0]<10)
      Rover.position[0]++
      else {
        console.log("invalid position");
      }
    }
      break;
    case 'E':
    if(Rover.position[1]<10)
      Rover.position[1]++
      else
        console.log("invalid position");
      break;
    case 'S':
    if(Rover.position[0]>0)
      Rover.position[0]--
      else
        console.log("invalid position");
      break;
    case 'W':
      if(Rover.position[0]>0)
      Rover.position[1]--
      else
        console.log("invalid position");
      break;


  };
}


function goForward() {

if(m==1){
    Rover.direction='N';
    console.log(m);
    as();
      }
      else if (m==2) {
        Rover.direction='E';
          console.log(m);
          as()
      }
      else if (m==3) {
        Rover.direction='S';
          console.log(m);
          as()
      }
      else if (m==4) {
        Rover.direction='W';
          console.log(m);
          as()
      }
}
    function goBack(){
  if(m==1){
      Rover.direction='S';
        console.log(m);
        as()
        }
        else if (m==2) {
          Rover.direction='W';
          as()
        }
        else if (m==3) {
          Rover.direction='N';
          as()
        }
        else if (m==4) {
          Rover.direction='E';
          as()
        }
      }

    function  goLeft(){
      if (m==1) {
        m=4;
      }
      else {
      --m;
      }
}


    function  goRight(){
      if(m==4)
      m=1;
      else {
      ++m;
      }
}


function go()
{
  for (var i = 0; i < d.length; i++)
  {
    console.log(d.charAt(i))
    Rover.direction=d.charAt(i);
    switch (Rover.direction)
    {
    case 'F':
      goForward()
      break;
      case 'B':goBack()
      break;
      case 'L':goLeft()
      break;
      case 'R':goRight()
    default:

    }
  }
}
go();
console.log("New Rover Position: [" + Rover.position[0] + ", " + Rover.position[1] + "]")
