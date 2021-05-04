import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text> DetailScreen</Text>
            <Button title="Go to Detalis" />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
