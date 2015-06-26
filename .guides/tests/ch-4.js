
keyPressedEvent  = null;
window.allowDown = false;


var fileName = window.location.origin + '/public/py/' + window.testEnv.cmd + '.py';

$.get(fileName)
.success(function(data) {

  if(data == 404) {
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, fileName + ' not found'); 
  }

  try {        

    window.downAllowd = false;

    Sk.builtins['getDownAllowed'] = Sk.builtin.getDownAllowed = new Sk.builtin.func(function () {
      return window.downAllowd ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
    });

    Sk.builtins['setDownAllowed'] = Sk.builtin.setDownAllowed = new Sk.builtin.func(function (val) {
      val = val ? val.v : val;
      window.downAllowd = val;
      return Sk.builtin.none.none$;
    });
    
    // load python
    var module = Sk.importMainWithBody("", false, data);

    // get reference to functions

    keyPressedEvent = module.tp$getattr('keyPressedEvent');
    
    // test
    createRandomMaze();

    var _down = false;
         
    if(typeof keyPressedEvent != 'undefined') {

      player.moveDown = function () {
        _down = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('DOWN'));

      if(_down) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }
      
      _down = false;
      window.downAllowd = false;

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('A'));
      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('DOWN'));
      
      console.log(window.downAllowd);
      console.log(_down);
      
      if(!window.downAllowd || !_down) {
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
