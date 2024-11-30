import { View, Text, Button, Alert } from 'react-native'
import React, { useRef } from 'react'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';


// NOT WORKING

const screen_drawer_test = () => {

    const [open, setOpen] = React.useState(false);
    const drawer = useRef<DrawerLayout>(null);

    const renderDrawer = () => {
        return (
          <View>
            <Text>I am in the drawer!</Text>
            {/* <Button title='close' onPress={()=>drawer?.current?.closeDrawer()} /> */}
          </View>
        );
      };

      const tryOpenDrawer = () => {
        // drawer.current?.openDrawer() // NOT WORKING
        Alert.alert('cll', 'mmmm')
      }

  return (
    <View style={{flex: 1}}>
      <Text>screen_drawer_test</Text>
      {/* <DrawerDemo/> */}
      <DrawerLayout
                    ref={ drawer }
                    drawerWidth={300}
                    drawerBackgroundColor='#363'
                    drawerPosition='left'
                    drawerType='front'
                    renderNavigationView={renderDrawer}
                    children= {
                        <View>
                            <Text>some drawer text 2</Text>
                            <Text>text for props</Text>
                            <Button title='open' onPress={tryOpenDrawer} />
                        </View>
                    }
                />
      <Text>screen_drawer_test asdasdas </Text>
    </View>
  )
}

export default screen_drawer_test

// class DrawerDemo extends React.Component {
    

//     static navigationOptions = {
//         title: '✌️ Drawer Handler Demo',
//     };

//     renderDrawer = () => {
//         return (
//           <View>
//             <Text>I am in the drawer!</Text>
//             <Button title='close' onPress={()=>drawer?.current?.closeDrawer()} />
//           </View>
//         );
//       };

    

//     render(): React.ReactNode {

//         return (
//             <View style={{flex: 1}}>
//                 <DrawerLayout
//                     ref={ drawer => this.drawer = drawer}
//                     drawerWidth={300}
//                     drawerBackgroundColor='#363'
//                     drawerPosition='left'
//                     drawerType='front'
//                     renderNavigationView={this.renderDrawer}
//                     enableTrackpadTwoFingerGesture={true}
//                     children= {
//                         <View>
//                             <Text>some drawer text 2</Text>
//                             <Text>text for props</Text>
//                             <Button title='open' onPress={()=>drawer?.current?.openDrawer()} />
//                         </View>
//                     }
//                 />
//             </View>
//         )
//     }

// }