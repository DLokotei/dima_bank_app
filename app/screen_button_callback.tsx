import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const screen_button_callback = () => {
    let [getSavedCount, setSavedCount] = useState(0);


    return (
        <View>
            <Text>Push the buttons</Text>
            <Text>buttons count: {getSavedCount}</Text>
            <Button title='+' onPress={()=>setSavedCount(getSavedCount + 1)} />
            <Button title='-' onPress={()=>setSavedCount(getSavedCount - 1)} />
        </View>
  )
}

export default screen_button_callback