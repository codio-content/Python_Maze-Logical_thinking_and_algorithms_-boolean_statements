Here we go with another term that is designed to confuse until you realize it is a useful catch-all term for a condition or value that can be either **true** or **false**.

We've already been working with boolean conditions in fact. 

> If your energy is less than 10 ...

Let's look at this in Python

```python
if getEnergy() < 10:
  showMessage('You are low on energy')
```

Let's look at some examples. Study these until you feel comfortable with them. We need them a lot. 

Remember `==` (equals), `!=` (not equals), `<` (less than), `<=` (less than or equal), `>` (greater than), `>=` (greater than or equal).

| Example Value | Condition | Boolean Result |
|-|-|-|
| `energy = 5` | `energy == 5` | `true` | 
| `energy = 5` | `energy != 5` | `false` | 
| `energy = 10` | `energy < 10` | `false` | 
| `energy = 10` | `energy <= 10` | `true` | 
| `energy = 5` | `energy > 10` | `false` | 
