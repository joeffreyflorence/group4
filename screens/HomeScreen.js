import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon
} from 'react-native-heroicons/solid'
import { categories, foodItems } from '../constants'
import * as Animatable from 'react-native-animatable'
import SubjectCard from '../components/SubjectCard'


export default function HomeScreen () {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredEvents =
  selectedCategory === 'All'
    ? foodItems
    : foodItems.filter((event) => event.category === selectedCategory);
  return (
    <View className='flex-1 relative'>
      <Image
        blurRadius={40}
        source={require('../assets/images/background.png')}
        className='absolute w-full h-full'
      />
      <SafeAreaView className='flex-1'>
        {/* top buttons */}
        <View className='flex-row justify-between items-center mx-4'>
          <View className='bg-white shadow-md rounded-2xl p-3'>
           
          </View>
          <View
            className='rounded-2xl'
            style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: 3 }}
          >
          </View>
        </View>
       {/* Punch line */}
        <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#333' }}>
            School
          </Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#333' }}>
            <Text style={{ fontWeight: '800' }}>Resource</Text> Finder
          </Text>
        </View>
           {/* search  */}
       
          
        

        {/* categories scrollbar */}
        <ScrollView
          className="mt-6 pt-6 max-h-20"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        >
          {
            categories.map((category, index)=>{
              let isActive = category.categoryName === selectedCategory;
              let textClass = isActive? ' font-bold': '';
              return (
                <Animatable.View
                  delay={index*120} // delay for each item
                  animation="slideInDown" // animation type
                  key={index}>
                      <TouchableOpacity
                        className="mr-9"
                        onPress={() => setSelectedCategory(category.categoryName)}
                      >
                        <Text className={"text-white text-base tracking-widest "+textClass}>
                          {category.categoryName}
                        </Text>
                        {
                          isActive? (
                            <View className="flex-row justify-center">
                              <Image source={require('../assets/images/line.png')} 
                                className="h-4 w-5" />
                            </View>
                          ):null
                        }
                      </TouchableOpacity>
                  </Animatable.View>
              )
            })
          }
        </ScrollView>
        {/* food cards */}
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 20}}
          horizontal showsHorizontalScrollIndicator={false}
        >
          {
            filteredEvents.map((item, index)=> <SubjectCard item={item} index={index} key={index} />)
          }
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}