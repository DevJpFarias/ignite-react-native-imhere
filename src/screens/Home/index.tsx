import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 9 de Novembro de 2023.
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor='#6b6b6b'
      />
    </View>
  );
}