import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

interface ChildProps {
    status: String;
    startTime: String;
}

const screen_component_props_demo = () => {
    return (
        <View>
            <Text>screen_component_props_demo</Text>
            <MatchComponent1 status='status1' />
            <MatchComponent2 status='status2' />
            <MatchComponent3 startTime='11:23' status='status3' />
        </View>
  )
}

const MatchComponent1 = (props: { status: string })=> {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>This is match</Text>
            <Text>With status {props.status}</Text>
        </View>
  )
}

const MatchComponent2 = (props: any)=> {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>This is match</Text>
            <Text>With status {props.status}</Text>
        </View>
  )
}

const MatchComponent3 = ({status, startTime}: ChildProps)=> {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>This is match</Text>
            <Text>With status {status}</Text>
            <Text>With startTime {startTime}</Text>
        </View>
  )
}

export default screen_component_props_demo