function scuberGreetingForFeet(someValue) {
  // Write your code here!
  let result;
  if (someValue <= 400) {
    result = 'This one is on me!'
  }
  else if (someValue < 2000) {
    result = 'That will be twenty bucks.'
  }


  else if (someValue > 2500) {
    result = 'No can do.'

  }
  else if (someValue > 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
  return result


}
scuberGreetingForFeet()


function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';


}
ternaryCheckCity()

function switchOnCharmFromTip(n) {
  // Write your code here!



  switch (n) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;

    default:
      return 'Bye.';
      break;
  }
}
switchOnCharmFromTip()