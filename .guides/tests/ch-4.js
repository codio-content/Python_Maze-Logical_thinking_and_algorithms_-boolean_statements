
keyPressedEvent  = null;
window.allowDown = false;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createRandomMaze();
    
  var _down = false;
  
  if(typeof keyPressedEvent  == 'function') {

    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('DOWN');
        
    if(_down) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
    
    _down = false;
    allowDown = false;

    keyPressedEvent('A');
    keyPressedEvent('DOWN');

    if(!allowDown || !_down) {
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