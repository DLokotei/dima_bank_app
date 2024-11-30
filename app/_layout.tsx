import { View, Text } from 'react-native'
import React from 'react'
import { Link, Slot, Stack, Tabs } from 'expo-router';
import AppRoutesView from '@/components/navigation/app_navigation_buttons';

export default function HomeLayout1() {
  return (
    <>
      <Text> HEADER 1</Text>
      <Slot />
      <Text> FOOTER 1</Text>
      {/* <Link href="/screen_button_callback">View screen_button_callback</Link> */}
      <AppRoutesView/>
    </>
  );
}

// export default function HomeLayout2() {
//     return (
//       <>
//         <Text> HEADER 1</Text>
//           <Tabs >
//                 <Tabs.Screen options={{title: 'Home', headerShown: true }} name="index" />
//                 <Tabs.Screen options={{ headerShown: true }} name="screen_button_callback" />
//                 <Tabs.Screen options={{title: 'hidden in tabs', headerShown: true, href: null }} name="screen_drawer_test" />
//           </Tabs>
//         <Link href="/screen_button_callback">View screen_button_callback</Link>
//       </>
//     );
//   }

// export default function HomeLayout3() {
//     return (
//         <Stack
//             screenOptions={{
//                 headerStyle: {
//                 backgroundColor: '#f4511e',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                 fontWeight: 'bold',
//                 },
//             }}>
//             <Text> HEADER STACK 1</Text>
//             {/* Optionally configure static options outside the route.*/}
//             <Stack.Screen name="home" options={{}} />
//             <Text> HEADER STACK 2</Text>
//             <AppRoutesView/>
            
//         </Stack>
//     )
// }