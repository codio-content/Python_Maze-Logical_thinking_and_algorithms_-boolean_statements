
{Check It!|assessment}(test-1395794614)

|||guidance
# Solution 1
```python
def keyPressedEvent(keyCode):

  if keyCode == 'A':
    if getDownAllowed():
      setDownAllowed(False)
    else:
      setDownAllowed(True)
  
  if getDownAllowed() and keyCode == 'DOWN':
    moveDown()
```

# Best Solution
```python
def keyPressedEvent(keyCode):

  if keyCode == 'A':
    allowed = getDownAllowed()
    setDownAllowed(not allowed)
  
  if getDownAllowed() and keyCode == 'DOWN':
    moveDown()
```

|||
