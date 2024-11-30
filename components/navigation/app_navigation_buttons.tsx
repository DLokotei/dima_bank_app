import React from "react"
import { Text, Button, View, Pressable } from "react-native"
import { Link, router } from 'expo-router';

const AppRoutesView = () => {
    
    return(
        <View style={{backgroundColor: '#ccc'}}>
            <Pressable onPress={()=> {router.navigate('/screen_button_callback')}}>
                <Text>Route screen_button_callback</Text>
            </Pressable>
            <Pressable onPress={()=> {router.navigate('/screen_component_props_demo')}}>
                <Text>Route screen_component_props_demo</Text>
            </Pressable>
            <Link href="/screen_list_demo">Route screen_list_demo</Link>
            <Link href="/screen_drawer_test">Route screen_drawer_test</Link>
        </View>
    )
}

export default AppRoutesView