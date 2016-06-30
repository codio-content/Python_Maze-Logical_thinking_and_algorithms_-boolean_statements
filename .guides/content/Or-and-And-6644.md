In the real world, questions are not always as simple as that. We often need to ask questions like

## AND `and`

*"If energy is less than 10 **and** steps taken is greater than 20, then tell user the score is not going to be good"*

```python
if getEnergy() < 10 and steps > 20:
  showMessage('Your score is not going to be good')
```

## OR `or`

*"If the object you just hit is a monster **or** an energy store then play a sound"*

```python
if type == 'monster' or type == 'energy':
  playSound('bump')
```
