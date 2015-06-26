def keyPressedEvent(keyCode):
  
  if keyCode == 'A':
    showMessage('do something here')

  if getDownAllowed() and keyCode == 'DOWN':
    moveDown()
