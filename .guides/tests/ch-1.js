
turnTaken = null;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createEmptyMaze();
    
  var _well = false;
  var _ok = false;
  
  if(typeof turnTaken == 'function') {
    energy = 9;
    steps = 10;
    
    window.showMessage = function (val) {
      if(val.toLowerCase() == 'not going well') _well = true;
    }

    turnTaken();

    energy = 10;
    steps = 10;

    window.showMessage = function (val) {
      if(val.toLowerCase() == 'going ok') _ok = true;
    }
    
    turnTaken();
    
    if(!_well || !_ok) {
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