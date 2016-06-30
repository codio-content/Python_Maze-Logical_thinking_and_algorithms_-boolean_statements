
allowed = False
down = False

def setDownAllowed (val):
  global allowed
  allowed = val

def getDownAllowed():
  global allowed
  return allowed

def showMessage(val):
  pass

def moveDown():
  global down
  down = True
  
try:
  execfile('/home/codio/workspace/public/py/ch-4.py')
  
  keyPressedEvent('A')
  keyPressedEvent('DOWN')

  if not down:
    raise ValueError("Error: incorrect behaviour for when down should be allowed")

  down = False
  allowed = False
  keyPressedEvent('DOWN')

  if down:
    raise ValueError("Error: incorrect behaviour for when down should not be allowed")
  
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
