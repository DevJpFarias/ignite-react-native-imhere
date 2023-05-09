import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão de adicionar')
  }

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

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}