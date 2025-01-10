import React from "react";
import { View, TouchableOpacity, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { s } from "./styles";

type Props = {
    conteudo: string
    onRemove: ()=> void;
}

export function Tarefa({ conteudo, onRemove }: Props) {
    return (

        <View style={s.container}>

            <TouchableOpacity style={s.button}>
                <Ionicons name="remove-circle" size={20} color="#4EA8DE" />
            </TouchableOpacity>

            <Text style={s.text}>{conteudo}</Text>

            <TouchableOpacity onPress={onRemove}>
                <Ionicons style={s.button} name="trash" size={20} color="#808080" />
            </TouchableOpacity>

        </View>
    )
}