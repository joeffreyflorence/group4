import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import 'expo-dev-client';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [FullName, setFullName] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isSecureEntry, setIsSecureEntry] = useState(true); 

    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordsMatch(value === confirmPassword);
    };
    
    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        setPasswordsMatch(value === password);
    };
    
    const handleSubmit = async () => {
        if (email && password && passwordsMatch && FullName) {
            try {
                await createUserWithEmailAndPassword(auth, email, password, FullName);
            } catch (err) {
                console.log('got error: ', err.message);    
            }
        } else {
            // Check for empty fields and password matching
            if (!FullName) {
                alert('Please enter your Full Name');
            } else if (!email) {
                alert('Please enter your Email Address');
            } else if (!password) {
                alert('Please enter your Password');
            } else if (!confirmPassword) {
                alert('Please confirm your Password');
            } else if (!passwordsMatch) {
                alert('Password and Confirm Password must match');
            }
        }
    };

  return (
    <View className="flex-1  bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-4 rounded-tr-2xl rounded-bl-2xl ml-3"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-0"
                value={FullName}
                onChangeText={value=>setFullName(value)}
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-0"
                value={email}
                onChangeText={value=> setEmail(value)}
                placeholder='Enter Email'
            />
            <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-0"
                        secureTextEntry={isSecureEntry}
                        value={password}
                        onChangeText={handlePasswordChange}
                        placeholder="Enter Password"
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setIsSecureEntry((prev) => !prev);
                        }}
                        style={{ position: 'absolute', right: 20, top: 235 }} 
                    >
                        <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                    <Text className="text-gray-700 ml-1">Confirm Password</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-0"
                        secureTextEntry={isSecureEntry}
                        value={confirmPassword}
                        onChangeText={handleConfirmPasswordChange}
                        placeholder="Confirm Password"
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setIsSecureEntry((prev) => !prev);
                        }}
                        style={{ position: 'absolute', right: 20, top: 325}} 
                    >
                        <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                    {!passwordsMatch && (
                        <Text className="text-red-500 ml-4">Passwords do not match</Text>
                    )}
                    <TouchableOpacity
                        className="py-3 bg-yellow-400 rounded-xl"
                        onPress={handleSubmit}
                    >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
