import { StatusBar } from 'expo-status-bar';
import { View , Text, TouchableOpacity} from 'react-native';

const Home = ( {navigation} ) => {

  return (
    <View style={{}}>
        <Text > Home Page</Text>
        <TouchableOpacity style={{backgroundColor: 'yellow', padding: 20, margin: 50}}
          onPress={() => navigation.navigate('Profile')}
          >
          <Text> Click me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: 'yellow', padding: 20, margin: 50}}
          onPress={() => navigation.navigate('Flatlist')} >
            <Text> Click me</Text>
          </TouchableOpacity>
    </View>
  );
}
export default Home;
