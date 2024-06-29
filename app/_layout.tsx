import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AuthProvider from '~/providers/AuthProvider';
import ScooterProvider from '~/providers/ScooterProvider';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ScooterProvider>
          <Stack />
          <StatusBar style="light" />
        </ScooterProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
