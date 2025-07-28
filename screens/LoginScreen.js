import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function LoginScreen() {
    return (

        <View style={{ height: '100%', padding: 10 }}>

            <View style={{ height: '80%' }}>
                <Text style={styles.title}>Log in</Text>
                <Text style={styles.subTitle}>Please enter log in details below</Text>
                <Text style={styles.textInputLabel}>Email</Text>
                <TextInput style={styles.input} placeholder='Enter your mail' />
                <Text style={styles.textInputLabel}>Password</Text>
                <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry={true} />
                <View style={styles.rowContainer}>
                    <View style={styles.checkBoxContainer}>
                        {/* <CheckBox /> */}
                        <Text style={styles.checkBoxLabel}>Remember me</Text>
                    </View>
                    <Text>Forgot Password?</Text>
                </View>
                <TouchableOpacity onPress={() => { }} style={styles.buttonGradient}>
                    <LinearGradient
                        colors={['#003973', '#005fa3']} // Customize these colors
                        style={styles.button}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.buttonLabel}>Log in </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.rowContainer}>
                    <View style={styles.lineStyle}></View>
                    <Text>Or</Text>
                    <View style={styles.lineStyle}></View>
                </View>
                <View style={styles.rowCenterContainer}>
                    <View style={styles.loginOptionCotainer}>
                        <Image source={require('../assets/google_logo.png')} style={styles.ImageStyle} />
                        <Text>Google</Text>
                    </View>
                    <View style={styles.loginOptionCotainer}>
                        <Image source={require('../assets/Facebook_logo.png')} style={styles.ImageStyle} />
                        <Text>Facebook</Text>
                    </View>
                </View>

            </View>
            <View style={styles.rowCenterContainer}>
                <Text>Don't have an account? </Text>
                <Text>Sign up</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 10,
        fontSize: 24
    },
    subTitle: {
        marginBottom: 10
    },
    input: {
        marginVertical: 10,
        paddingLeft: 10,
        borderWidth: 1,
        height: 50,
        borderRadius: 10
    },
    textInputLabel: {
        fontWeight: '500'
    },
    checkBoxContainer: {
        flexDirection: 'row',
    },
    checkBoxLabel: {
        marginLeft: 10
    },
    rowContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowCenterContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: '100%',
        marginVertical: 10,
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    buttonGradient: {

        borderRadius: 25,
        alignItems: 'center',
    },
    buttonLabel: {
        color: 'white'
    },
    lineStyle: {

        margin: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 1,
        borderBottomColor: 'grey',

    },
    loginOptionCotainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        padding: 10,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    ImageStyle: {
        width: 20,
        height: 20,
        marginRight: 5
    }
})