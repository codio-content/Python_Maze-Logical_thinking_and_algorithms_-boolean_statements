
{Check It!|assessment}(test-3596558921)

|||guidance
## Solution
```python
def keyPressedEvent(keyCode):
  setOtherKeysAllowed(True)
  
  if getOtherKeysAllowed():
    if keyCode == 'A':
      moveLeft()
    if keyCode == 'D':
      moveRight()
    if keyCode == 'W':
      moveUp()
    if keyCode == 'S':
      moveDown()
```
|||
