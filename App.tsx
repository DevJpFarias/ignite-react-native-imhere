import { Text, View, useColorScheme } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    }}>
      <Text key="1" style={{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
      }}>
        Nome do evento
      </Text>

      <Text style={{
        color: '#6b6b6b',
        fontSize: 16,
      }}>
        Sexta, 9 de Novembro de 2023.
      </Text>
    </View>
  );
}
