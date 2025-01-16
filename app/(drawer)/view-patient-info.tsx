import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import ProtectedRoute from '~/components/ProtectedRoute';
import api from '~/lib/api';

export default function PatientInfo() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      const patient = await api.participants.fetchById('33');
      setPatient(patient);
    };

    fetchPatient();
  }, []);

  return (
    <ProtectedRoute>
      <View>{patient ? <Text>{JSON.stringify(patient)}</Text> : <Text>Loading...</Text>}</View>
    </ProtectedRoute>
  );
}
