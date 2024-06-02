import React from "react";
import {View, FlatList, StyleSheet, Text} from 'react-native';

const tasks = [
    { id: '1', name: 'Mobile App Development' },
    { id: '2', name: 'Web Development' },
    { id: '3', name: 'Push Ups' },
    { id: '4', name: 'Reading a Book' },
    { id: '5', name: 'Grocery Shopping' },
    { id: '6', name: 'Laundry' },
    { id: '7', name: 'Yoga' },
    { id: '8', name: 'Cooking Dinner' },
    { id: '9', name: 'Writing Blog Post' },
    { id: '10', name: 'Running' },
    { id: '11', name: 'Studying for Exam' },
    { id: '12', name: 'Cleaning Room' },
    { id: '13', name: 'Meditation' },
    { id: '14', name: 'Gardening' },
    { id: '15', name: 'Watching Tutorial' },
  ];
  
  const OngoingTask = () => {
    return (
      <View style={styles.ongoingTaskSection}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskCard}>
              <Text style={styles.taskName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    ongoingTaskSection: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 20,
    },
    taskCard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 50,
      marginBottom: 10,
    },
    taskName: {
      fontSize: 16,
    },
  });
  
  export default OngoingTask;