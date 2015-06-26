|||definition
In Python, `and`, `or` and `not` are known as *logical operators*
|||

## AND - the `and` operator
Consider this expression

```python
if getEnergy() < 10 and getSteps() > 20:
  showMessage('Hmm looks like you are struggling?')
```

Python will process the code as listed in the steps below. 

Assume `energy = 5`, `steps = 10`.

1. `(getEnergy() < 10) and (getSteps() > 20)`
1. Is processed as `(5 < 10) and (10 > 20)`
1. Which is `(true) and (false)`
1. And the final result is `(false)`, so the overall condition is `false` and the message will not be shown.

## OR - the `or` operator
Consider the following code

```python
if type == 'energy' || type == 'monster':
  playSound('bump')
```

Python will process the code as listed in the steps below. 

Assume `type = 'monster'`.

1. `(type == 'energy') or (type == 'monster')`
1. Is processed as `('monster' == 'energy') or ('monster' == 'monster')`
1. Which is `(false) or (true)`
1. And the final result is `(true)`, so the overall condition is `true` and so the bump sound will play.
