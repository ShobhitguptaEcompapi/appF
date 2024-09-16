import React, {useState} from 'react'
import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import BlueLock from "../../assets/images/bluelock.svg"
import { router } from 'expo-router';
import { Link } from 'expo-router';

export default function Lesson() {
  const [isArpSurveyNotFilled, setIsArpSurveyNotFilled] = useState(true);
  const [hasNotCompletedAnyLessonButFilledSurvey, setHasNotCompletedAnyLessonButFilledSurvey] = useState(false);
  const [hasCompleted2Lessons, setHasCompleted2Lessons] = useState(false);
  const [noLessonUnlocked, setNoLessonUnlocked] = useState(false);
  return (
    <ScrollView className="w-[100%] h-[79%]">


        {
        isArpSurveyNotFilled && 
        <View className="h-[72px] w-[90%] bg-white rounded-sm mx-auto mb-[5%] flex-row items-center ">
          <TouchableOpacity>
          <Image className=" ml-[5%]" source={require("./../../assets/images/edit.png")}></Image>
          </TouchableOpacity>
          <View>
            <Text>Complete</Text>
            <Text className="text-[#004178] font-semibold text-lg">Before ARP Survey now</Text>
          </View>
          <TouchableOpacity>
          <View className="bg-[#1973BE] ml-[2%] w-[63%] h-[50%] flex-row justify-center items-center rounded-xl">
          <Text className="font-semibold text-white text-lg">Start</Text>
          <Image className="mr-[4%]" source={require("./../../assets/images/arrow-right.png")}></Image>
          </View>
          </TouchableOpacity>
        </View>

        
        }


          {/* Card component  */}

          {
            (hasNotCompletedAnyLessonButFilledSurvey || isArpSurveyNotFilled) &&
          <View className="flex items-center">
          <View className="w-[91%] h-[30px] bg-[#DEE8FC80] flex-row items-center">
            <Image className="ml-[2%]" source={require("./../../assets/images/ranking.png")}></Image>
            <Text className="ml-[2%]">Complete </Text>
            <Text className="font-bold">before ARP survey</Text>
            <Text className="ml-[2%]">to start</Text>
            <Image className="ml-[3%]" source={require("./../../assets/images/unlock.png")}></Image>
            <Text className="ml-[1%] text-[#278015]">Unlocked </Text>
          </View>
          <View className="h-[430px] w-[100%] flex items-center">
        <ImageBackground className="h-[100%] w-[95%] ml-[5%] "
      source={require("./../../assets/images/completeSurvey.png")}
    >
        {/* Transparent Overlay */}
        <View style={{ position: 'absolute', top: '70%', left: 0, right: '5%', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        
        {/* Content on top of the overlay */}
        <Text className="text-white font-bold z-20 mt-[84%] text-xl mx-auto ">Am I a Bully ?</Text>
        <View className="flex-row z-20 mt-[2%] items-center mx-auto">
        <Text className="text-white ml-[2%] ">Lesson 3   </Text>
        <View className=" h-1 w-1 bg-white rounded-lg"></View>
        <Text className="text-white ml-[2%] "> 4 videos  </Text>
        <View className=" h-1 w-1 bg-white rounded-lg"></View>
        <Text className="text-white ml-[2%] "> 35 min watch </Text>
        </View>
        <View className=" w-[40%] h-11 z-20 mt-[2%] bg-white flex-row justify-center items-center mx-auto rounded-2xl">
<Text className="text-[#1973BE] font-bold">Complete  Survey</Text>
        </View>
        {/* <Text className="text-white font-bold z-20 mt-[86%]  ">4 videos</Text>
        <Text className="text-white font-bold z-20 mt-[86%]  ">35 min watch</Text> */}
    </ImageBackground>
    </View>
    </View>
}

    {hasCompleted2Lessons &&
    <View className="flex items-center">
          <View className="w-[90%] h-[30px] bg-[#FDF0C866] flex-row items-center">
            <Image className="ml-[2%]" source={require("./../../assets/images/ranking.png")}></Image>
            <Text className="ml-[2%]">Start with </Text>
            <Text className="font-bold">Lesson 3 now</Text>
            <Image className="ml-[23%]" source={require("./../../assets/images/unlock.png")}></Image>
            <Text className="ml-[1%] text-[#278015]">Unlocked </Text>
          </View>
          <View className="h-[430px] w-[100%] flex items-center">
        <ImageBackground className="h-[100%] w-[95%] ml-[5%] "
      source={require("./../../assets/images/bullyProof.png")}
    >
        {/* Transparent Overlay */}
        <View style={{ position: 'absolute', top: '70%', left: 0, right: '5%', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        
        {/* Content on top of the overlay */}
        <Text className="text-white font-bold z-20 mt-[84%] text-xl mx-auto ">Stop Bullying</Text>
        <View className="flex-row z-20 mt-[2%] items-center mx-auto">
        <Text className="text-white ml-[2%] ">Lesson 3   </Text>
        <View className=" h-1 w-1 bg-white rounded-lg"></View>
        <Text className="text-white ml-[2%] "> 4 videos  </Text>
        <View className=" h-1 w-1 bg-white rounded-lg"></View>
        <Text className="text-white ml-[2%] "> 35 min watch </Text>
        </View>
        <View className=" w-[40%] h-11 z-20 mt-[2%] bg-white flex-row justify-center items-center mx-auto rounded-2xl">
        <Image className="mr-[4%]" source={require("./../../assets/images/playButton.png")}></Image>
<Text onPress={() => {router.push("/components/test")}} className="text-[#1973BE] font-bold">Start Lesson</Text>
        </View>
        {/* <Text className="text-white font-bold z-20 mt-[86%]  ">4 videos</Text>
        <Text className="text-white font-bold z-20 mt-[86%]  ">35 min watch</Text> */}
    </ImageBackground>
    </View>
    </View>
}


{/* Other Unlocked Lessons */}
{hasCompleted2Lessons &&
<View className="w-[90%] h-[306px] bg-white mx-auto my-[70px]">
  <Text className="font-bold text-2xl my-[3%] ml-[6%]">Other unlocked Lessons</Text>
  <View className="w-[100%] h-[37%] flex-row">
  <Image className="h-[100%] w-[25%] rounded-2xl ml-[3%]" source={require("./../../assets/images/completeSurvey.png")}></Image>
  <View>
    <Text className="font-bold text-xl ml-[6%]">Am I A bully ?</Text>
    <View className="flex-row items-center justify-center ml-[5%]">
<Text>Lesson 1  </Text>
<View className="h-1 w-1 rounded-xl bg-black"></View>
<Text> 5 Videos </Text>
<View className="h-1 w-1 rounded-xl bg-black"></View>
<Text>  20 min watch</Text>
    </View>
    <View className="bg-[#E6ECF2] w-[70%] h-[40%] ml-[10%] mt-[6%] rounded-xl flex-row items-center justify-center">
    <Image className="h-[50%] w-[15%] rounded-2xl ml-[3%]" source={require("./../../assets/images/playButton.png")}></Image>
    <Text className="text-[#1973BE] font-bold text-lg ml-[3%]">Start Lesson</Text>
    </View>
  </View>
  
  </View>
  <View className="h-[3%]"></View>
  <View className="w-[100%] h-[37%] flex-row">
  <Image className="h-[100%] w-[25%] rounded-2xl ml-[3%]" source={require("./../../assets/images/Questions.png")}></Image>
  <View>
    <Text className="font-bold text-xl ml-[6%]">Am I A bully ?</Text>
    <View className="flex-row items-center justify-center ml-[5%]">
<Text>Lesson 2  </Text>
<View className="h-1 w-1 rounded-xl bg-black"></View>
<Text> 5 Videos </Text>
<View className="h-1 w-1 rounded-xl bg-black"></View>
<Text>  35 min watch</Text>
    </View>
    <View className="bg-[#E6ECF2] w-[70%] h-[40%] ml-[10%] mt-[6%] rounded-xl flex-row items-center justify-center">
    <Image className="h-[50%] w-[15%] rounded-2xl ml-[3%]" source={require("./../../assets/images/playButton.png")}></Image>
    <Text className="text-[#1973BE] font-bold text-lg ml-[3%]">Start Lesson</Text>
    </View>
  </View>
  
  </View>
</View>
}


{/* More Lessons */}

{noLessonUnlocked? (
<View className="bg-white w-[90%] h-[60px] mx-auto flex-row items-center justify-center">
<BlueLock />
<Text className="text-[#1973BE] font-semibold">   There are no unlocked lessons right now</Text>
</View>
) : null}
<View className={`bg-white ${!hasCompleted2Lessons? "h-[640px]" : "h-[400px]"} w-[90%] mx-auto mt-[5%]`}>
<Text className="font-bold text-2xl my-[4%] ml-[5%]">More Lessons</Text>
<View className={`${!hasCompleted2Lessons? "h-[255px]" :"h-[510px]" } w-[95%] mx-auto`}>

{(!hasCompleted2Lessons ) &&
<View className="flex-row h-[247px] ">
<View className="w-[48%] bg-green-300">

<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/Questions.png")}
    >
     <Image className="ml-[2%] mt-[93%] z-20 absolute" source={require("./../../assets/images/Lock.png")}></Image> 
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
<Text className="text-white  z-20 mt-[110%] text-xl ml-[6%] ">Lesson 2</Text>
<Text className="text-white font-bold z-20 mt-[2%] text-xl ml-[6%] ">Stop Bullying</Text>
</ImageBackground> 

</View>
<View className="w-[4%]"></View>
<View className="w-[48%] bg-green-300">

<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/bullyProof.png")}
    >
     <Image className="ml-[2%] mt-[93%] z-20 absolute" source={require("./../../assets/images/Lock.png")}></Image> 
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
<Text className="text-white  z-20 mt-[110%] text-xl ml-[6%] ">Lesson 3</Text>
<Text className="text-white font-bold z-20 mt-[2%] text-xl ml-[6%] ">Stop Bullying</Text>
</ImageBackground>  
</View>
</View>
}

<View className="h-[16px]"></View>
<View className="flex-row h-[247px] ">
<View className="w-[48%] bg-green-300">
<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/handShakes.png")}
    >
     <Image className="ml-[2%] mt-[93%] z-20 absolute" source={require("./../../assets/images/Lock.png")}></Image> 
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
<Text className="text-white  z-20 mt-[110%] text-xl ml-[6%] ">Lesson 4</Text>
<Text className="text-white font-bold z-20 mt-[2%] text-xl ml-[6%] ">Stop Bullying</Text>
</ImageBackground> 
</View>
<View className="w-[4%]"></View>
<View className="w-[48%] bg-green-300">
<ImageBackground className="h-[100%] w-[100%]"
      source={require("./../../assets/images/sad.png")}
    >
     <Image className="ml-[2%] mt-[93%] z-20 absolute" source={require("./../../assets/images/Lock.png")}></Image> 
<View style={{ position: 'absolute', top: '70%', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
<Text className="text-white  z-20 mt-[110%] text-xl ml-[6%] ">Lesson 5</Text>
<Text className="text-white font-bold z-20 mt-[2%] text-xl ml-[6%] ">Stop Bullying</Text>
</ImageBackground> 
</View>
</View>
</View>

{/* View All Lessons */}

{!noLessonUnlocked?(<TouchableOpacity onPress={() => { router.push("/viewAllLessons")}}><View className="mx-auto h-[40px] w-[90%] mt-[75%] flex items-center justify-center bg-[#E6ECF2]">
  <Text className="text-[#1973BE] font-semibold text-lg">View All Lessons</Text>
</View></TouchableOpacity>):null}

</View>

<View className="mb-[30%]"></View>

        </ScrollView>
  )
}