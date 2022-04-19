import { Dispatch, SetStateAction } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

interface Props {
  todoList: string[];
  setTodoList: Dispatch<SetStateAction<string[]>>;
}

export default function TodoList({ todoList, setTodoList }: Props) {
  const deleteTodo = (index: number) => {
    setTodoList((oldTodoList) => {
      return oldTodoList.filter((_, i) => i !== index);
    });
  };

  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoListHeading}>Todo List</Text>
      <FlatList
        data={todoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => {
          return (
            <View style={styles.todoItem}>
              <Text style={styles.todoItemText}>{itemData.item}</Text>
              <Button
                color={'#fd9b9a'}
                title="🗑️"
                onPress={() => deleteTodo(itemData.index)}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    flex: 5,
  },
  todoListHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  todoItemText: {
    fontSize: 15,
  },
});
