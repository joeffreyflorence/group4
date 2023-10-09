import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { BookOpenIcon } from 'react-native-heroicons/solid'

export default function FoodCard ({ item, index }) {
  const navigation = useNavigation()

  return (
    <Animatable.View
      delay={index * 120}
      animation='slideInRight'
      style={{
        width: 200, // Adjust the width to your desired size
        height: 400, // Adjust the height to your desired size
        marginVertical: 10, // Add or adjust margin as needed
        marginRight: 12, // Add or adjust margin as needed
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 16 // Adjust the border radius as needed
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={item.image}
          style={{ width: 120, height: 120, borderRadius: 8 }}
        />
      </View>
      <View style={{ flex: 1, paddingVertical: 8 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 4
          }}
        >
          {item.name}
        </Text>
        <Text style={{ color: 'white' }}>{item.ingredients}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('FoodDetails', { ...item })}
          style={{
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 999 // A large value to make it a circle
          }}
        >
          <BookOpenIcon size={25} color='black' />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  )
}
