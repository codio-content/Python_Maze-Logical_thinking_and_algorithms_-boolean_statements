
energy = 9
steps = 10
message = ''

def showMessage(val):
  global message
  message = val

try:
  execfile('/home/codio/workspace/public/py/ch-2.py')
  
  keyPressedEvent('UP')
  if message.lower().strip() != 'vertical':
    raise ValueError("keyPressedEvent is not handling the 'UP' keyCode correctly")

  keyPressedEvent('DOWN')
  if message.lower().strip() != 'vertical':
    raise ValueError("keyPressedEvent is not handling the 'DOWN' keyCode correctly")

  keyPressedEvent('LEFT')
  if message.lower().strip() != 'horizontal':
    raise ValueError("keyPressedEvent is not handling the 'LEFT' keyCode correctly")

  keyPressedEvent('RIGHT')
  if message.lower().strip() != 'horizontal':
    raise ValueError("keyPressedEvent is not handling the 'RIGHT' keyCode correctly")

  keyPressedEvent('OTHER')
  if message.lower().strip() != 'another key was pressed':
    raise ValueError("keyPressedEvent is not handling other keyCodes correctly")
    
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
