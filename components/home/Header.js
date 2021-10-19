import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import auth from '@react-native-firebase/auth'

const handleSignout = async () => {
    try {
        await auth().signOut()
        console.log('Signed out successfully');        
    } catch (error) {
        console.log(error);
        
    }
}

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignout}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/header-logo.png')}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/header-add-icon.png')}
                    />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/header-heart-icon.png')}
                    />
                </TouchableOpacity> */}
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/header-messenger-icon.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: 'row'
    },
    container: {
        justifyContent: 'space-between', // Tao space between, can 2 le
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 5,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
})
export default Header
