import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { s } from './styles';

export default function Home() {
    return (
        <View style={s.container}>
            <Text>Home</Text>
            <StatusBar style="auto" />
        </View>
    );
}
