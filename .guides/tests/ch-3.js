
keyPressedEvent  = null;
window.allowOtherKeys = true;

var fileName = window.location.origin + '/public/py/' + window.testEnv.cmd + '.py';

$.get(fileName)
.success(function(data) {

  if(data == 404) {
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, fileName + ' not found'); 
  }

  try {
    
    Sk.builtins['getOtherKeysAllowd'] = Sk.builtin.getOtherKeysAllowd = new Sk.builtin.func(function () {
      return Sk.builtin.bool.true$;
    });

    Sk.builtins['setOtherKeysAllowd'] = Sk.builtin.setOtherKeysAllowd = new Sk.builtin.func(function () {
      // do nothing
      return Sk.builtin.none.none$;
    });

    createRandomMaze();
    
    // load python
    var module = Sk.importMainWithBody("", false, data);

    // get reference to functions

    keyPressedEvent = module.tp$getattr('keyPressedEvent');
    
    // test
 
    var _left = false;
    var _right = false;
    var _up = false;
    var _down = false;

    if(typeof keyPressedEvent != 'undefined') {

      player.moveLeft = function () {
        _left = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('A'));


      player.moveRight = function () {
        _right = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('D'));


      player.moveUp = function () {
        _up = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('W'));


      player.moveDown = function () {
        _down = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('S'));


      if(!_left || !_right || !_up || !_down) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }
      
      _left = false;
      _right = false;
      _up = false;
      _down = false;

      Sk.builtins['getOtherKeysAllowd'] = Sk.builtin.getOtherKeysAllowd = new Sk.builtin.func(function () {
      return Sk.builtin.bool.false$;
    });

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('A'));
      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('D'));
      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('W'));
      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('S'));

      console.log(_left)
      console.log(_right)
      console.log(_up)
      console.log(_down)

      
      if(_left || _right || _up || _down) {
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
