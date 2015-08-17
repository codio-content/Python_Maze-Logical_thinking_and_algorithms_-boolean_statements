
energy = 9
steps = 10
message = ''

def showMessage(val):
  global message
  message = val

def getEnergy():
  global energy
  return energy
  
def getSteps():
  global steps
  return steps

try:
  execfile('/home/codio/workspace/public/py/ch-1.py')
  
  turnTaken()
  if message.lower().strip() != 'not going well':
    raise ValueError("turnTaken is not showing the 'Not going well' message for the correct scenarios")

  energy = 10
  turnTaken()
  if message.lower().strip() != 'going ok':
    raise ValueError("turnTaken is not handling the scenario where energy is greater than equal to 10")
  
  energy = 9
  steps = 9
  turnTaken()
  if message.lower().strip() != 'going ok':
    raise ValueError("turnTaken is not handling the scenario where steps is less than 10")
  
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
