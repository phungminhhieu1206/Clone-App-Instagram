import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ChatRoomContent from './ChatRoomContent'

const ChatRoomScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <ChatRoomContent />
    </View>
)

const Header = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={require('../../assets/icon_back.png')}
                style={{ width: 30, height: 30 }}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>CHAT ROOM</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 23,
    },
})

export default ChatRoomScreen
