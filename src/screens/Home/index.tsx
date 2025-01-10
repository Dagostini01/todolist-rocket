import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { s } from './styles';
import { Tarefa } from '../../components/Tarefa';
import { useState } from 'react';


export default function Home() {

    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState<string[]>([])

    function handleTarefa() {
        setTarefas(prevState => [...prevState, tarefa])
    }

    return (
        <View style={s.container}>

            <SafeAreaView style={s.form}>
                <TextInput
                    style={s.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor="#6B6B6B"
                    value={tarefa}
                    onChangeText={setTarefa}
                />
                <TouchableOpacity style={s.button}>
                    <View>
                        <Text style={s.buttonText} onPress={handleTarefa}>+</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>

            <View style={s.info}>
                <View style={s.description}>
                    <Text style={s.descriptionText}>Criadas</Text>
                    <View style={s.descriptionNumber}>
                        <Text>{tarefas.length}</Text>
                    </View>
                </View>
                <View style={s.description}>
                    <Text style={s.descriptionText2}>Concluídas</Text>
                    <View style={s.descriptionNumber}>
                        <Text>0</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={tarefa => tarefa}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Tarefa
                        key={item}
                        conteudo={item}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={s.containerlistEmptyText}>
                        <Ionicons name="documents-outline" size={100} color="#4EA8DE" />
                        <Text style={s.listEmptyText1}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={s.listEmptyText2}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />

        </View>
    );
}
