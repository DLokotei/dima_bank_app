import React from "react"
import { Text, Button, View, Pressable, TouchableOpacity } from "react-native"
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
            <TouchableOpacity onPress={()=> {
                router.push('/screen_button_callback')
            }}>
                <Text>Route push screen_button_callback</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
                router.push('/screen_user_profile')
            }}>
                <Text>Route push screen_user_profile</Text>
            </TouchableOpacity>
            <Link href="/screen_list_demo">Route screen_list_demo</Link>
            <Link href="/screen_drawer_test">Route screen_drawer_test</Link>
            <TouchableOpacity onPress={()=> {
                let canGoBack = router.canGoBack()
                if (canGoBack) {
                    router.back()
                } else {
                    router.dismissTo('/')
                    console.warn('cant go back')
                }
                
            }}>
                <Text>GO BACK</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppRoutesView