|||challenge
We want you to implement a special keyboard handler but only if a boolean variable called `allowOtherKeys` is set to be `True`.

We've provided you some code already. You need to 

- Call the command `setOtherKeysAllowd(True)` 
- Insert an `if` statement that checks whether it `getOtherKeysAllowd()` is True
- If it is True, then the keyboard handler should run so the 'A' moves the player left, 'D' moves right, 'W' up and 'S' down. You should insert the correct keyboard characters as upper case letters.

You will end up with an `if` within another `if` (a nested `if` statement). The nests `if` statment code block needs be indented a further 2 spaces. You can do this quickly by highlighting multiple lines of code and then pressing the TAB key to indent or Shift+TAB to outdent.

{check it!!|custom}(ch-3)

|||


|||guidance
## Solution
```python
def keyPressedEvent(keyCode):
  setOtherKeysAllowd(True)
  
  if getOtherKeysAllowd():
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