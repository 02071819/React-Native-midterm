import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { gs, colors } from '../../../styles';
import { Feather, Entypo } from '@expo/vector-icons';

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53", "#8b6f43"]
export default function Stats() {
    return (
        <View style={styles.container}>
            <View style={styles.weatherContainer}>
                <Feather name="sun" size={24} color={colors.darkHl} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.title}>22°</Text>
                    <Text style={styles.subTitle}>Sunny</Text>
                </View>
            </View>
            
            <View>
                <Text style={styles.title}>
                    8.4
                    <Text style={[styles.subTitle, { paddingLeft: 8 }]}> +6k Votes</Text>
                </Text>

                <View style={gs.rowCenter}>
                    {starColors.map((color, index) => {
                        return (
                            <Entypo name="star" size={14} color={color} key={index} style={{ marginHorizontal: 2 }} />
                        )

                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        ...gs.sectionContainer,
    },
    weatherContainer: {
        ...gs.rowCenter,
        paddingRight: 12,
        marginRight: 12,
        borderRightColor: "#444",
        borderRightWidth: 1,
    },
    title: {
        color: colors.text,
        fontSize: 18,
        fontWeight: "800",
    },
    subTitle: {
        color: colors.textSec,
        fontSize: 10,
        fontWeight: "800",
    },

})