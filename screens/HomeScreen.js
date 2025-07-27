import { View, Text } from 'react-native';
import { Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <View>

            <Text>Welcome Akshaya</Text>
            <Button title='Counter' onPress={() => navigation.navigate('Counter')} />
        </View>
    );
}