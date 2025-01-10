import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { s } from './styles';
import { Tarefa } from '../../components/Tarefa';
import { useState } from 'react';


export default function Home() {

    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState<string[]>([])
    const [tarefaCheck, setTarefasCheck] = useState<string[]>([])

    function handleTarefaAdd() {
        if (tarefa.length < 1) {
            Alert.alert("Atenção", "Digite uma tarefa!")
            return;
        }
        setTarefas(prevState => [...prevState, tarefa])
        setTarefa("")
    }

    function handleTarefaRemove(value: string) {
        Alert.alert("Apagar tarefa", "Deseja mesmo remover sua tarefa?", [
            {
                text: "Sim",
                onPress: () => {
                    setTarefas(prevState => prevState.filter(tarefa => tarefa !== value));
                    setTarefasCheck(prevState => prevState.filter(tarefaCheck => tarefaCheck !== value));
                }
            },
            { text: "Não", style: 'cancel' }
        ])

    }

    function handleTarefaCheck(value: string) {
        if (tarefaCheck.includes(value)) { return }
        Alert.alert("Finalizar Tarefa", "Você finalizou mesmo essa tarefa?", [
            { text: "Sim", onPress: (() => setTarefasCheck(prevState => [...prevState, value])) },
            { text: "Não", style: 'cancel' }
        ])
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
                <TouchableOpacity style={s.button} onPress={handleTarefaAdd}>
                    <View>
                        <Text style={s.buttonText}>+</Text>
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
                        <Text>{tarefaCheck.length}</Text>
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
                        onRemove={() => handleTarefaRemove(item)}
                        onCheck={() => (handleTarefaCheck(item))}
                        check={tarefaCheck.includes(item)}
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
