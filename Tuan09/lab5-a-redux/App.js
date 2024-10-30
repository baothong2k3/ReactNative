import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './components/store';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { addTask, deleteTask } from './components/taskSlice';
import Task from './components/Task';

function AppContent() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('./assets/user.png')} />
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', paddingLeft: 10 }}>
          Hi Twinkle<br/>
          <Text style={{ fontSize: 16, opacity: 0.7 }}>Have a great day ahead</Text>
        </Text>
      </View>
      <View style={{ width: 270, height: 50, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10 }}>
        <Image source={require('./assets/search.png')} />
        <TextInput placeholder='Search' style={{ width: 270, height: 50, color: '#8d8f92', fontSize: 16, paddingLeft: 10, borderRadius: 10 }} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <FontAwesome5 name="plus" size={24} color="green" onPress={handleAddTask} />
      </View>
      <ScrollView style={styles.tasks}>
        {tasks.map((text, index) => (
          <Task key={index} text={text} onDelete={() => dispatch(deleteTask(index))} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  tasks: {
    marginTop: 30,
  },
});
