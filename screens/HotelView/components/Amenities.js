import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amentities</Text>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer1}>
                    <View style={styles.amentity}>
                        <Feather name="wifi" size={24} color={colors.lighth1} />
                    </View>
                    <Text style={styles.amenityName}>WI-FI</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer2}>
                    <View style={styles.amentity}>
                        <Ionicons name="md-restaurant" size={24} color={colors.lighth1} />
                    </View>
                    <Text style={styles.amenityName}>Hotel Restaurant</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer3}>
                    <View style={styles.amentity}>
                        <FontAwesome5 name="swimmer" size={24} color={colors.lighth1} />
                    </View>
                    <Text style={styles.amenityName}>Swimming Pools</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer4}>
                    <View style={styles.amentity}>
                        <Entypo name="drink" size={24} color={colors.lighth1} />
                    </View>
                    <Text style={styles.amenityName}>Bar</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer5}>
                    <View style={styles.amentity}>
                        <Ionicons name="ios-car" size={24} color={colors.lighth1} />
                    </View>
                    <Text style={styles.amenityName}>Parking Spot</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer6}>
                    <View style={styles.amentity}>
                        <Feather name="speaker" size={24} color={colors.lighth1} />
                    </View>
                    <Text style={styles.amenityName}>Night Club</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    amentitiesContainer: {
        marginTop: 16,
    },

    amentityContainer1: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        right: 230,
    },
    amentityContainer2: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        left: 110,
        top: -15,
    },
    amentityContainer3: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        left: 230,
        top: -30,
    },
    amentityContainer4: {
        alignItems: "center",
        width: 95,
        top: 70,
        right: 15,
    },
    amentityContainer5: {
        alignItems: "center",
        width: 95,
        left: 110,
        bottom: 15,
    },
    amentityContainer6: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        left: 230,
        bottom: 30,
    },
    amentity: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        ...gs.center,
        backgroundColor: "#444",
    },
    amenityName: {
        color: colors.lighth1,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 6,
        textAlign: "center",
    }
});