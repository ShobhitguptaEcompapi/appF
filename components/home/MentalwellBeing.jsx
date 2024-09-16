import { View, Text, FlatList, Image, ImageBackground } from 'react-native'
import React from 'react'

export default function MentalwellBeing() {
  return (
    <FlatList className=" bg-[#FFFFFF] pb-[30px]"
      
      ListHeaderComponent={ 
      <View className="flex items-center">
        
        <View className="h-[430px] w-[100%] flex items-center">
      <ImageBackground className="h-[100%] w-[95%] ml-[5%] "
    source={require("./../../assets/images/completeSurvey.png")}
  >
      {/* Transparent Overlay */}
      <View style={{ position: 'absolute', top: '70%', left: 0, right: '5%', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
      
      {/* Content on top of the overlay */}
      <Text className="text-white font-bold z-20 mt-[84%] text-xl mx-auto ">Mental Wellbeing video</Text>
      <View className="flex-row z-20 mt-[2%] items-center mx-auto">
      
      <View className="bg-yellow-200 h-[20px] w-[22%] rounded-lg mr-[4%] flex items-center">
        <Text className="text-[#1973BE] font-semibold">New Video</Text>
      </View>
      <View className=" h-1 w-1 bg-white rounded-lg"></View>
      <Text className="text-white ml-[2%] "> 35:15 </Text>
      </View>
      <View className=" w-[33%] h-11 z-20 mt-[2%] bg-white flex-row justify-center items-center mx-auto rounded-2xl">
      <Image className="h-[22px] w-[20%] rounded-2xl ml-[1%]" source={require("./../../assets/images/playButton.png")}></Image>
<Text className="text-[#1973BE] font-bold text-lg pl-[5%]">Watch</Text>
      </View>
      
      {/* <Text className="text-white font-bold z-20 mt-[86%]  ">4 videos</Text>
      <Text className="text-white font-bold z-20 mt-[86%]  ">35 min watch</Text> */}
  </ImageBackground>
  </View>

  <View className={`bg-white h-[640px]  w-[90%] mx-auto mt-[5%]`}>
<Text className="font-bold text-2xl my-[4%] ml-[5%]">More Lessons</Text>
<View className="h-[510px] w-[95%] mx-auto">


<View className="flex-row h-[247px] ">
<View className="w-[48%] bg-green-300">

<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/Questions.png")}
    >
     <Image className="ml-[40%] mt-[50%] h-[13%] w-[21%] z-20 absolute" source={require("./../../assets/images/playButton.png")}></Image> 
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />

<Text className="text-white font-bold z-20 mt-[110%] text-xl ml-[6%] ">Stop Bullying</Text>
<Text className="text-white  z-20 mt-[2%] text-xl ml-[6%] ">Lesson 2</Text>
</ImageBackground> 

</View>
<View className="w-[4%]"></View>
<View className="w-[48%] bg-green-300">

<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/bullyProof.png")}
    >
     <Image className="ml-[40%] mt-[50%] h-[13%] w-[21%] z-20 absolute" source={require("./../../assets/images/playButton.png")}></Image> 
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
<Text className="text-white font-bold z-20 mt-[110%] text-xl ml-[6%] ">Stop Bullying</Text>
<Text className="text-white  z-20 mt-[2%] text-xl ml-[6%] ">Lesson 2</Text>
</ImageBackground>  
</View>
</View>


<View className="h-[16px]"></View>
<View className="flex-row h-[247px] ">
<View className="w-[48%] bg-green-300">
<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/handShakes.png")}
    >
     <Image className="ml-[40%] mt-[50%] h-[13%] w-[21%] z-20 absolute" source={require("./../../assets/images/playButton.png")}></Image>
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
<Text className="text-white font-bold z-20 mt-[110%] text-xl ml-[6%] ">Stop Bullying</Text>
<Text className="text-white  z-20 mt-[2%] text-xl ml-[6%] ">Lesson 2</Text>
</ImageBackground> 
</View>
<View className="w-[4%]"></View>
<View className="w-[48%] bg-green-300">
<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/sad.png")}
    >
     <Image className="ml-[40%] mt-[50%] h-[13%] w-[21%] z-20 absolute" source={require("./../../assets/images/playButton.png")}></Image> 
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
<Text className="text-white font-bold z-20 mt-[110%] text-xl ml-[6%] ">Stop Bullying</Text>
<Text className="text-white  z-20 mt-[2%] text-xl ml-[6%] ">Lesson 2</Text>
</ImageBackground> 
</View>
</View>
</View>


</View>
  </View>}
      />
  )
}