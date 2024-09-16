import { View, Text, Image , ScrollView, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const DATA = [
    { 
      id: "1",
      photoUrl: "https://reactnative.dev/img/tiny_logo.png",
      title: 'First Item',
      description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
      time: "5",
      numberOfVideos: "4",
      lessonNo: "1",
      locked: false
    },
    { 
        id: "2",
        photoUrl: "https://reactnative.dev/img/tiny_logo.png",
        title: 'Second Item',
        description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
        time: "30",
        numberOfVideos: "6",
        lessonNo: "2",
        locked: false
      },
      { 
        id: "3",
        photoUrl: "https://reactnative.dev/img/tiny_logo.png",
        title: 'Third Item',
        description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
        time: "120",
        numberOfVideos: "4",
        lessonNo: "3",
        locked: true
      },
      { 
        id: "4",
        photoUrl: "https://reactnative.dev/img/tiny_logo.png",
        title: 'Fourth Item',
        description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
        time: "90",
        numberOfVideos: "6",
        lessonNo: "4",
        locked: true
      },
      { 
        id: "5",
        photoUrl: "https://reactnative.dev/img/tiny_logo.png",
        title: 'Fifth Item',
        description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
        time: "25",
        numberOfVideos: "10",
        lessonNo: "5",
        locked: true
      },
  ];

const Item = ({id,photoUrl,title,description,time,numberOfVideos,lessonNo,locked}) => (

    <View className={`w-[100%] h-[130px] mb-[30px] flex-row ${locked ? 'opacity-30' : 'opacity-100'}`}>
  <Image className="h-[100%] w-[25%] rounded-2xl ml-[3%]" source={require("./../assets/images/completeSurvey.png")}></Image>
  <View className="w-[75%]">
    <Text className="font-bold text-xl ml-[6%]">{title}</Text>
    <View className="flex-row items-center ml-[6%] ">
<Text>Lesson {lessonNo}  </Text>
<View className="h-1 w-1 rounded-xl bg-black"></View>
<Text> {numberOfVideos} Videos </Text>
<View className="h-1 w-1 rounded-xl bg-black"></View>
<Text>  {time} min watch</Text>
    </View>
    <View className="flex-row font-thin">
<Text className="mx-auto w-[90%] ml-[6%] font-extralight">{description}</Text>
    </View>
    {!locked ? (<View className="bg-[#E6ECF2] w-[40%] h-[40px] ml-[6%] mt-[2%] rounded-xl flex-row items-center justify-center">
    <Image className="h-[18px] w-[15%] rounded-2xl ml-[3%]" source={require("./../assets/images/playButton.png")}></Image>
    <Text className="text-[#1973BE] font-bold text-lg ml-[3%]">Watch</Text>
    </View>) :
    (<View className=" w-[40%] h-[40px] ml-[6%] mt-[4%] rounded-xl flex-row items-center ">
        <Image className="w-[35%] rounded-2xl ml-[3%]" source={require("./../assets/images/Lock.png")}></Image>
        </View>)
    }
  </View>
  
  </View>
)


export default function viewAllLessons() {
  return (
    <View className="h-[100%] w-[100%] bg-white">
      <TouchableOpacity onPress={() => { router.push("/(tabs)/Home");}}>
        <View className="mt-[10%] ml-[5%] flex-row items-center">
    <AntDesign name="arrowleft" size={24} color="black" />
    <Text className="font-semibold text-xl ml-[5%]">Back</Text>
    </View>
    </TouchableOpacity>
    <View className="">
    <View className="w-[95%] h-[90%] bg-white mx-auto my-[20px]">
  <Text className="font-bold text-2xl mt-[3%] mb-[15%] ml-[2%]">All Lessons</Text>
  <FlatList
   data={DATA}
   renderItem={({item}) => <Item title={item.title} description={item.description} photoUrl={item.photoUrl} time={item.time} locked={item.locked} lessonNo={item.lessonNo} numberOfVideos={item.numberOfVideos}/>}
        keyExtractor={item => item.id}
   />
</View>
    </View>
   
</View>
  )
}