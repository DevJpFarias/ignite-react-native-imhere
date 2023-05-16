import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = [
    'João Paulo',
    'Ludmila',
    'Lorena',
    'Ana Clara',
    'Ana Sodré',
    'Gabriel Antunes',
    'Daniel Martins',
    'Anna Victoria',
    'Stefane',
    'Felipe',
    'Amanda',
    'Thais',
    'Amanda Fagundes',
    'Gabriel',
  ]

  function handleParticipantAdd() {
    console.log('Você clicou no botão de adicionar')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de remover participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 9 de Novembro de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes!</Text>
        )}
      />
      {/* {
        participants.map(participant => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))
      } */}
    </View>
  );
}