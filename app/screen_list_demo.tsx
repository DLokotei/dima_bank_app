import { View, Text, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const fruits: Array<Fruit> = [
    {name: 'apple', eatable: true, isBig: false},
    {name: 'banana', eatable: true},
    {name: 'dog', eatable: false}
]

class Fruit {
    name: String | undefined;
    eatable: Boolean | undefined;
    isBig?: Boolean | undefined;
}

const vegetable = ['potato', 'tomato']

const screen_list_demo = () => {

    function renderListItem(fruit: Fruit) {
        return (
            <View style={{backgroundColor:'#933'}}>
                <Text>fruit: {fruit.name}</Text>
            </View>
        )
    }

    const renderListItem2 = ({item}: {item: Fruit}) => {
        let eatableString = ''
        if(item.eatable) { 
            eatableString = 'is eatable' 
        } else {
            eatableString ='is not eatable'
        }
        return (
            <View style={{backgroundColor:'#933'}}>
                <Text>fruit: {item.name} {eatableString}</Text>
            </View>
        )
    }


    return (
        <View>
            <Text>List Demo</Text>
            <FlatList 
                data={fruits} 
                renderItem={ ({item}) => {
                        // console.log(item)
                        // return <Text>vegetable: {item}</Text>
                        return renderListItem(item)
                        // return renderListItem2({item})
                    }
                }
            />
        </View>
  )
}

export default screen_list_demo