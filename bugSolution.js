The correct way to use AsyncStorage.getItem is to handle the promise using `.then()` or `async/await`:

```javascript
// Correct usage with .then()
AsyncStorage.getItem('myKey').then(value => {
  if (value !== null) {
    console.log('Value:', value);
  } else {
    console.log('Value not found');
  }
});

// Correct usage with async/await
async function getValue() {
  try {
    const value = await AsyncStorage.getItem('myKey');
    if (value !== null) {
      console.log('Value:', value);
    } else {
      console.log('Value not found');
    }
  } catch (e) {
    console.error('Error getting value:', e);
  }
}

getValue();
```
By using `.then()` or `async/await`, you ensure that you're accessing the actual stored value after the Promise has resolved.