import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Home Screen</Text>
            <Button title="Go to Detalis" onPress={()=>props.navigation.navigate('Detail')} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
