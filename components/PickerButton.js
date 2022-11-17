import { Pressable, StyleSheet, Text } from 'react-native';

export default function PickerButton({handlePress, butText}) {
    return(
    <Pressable onPress={handlePress} style={styles.theCoolButton}>
        <Text style={styles.buttonText}>{butText}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    theCoolButton: {
        display: "flex",
        borderColor: "black",
        borderWidth: 1,
        width: "80%",
        height: 50,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
      },
      buttonText: {
        fontSize: 30,
        fontWeight: "bold",
      },
})

