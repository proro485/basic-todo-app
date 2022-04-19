import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [todoList, setTodoList] = useState<string[]>([]);

  return (
    <View style={styles.appContainer}>
      <TodoInput setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
});
