// Update the import path to the correct relative location
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { Tabs } from 'expo-router';
import { linkTo } from 'expo-router/build/global-state/routing';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';
import useTheme from '../hooks/useTheme';


const TabsLayout = () => {

  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarStyle: {
            backgroundColor: colors.bg,
            borderTopWidth: 2,
            borderTopColor: colors.primary,
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            paddingBottom: 5,
            paddingTop: 5,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: colors.text,
            textAlign: 'center',
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='settings'
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon="plus"
        color={colors.primary}
        onPress={() => {
          linkTo('../pages/todo');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  fab: {
    position: 'absolute',
    right: '50%',
    bottom: 20,
    margin: 16,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
    borderTopWidth: 1,
    borderTopColor: '#e91e63',
    borderBottomWidth: 1,
    borderBottomColor: '#e91e63',
    backgroundColor: '#fff',
    borderRightWidth: 4,
    borderRightColor: '#e91e63',
    transform: [{ translateX: 50 }],
    borderRadius: 50,
  },
});

export default TabsLayout;
