import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StayScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Stay Screen</Text>
        </View>
    )
}

export default StayScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
