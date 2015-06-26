def keyPressedEvent(keyCode):
  
  if keyCode == 'A':
    showMessage('do something here')

  if allowDown and keyCode == 'DOWN':
    moveDown()
