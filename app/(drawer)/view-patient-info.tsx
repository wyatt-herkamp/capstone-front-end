import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

import { Container } from '~/components/Container';
import ProtectedRoute from '~/components/ProtectedRoute';
import { ScreenContent } from '~/components/ScreenContent';

export default function PatientInfo() {
  return (
    <ProtectedRoute>
      <View>
        <Text>Test</Text>
      </View>
    </ProtectedRoute>
  );
}
