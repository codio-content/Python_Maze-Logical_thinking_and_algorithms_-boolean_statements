|||challenge
The code on the left stops the down arrow key from working unless the user first presses the A key. However, it does not yet work!

Write some code within the first `if` statement that calls the `setDownAllowed(val)` command with either `True` or `False` if the 'A' key is pressed so that the down arrow key then works.

You get extra marks if pressing it again stops `if` from working. Each time you press the A it 'toggles' between the arrow working and not working.

**Hint** you can change the value of a boolean to `False` when `True` or `True` when `False` using `boolVar = not boolVar`.

{check it!!|custom}(ch-4)

|||

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
