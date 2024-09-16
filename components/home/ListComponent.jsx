import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const DATA1 = [
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
    }
  ];

  const Item3 = ({id,photoUrl,title,description,time}) => (
    <View className="h-[130px]">
        <View className="w-[90%] mx-auto flex-row mb-[30px]">
        <Image
          className="h-[110px] w-[22%] rounded-lg "
          source={{
            uri: `${photoUrl}`,
          }}
        />
        <View className="w-[78%] ml-[10%] h-[110px]">
          <View className="flex-row">
          <Text className=" font-bold text-base">{title}</Text>
          <Text className="ml-[70%] absolute">{time}</Text>
          </View>
          <Text className="w-[92%] text-thin h-[20px]" numberOfLines={2}
          ellipsizeMode="tail">{description}</Text>
          <View className=" w-[40%] h-[40px] z-20 mt-[1%] bg-[#E6ECF2] flex-row justify-center items-center  rounded-lg">
          <Image className="mr-[4%]" source={require("./../../assets/images/playButton.png")}></Image>
          <Text className="text-[#1973BE] font-bold">Watch</Text>
          </View>
        </View>
        </View>
        </View>
  );


export default function ListComponent({ title, data1, selectedTopic, onViewAllLessons }) {
  const displayedItems = selectedTopic === "All" ? data1.slice(0, 2) : data1;
  // const topTwoItems = data1.slice(0, 2);
  return (
    <View>
       <FlatList className=" bg-[#FFFFFF] pb-[200px] mt-[15px] h-[380px]"
      data={displayedItems}
      ListHeaderComponent={
      <View className="w-[100%] ">
      <Text className="text-lg font-bold my-[20px] ml-[6%]">{title}</Text>
      </View>
      }
      ListFooterComponent={
        selectedTopic === "All" ? (
        <View>
          <TouchableOpacity onPress={() => onViewAllLessons(title)}>
         <View className="mx-auto h-[40px] w-[90%] flex items-center justify-center bg-[#E6ECF2]">
  <Text className="text-[#1973BE] font-semibold text-lg">View All Lessons</Text>
</View>
</TouchableOpacity>
        </View>
        ) : null
      }
      renderItem={({item, i}) => <Item3 title={item.title || item.titleName} description={item.description} photoUrl={"https://reactnative.dev/img/tiny_logo.png"} time={item.time}/>}
        keyExtractor={(item,i) => i.toString()}
  
    />
    </View>
  )
}