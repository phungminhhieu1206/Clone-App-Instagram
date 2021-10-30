import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { Divider } from 'react-native-elements';

export default function ChatRoomItem({ chatRoom }) {
    const user = chatRoom.users[1];

    return (
        <View>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                <Image
                    source={{ uri: user.imageUri }}
                    style={styles.image}
                />
                {chatRoom.newMessages ? <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
                </View> : null}
                <View style={styles.rightContainer}>
                    <View style={styles.row}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    badgeContainer: {
        backgroundColor: '#FF3250',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 52,
        top: 12,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 3
    },
    text: {
        color: 'grey'
    }
})
