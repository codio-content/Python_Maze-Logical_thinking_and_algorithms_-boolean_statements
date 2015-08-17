
allowed = False
left = False
right = False
up = False
down = False

def setOtherKeysAllowed(val):
  pass

def getOtherKeysAllowed():
  global allowed
  return allowed
  
def moveLeft():
  global left
  left = True

def moveRight():
  global right
  right = True

def moveUp():
  global up
  up = True

def moveDown():
  global down
  down = True
  
try:
  execfile('/home/codio/workspace/public/py/ch-3.py')
  
  keyPressedEvent('A')
  keyPressedEvent('D')
  keyPressedEvent('W')
  keyPressedEvent('S')
  
  if left or right or up or down:
    raise ValueError("Error: incorrect behaviour when other keys are allowed")

  left = False
  right = False
  up = False
  down = False
  allowed = True
  keyPressedEvent('A')
  keyPressedEvent('D')
  keyPressedEvent('W')
  keyPressedEvent('S')
    
  if not left or not right or not up or not down:
    raise ValueError("Error: incorrect behaviour when other keys are not allowed")  
  
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
