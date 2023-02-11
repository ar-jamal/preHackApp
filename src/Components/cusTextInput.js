import { StyleSheet, View } from 'react-native';
import { TouchableOpacity, Text, TextInput, Image } from 'react-native';
import colors from '../Utils/colors';
import cusColors from '../Utils/colors';

export default function CusTextInput({
    label,
    labelColor,
    delColor,
    marginLeft,
    fontSize,
    onChangeText,
    value,
    onDelete,
    placeholder,
    keyboardType,
    delOption,
    delBackgroundColor,
}) {
    return (
        <View style={{ marginTop: 12 }} >
            <Text
                style={{
                    color: labelColor ?? colors.inputLabel,
                    marginLeft: marginLeft,
                    marginTop: 20,
                    fontSize: fontSize ?? 12,
                }}>
                {label}
            </Text>
            <View style={styles.inputView}>
                <Image source={require('../Utils/Images/Group36.png')} />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                // keyboardType={keyboardType}
                />
                { delOption && <TouchableOpacity style={styles.delView} onPress={onDelete}>
                    <Text style={{ fontSize: fontSize ?? 16, color: delColor ?? colors.inputLabel }}>
                        x
                    </Text>
                </TouchableOpacity>}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        padding: 7,
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        marginTop: 5,
        borderWidth: 1,
        borderColor: colors.inputBorder,
        backgroundColor: colors.inputBg,
    },
    input: {
        width: '80%',
        padding: 5,
        // backgroundColor: "yellow"
    },
    delView: {
        width: 23,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.inputLabel
        // backgroundColor: 'darkred',
    },
});