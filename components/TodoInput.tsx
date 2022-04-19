import { Dispatch, SetStateAction, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  setTodoList: Dispatch<SetStateAction<string[]>>;
}

export default function TodoInput({ setTodoList }: Props) {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.length > 0) {
      setTodoList((prevTodoList) => [...prevTodoList, todo]);
      setTodo('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={todo}
        onChangeText={(text) => setTodo(text)}
        placeholder="Enter Todo"
      />
      <Button title="Add Todo" onPress={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    width: '70%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
