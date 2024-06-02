import { StyleSheet, View } from 'react-native';
import Main from './component/Main';
import OngoingTask from './component/TaskOngoing';
export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <OngoingTask/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    paddingTop: 30
  },
});