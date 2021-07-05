import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { gs, colors } from "../../../styles";

const hotel = {
    name: "The Night Hotel",
    price: "$967",
    location: "Cambodia",
    about: "hshedfgwiugefgwaidfasdfghjklasdfghjklqwertyuiopasdfghjklxcvbnmdfghjkqwertyuiopasdfghjkl",
};

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>
            <View style={gs.divider} />
            <Text style={gs.sectionTitle}> About {hotel.name} </Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
    },
    info: {
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4,
    },
    about: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20,
    }
});