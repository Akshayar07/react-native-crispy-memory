import { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';


export default function CounterScreen() {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>Counter Screen</Text>
            <Text>{count}</Text>
            <Button title='Increment' onPress={() => setCount(count + 1)} />
                
        </View>
    );
}