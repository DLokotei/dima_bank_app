import { View, Text, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext2, UserProvider2 } from '@/feature/auth/userProfileData'

const screen_user_profile = () => {

    const userData = useContext(UserContext2)

    return (
        <View>
            <Text>User profile </Text>
            <View>
                <Text>
                    isAdsPersonalized {useContext(UserContext2).isAdsPersonalized ? 'yes' : 'no'}
                </Text>
                <Text>
                    betsStatus {userData.betsStatus}
                </Text>
            </View>
        </View>
    )
}

export default screen_user_profile