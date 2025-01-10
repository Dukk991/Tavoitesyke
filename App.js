import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('0')
  const [limit, setLimit] = useState('')

  const ageLimitSet = () => {

    if (age <= 0 || age > 100) {
      setLimit("Invalid input")
    } else if (age > 0) {
      const lower = (220 - age) * 0.65
      const upper = (220 - age) * 0.85
      const result = lower.toFixed(0) + '-' + upper.toFixed(0)
      setLimit(result)
    } else {
      setLimit("Invalid input")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      ></TextInput>
      <Text style={styles.field}>Limit</Text>
      <Text style={styles.field}>{limit}</Text>
      <Button title="Calculate" onPress={ageLimitSet}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10,
  }
});
