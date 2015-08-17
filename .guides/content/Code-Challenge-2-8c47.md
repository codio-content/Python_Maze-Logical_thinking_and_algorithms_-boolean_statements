
{Check It!|assessment}(test-2471758565)

|||guidance
## Solution

```python
def keyPressedEvent(keyCode):
  if keyCode == 'LEFT' or keyCode == 'RIGHT':
    showMessage('Horizontal')
  elif keyCode == 'UP' or keyCode == 'DOWN':
    showMessage('Vertical')
  else:
    showMessage('Another key was pressed')
```
|||
