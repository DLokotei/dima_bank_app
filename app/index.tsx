import { View, Text } from 'react-native'
import React from 'react'
import LoginHeader from '@/components/common_ui/LoginHeader'
import { UserContext, UserProvider, UserProvider2 } from '@/feature/auth/userProfileData'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      {/*  no need of <UserProvider2> as it non-nullable */}
        <UserProvider>
          <LoginHeader />
        </UserProvider>
    </View>
  )
}




export default index