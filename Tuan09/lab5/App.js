import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Task from './components/Task';
export default function App() {
  // State to manage tasks and user input
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); // Clear the input
    }
  };

  // Function to delete a task by its index
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection: 'row', alignItems:'center'}}>
    <Image source={require('./assets/user.png')} />
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, paddingLeft: 10 }}>
        Hi Twinkle <br />
        <Text style={{ fontSize: 16, opacity: 0.7 }}>Have agrate day a head</Text>
      </Text>
    </View>
    <View style={{width: 270, height: 50, flexDirection:'row', alignItems:'center', borderWidth: 1, borderRadius: 10}}>
    <Image source={require('./assets/search.png')}/>
    <TextInput placeholder='Search' style={{width: 270, height: 50, color:'#8d8f92', fontSize: 16, paddingLeft: 10, borderRadius: 10}}/>
    </View>
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <FontAwesome5 name="plus" size={24} color="green" onPress={addTask} />
      </View>
      <ScrollView style={styles.tasks}>
        {tasks.map((text, index) => (
          <Task key={index} text={text} onDelete={() => deleteTask(index)} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
  },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270
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
