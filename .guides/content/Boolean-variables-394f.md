So far, we have dealt with number and string variables.

```python
message = 'Hello world!'
number = 100
```

We can also have a boolean variable type.

```python
showScore = true
isCloudyWeather = false
```

A boolean variable can have only two possibles `true` or `false`.

## Example Code
The code on the left shows the use of boolean variables in action.

1. We are creating a variable called `killPlayer` and setting it to false.
1. The first `if` statement asks "if `killPlayer == true` then set `energy` to 0".
1. Writing a variable name as we have done without the `== true` is simply shorthand. We could have written it in full.
1. The second `if` statement asks "if `killPlayer != true` then add 10 to the energy level".
1. Putting the `!` is the equivalent of saying 'Not', so it turns a `true` into a `false` or a `false` into a `true`.

## Change the Code
Go and change `killPlayer = false` to `killPlayer = true` and reload the game to see what happens. You will see that any action results in the energy being set to 0 and Game Over.