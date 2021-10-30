import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList
} from 'react-native';
import ChatRoomItem from './ChatRoomItem';
import ChatRoomsData from '../../assets/dummy-data/ChatRooms';

export default function ChatRoomContent() {
    return (
        <View style={styles.page}>
            <FlatList
                data={ChatRoomsData}
                renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
                showsVerticalScrollIndicator={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    }
})