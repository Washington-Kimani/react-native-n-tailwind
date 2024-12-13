import '@/global.css';
import {View, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Settings(){
    return (
      <SafeAreaProvider>
        <View className="w-full h-screen flex flex-1 items-center justify-center bg-green-300">
          <Text className="text-blue-700">This is the settings page</Text>
        </View>
      </SafeAreaProvider>
    );
}