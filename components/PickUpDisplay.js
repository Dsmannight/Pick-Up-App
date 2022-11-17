import { StyleSheet, Text, View } from 'react-native';

export default function PickUpDisplay({ textHandle, display, pickUp }) {
    return (
    <View style={styles.textHolder}>
        <Text style={styles.pickupText} onPress={textHandle} >{display && pickUp}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textHolder: {
        margin: 20,
        borderColor: "black",
        borderWidth: 1,
        height: 280,
        width: "80%",
        borderRadius: 20,
        display: "flex",
        position: "realtive",
        justifyContent:"center",
        alignItems:"center"
      },
      pickupText: {
        width: "80%"
      }
})