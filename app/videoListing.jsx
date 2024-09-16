import { View, Text, Image, ImageBackground, ScrollView, FlatList } from 'react-native'
import React from 'react'


const DATA = [
  { 
    id: "1",
    photoUrl: "https://reactnative.dev/img/tiny_logo.png",
    title: 'First Item',
    description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
    time: "2:30",
  },
  { 
    id: "2",
    photoUrl: "https://reactnative.dev/img/tiny_logo.png",
    title: 'Second Item',
    description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
    time: "3:40",
  },
  { 
    id: "3",
    photoUrl: "https://reactnative.dev/img/tiny_logo.png",
    title: 'Third Item',
    description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
    time: "26:04",
  },
];

const Item = ({id,photoUrl,title,description,time}) => (
  <View className="h-[130px]">
      <View className="w-[90%] mx-auto flex-row mb-[30px]">
      <Image
        className="h-[110px] w-[22%] rounded-lg "
        source={{
          uri: `${photoUrl}`,
        }}
      />
      <View className="w-[78%] ml-[10%]">
        <View className="flex-row">
        <Text className=" font-bold text-base">{title}</Text>
        <Text className="ml-[35%]">{time}</Text>
        </View>
        <Text className="w-[92%] text-thin">{description}</Text>
        <View className=" w-[40%] h-8 z-20 mt-[2%] bg-[#E6ECF2] flex-row justify-center items-center  rounded-lg">
        <Image className="mr-[4%]" source={require("./../assets/images/playButton.png")}></Image>
        <Text className="text-[#1973BE] font-bold">Watch</Text>
        </View>
      </View>
      </View>
      </View>
);

const VideoListing = () => {
  return (<>
    
       
      <View className="flex w-[100%] h-[52%] items-center">
          <View className="h-[430px] w-[100%] flex items-center">
          
        <ImageBackground className="h-[100%] object-cover w-[100%] "
      source={require("./../assets/images/bullyProof.png")}
    >
      <Image className="absolute z-20 ml-[85%] mt-[6%]"
        source={require('../assets/images/Cross.png')}
      />
        {/* Transparent Overlay */}
        <View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        
        {/* Content on top of the overlay */}
        <Text className="text-white font-bold z-20 mt-[80%] text-xl mx-auto ">Stop Bullying</Text>
        <View className="flex-row z-20 mt-[2%] items-center mx-auto">
        <Text className="text-white ml-[2%] ">Lesson 3   </Text>
        <View className=" h-1 w-1 bg-white rounded-lg"></View>
        <Text className="text-white ml-[2%] "> 4 videos  </Text>
        <View className=" h-1 w-1 bg-white rounded-lg"></View>
        <Text className="text-white ml-[2%] "> 35 min watch </Text>
        </View>
        <View className=" w-[40%] h-11 z-20 mt-[2%] bg-white flex-row justify-center items-center mx-auto rounded-2xl">
        <Image className="mr-[4%]" source={require("./../assets/images/playButton.png")}></Image>
<Text className="text-[#1973BE] font-bold">Start Lesson</Text>
        </View>
        {/* <Text className="text-white font-bold z-20 mt-[86%]  ">4 videos</Text>
        <Text className="text-white font-bold z-20 mt-[86%]  ">35 min watch</Text> */}
    </ImageBackground>
    </View>
    </View>

    <FlatList className=" bg-[#FFFFFF] pb-[30px]"
      data={DATA}
      ListHeaderComponent={
    <View>
    <View className="">
      <View className="bg-gray-100 pb-4">
        <Text className="font-bold text-xl pt-2 ml-[5%]">About Lesson</Text>
        <Text className="mx-[5%] mt-[15px] font-extralight text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...     <Text className="text-[#1973BE] underline">Read more</Text></Text>
      </View>
      <View className="w-[100%] ">
      <Text className="text-lg font-bold my-[20px] ml-[5%]">Videos</Text>
      </View>
      </View>
      </View>
      }

      renderItem={({item}) => <Item title={item.title} description={item.description} photoUrl={item.photoUrl} time={item.time}/>}
        keyExtractor={item => item.id}
  
    />
  </>
  )
}

export default VideoListing;