
keyPressedEvent  = null;

var fileName = window.location.origin + '/public/py/' + window.testEnv.cmd + '.py';

$.get(fileName)
.success(function(data) {

  if(data == 404) {
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, fileName + ' not found'); 
  }

  try {        
    createEmptyMaze();
    
    // load python
    var module = Sk.importMainWithBody("", false, data);

    // get reference to functions

    keyPressedEvent = module.tp$getattr('keyPressedEvent');
    
    // test

    var _left = false;
    var _right = false;
    var _up = false;
    var _down = false;
    var _another = false;

    if(typeof keyPressedEvent != 'undfined') {

      window.showMessage = function (val) {
        if(val.toLowerCase() == 'horizontal') _left = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('LEFT'));


      window.showMessage = function (val) {
        if(val.toLowerCase() == 'horizontal') _right = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('RIGHT'));


      window.showMessage = function (val) {
        if(val.toLowerCase() == 'vertical') _up = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('UP'));


      window.showMessage = function (val) {
        if(val.toLowerCase() == 'vertical') _down = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('DOWN'));


      window.showMessage = function (val) {
        if(val.toLowerCase() == 'another key was pressed') _another = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('C'));

      if(!_left || !_right || !_up || !_down || !_another) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }

    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    
  }
  catch(exception) {
    console.log('skulpt exception');
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.toString()); 
  }
})
.fail(function(jqxhr, settings, exception) {
  console.log('jqxhr fail');
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});    
