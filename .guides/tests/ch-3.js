
keyPressedEvent  = null;
window.allowOtherKeys = true;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createRandomMaze();
    
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
  
  window.allowOtherKeys = true;
  
  if(typeof keyPressedEvent  == 'function') {

    Object.defineProperty(window, "allowOtherKeys", { 
      set: function (val) { },
      get: function () { return true } 
    });
    
    
    player.moveLeft = function () {
      _left = true;
    }

    keyPressedEvent('A');


    player.moveRight = function () {
      _right = true;
    }

    keyPressedEvent('D');


    player.moveUp = function () {
      _up = true;
    }

    keyPressedEvent('W');


    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('S');
        
    
    if(!_left || !_right || !_up || !_down) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
    
    _left = false;
    _right = false;
    _up = false;
    _down = false;
        
    Object.defineProperty(window, "allowOtherKeys", { 
      set: function (val) { },
      get: function () { return false } 
    });
    
    keyPressedEvent('A');
    keyPressedEvent('D');
    keyPressedEvent('W');
    keyPressedEvent('S');


    if(_left || _right || _up || _down) {
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