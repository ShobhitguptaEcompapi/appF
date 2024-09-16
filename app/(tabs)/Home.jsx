import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { router } from "expo-router";
import MentalwellBeing from '@/components/home/MentalwellBeing';
import Lesson from '@/components/home/Lesson';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const App = () => {
  const [selectedButtonId, setSelectedButtonId] = useState(1);
  const [isArpSurveyNotFilled, setIsArpSurveyNotFilled] = useState(false);
  const [hasNotCompletedAnyLessonButFilledSurvey, setHasNotCompletedAnyLessonButFilledSurvey] = useState(false);
  const [hasCompleted2Lessons, setHasCompleted2Lessons] = useState(true);
    const handleIcon1Press = () => {
        router.push("/search")
    };

    const handleIcon2Press = () => {
        console.log('Settings icon pressed');
    };

    const buttons = [
      { id: 1, label: 'Lessons' },
      { id: 2, label: 'Mental WellBeing' },
      { id: 3, label: 'Button 3' },
      { id: 4, label: 'Button 4' },
      { id: 5, label: 'Button 5' },
  ];

  const renderItem = ({ item }) => (
      <View
          className={`mx-2 flex justify-center items-center rounded-xl ${selectedButtonId === item.id ? "bg-[#E6ECF2]" : "bg-[#FFFFFF]"}`}
          // buttonColor={selectedButtonId === item.id ? '#E6ECF2' : '#FFFFFF'} 
          onPress={() => console.log(`${item.label}`)}
      >
        <Text className="px-4 py-2 font-semibold">  {item.label} </Text>
      </View>
  );

    return (
      <SafeAreaView style={styles.container}>
        <View >
            <Navbar
                name="John" 
                onIcon1Press={handleIcon1Press} 
                onIcon2Press={handleIcon2Press} 
            />
            {/* MENU */}
  <FlatList className="h-[80px]"
            horizontal
            showsHorizontalScrollIndicator={false}
            data={buttons}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContainer}
        />
<View className="w-[100%] h-[79%]">
        {/* <MentalwellBeing></MentalwellBeing> */}

        <Lesson></Lesson>
        </View>
        </View>
        </SafeAreaView>
    );
};

export default App;


const styles = StyleSheet.create({
  container: {
          backgroundColor : 'linear-gradient(180deg, #F6F7FB 0%, #F6F7FB 100%)',
      },
      flatListContainer: {
        paddingVertical: 20,
        paddingHorizontal:5, 
        
    },
    button: {
        width: 120,
        margin: 2,
        borderColor: 'black',
        borderWidth:1,
    },
  })



























// import * as React from 'react';
// import { StyleSheet, TouchableOpacity, View } from 'react-native';
// import { Appbar, Text } from 'react-native-paper';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const MyComponent = () => {
  

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.navbar}>
//             <Text style={styles.greeting}>
//                 Hello, <Text style={styles.name}>name</Text>
//             </Text>
//             <View style={styles.iconContainer}>
//                 <TouchableOpacity onPress={onIcon1Press}>
//                     <Ionicons name="notifications-outline" size={24} color="black" />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={onIcon2Press}>
//                     <Ionicons name="settings-outline" size={24} color="black" />
//                 </TouchableOpacity>
//             </View>
//         </View>

//     </SafeAreaView>
//   );
// };

// export default MyComponent;

// const styles = StyleSheet.create({
//   container: {
//       height : '100%',
//       width : '100%',
//       backgroundColor : 'white',
//   },
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: '#fff', // Customize your navbar background color
//     elevation: 3, // Adds shadow for Android
//     shadowColor: '#000', // Shadow for iOS
//     shadowOpacity: 0.1, // Shadow opacity
//     shadowRadius: 5, // Shadow blur
// },
// greeting: {
//     fontSize: 18,
//     color: '#333',
// },
// name: {
//     fontWeight: 'bold',
// },
// iconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
// },
// icon: {
//     marginLeft: 16, // Space between icons
// },
// })