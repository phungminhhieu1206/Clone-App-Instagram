import React from 'react'
import { SafeAreaView } from 'react-native'
import ChatRoomScreen from '../components/chatRoom/ChatRoomScreen'

const ChatScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <ChatRoomScreen navigation={navigation} />
        </SafeAreaView>
    )
}

export default ChatScreen
