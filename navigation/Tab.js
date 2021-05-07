import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = ({color,tab,onPress,icon}) => {
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <Icon name={icon} size={23} color={color} />}
            {/* <Text style={{color}}  >{tab.name}</Text> */}
        </TouchableOpacity>
    )
}

export default Tab

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:6,
        
    },
    
})
