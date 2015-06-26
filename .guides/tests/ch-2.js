
keyPressedEvent  = null;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createEmptyMaze();
    
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
  var _another = false;
  
  if(typeof keyPressedEvent  == 'function') {
    
    window.showMessage = function (val) {
      if(val.toLowerCase() == 'horizontal') _left = true;
    }

    keyPressedEvent('LEFT');


    window.showMessage = function (val) {
      if(val.toLowerCase() == 'horizontal') _right = true;
    }

    keyPressedEvent('RIGHT');
    

    window.showMessage = function (val) {
      if(val.toLowerCase() == 'vertical') _up = true;
    }

    keyPressedEvent('UP');

    
    window.showMessage = function (val) {
      if(val.toLowerCase() == 'vertical') _down = true;
    }

    keyPressedEvent('DOWN');


    window.showMessage = function (val) {
      if(val.toLowerCase() == 'another key was pressed') _another = true;
    }

    keyPressedEvent('C');

    
    if(!_left || !_right || !_up || !_down || !_another) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    

})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});