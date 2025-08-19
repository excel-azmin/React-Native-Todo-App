import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../hooks/useTheme';

const index = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <SafeAreaView>
      <View>
        <Text>index</Text>
        <TouchableOpacity onPress={toggleDarkMode}> 
          <Text>Toggle Dark Mode</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default index