import React from "react";
import { View, TouchableOpacity, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { s } from "./styles";

type Props = {
    conteudo: string
    onRemove: () => void;
    onCheck: () => void;
    check: boolean;
}

export function Tarefa({ conteudo, onRemove, onCheck, check }: Props) {
    return (

        <View style={s.container}>

            <TouchableOpacity style={s.button} onPress={onCheck}>
                <Ionicons name={check ? "checkmark-circle" : "ellipse-outline"} size={20} color="#4EA8DE" />
            </TouchableOpacity>

            <Text style={s.text}>{conteudo}</Text>

            <TouchableOpacity onPress={onRemove}>
                <Ionicons style={s.button} name="trash" size={20} color="#808080" />
            </TouchableOpacity>

        </View>
    )
}