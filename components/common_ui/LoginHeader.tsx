import { UserContext, UserContext2 } from "@/feature/auth/userProfileData"
import React, { useContext, useEffect } from "react"
import { View, Text } from "react-native"

const LoginHeader = () => {
    const userData = useContext(UserContext);
    const userData2 = useContext(UserContext2);

    useEffect(
        () => {
            userData?.setUserName('New User Name')
            userData2.betsStatus = 'inProgress'
        },
        [] // call only on first render
    )

    return (
        <View>
            <Text>Hello {userData?.userName ?? 'nil'}</Text>
            <Text>bet status: {userData2?.betsStatus ?? 'nil'}</Text>
        </View>
    )
}

export default LoginHeader