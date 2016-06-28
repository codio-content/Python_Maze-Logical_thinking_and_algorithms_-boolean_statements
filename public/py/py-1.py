
def turnTaken():

  killPlayer = False
  
  if killPlayer:
    setEnergy(0)
  if not killPlayer:
    energy = getEnergy() + 10
    setEnergy(energy)
