import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Refresh from "../assets/images/refresh.svg";
import SlantUpperArrow from "../assets/images/slantUpperArrow.svg";
import ListComponent from "@/components/home/ListComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  searchKeywordAsync,
  selectResult,
} from "@/features/search/searchSlice";

const DATA = [
  {
    id: "1",
    photoUrl: "https://reactnative.dev/img/tiny_logo.png",
    title: "First Item ",
    description:
      "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
    time: "2:30",
  },
  {
    id: "2",
    photoUrl: "https://reactnative.dev/img/tiny_logo.png",
    title: "Second Item ",
    description:
      "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor",
    time: "3:40",
  },
];

// const DATA3 =[result.mediaData]

const DATA2 = [
  {
    id: "1",
    topic: "All",
  },
  {
    id: "2",
    topic: "Arp Videos",
  },
  {
    id: "3",
    topic: "Mental Wellbeing",
  },
  {
    id: "4",
    topic: "Upcoming",
  },
];


const Item4 = ({ id, topic, onPress, isSelected }) => (
  <TouchableOpacity onPress={() => onPress(topic)}>
    <View
      className={`mx-[10px] ${
        isSelected ? "bg-[#E6ECF2]" : "bg-white"
      } rounded-2xl h-[100%] flex items-center justify-center px-[10px]`}
    >
      <Text>{topic}</Text>
    </View>
  </TouchableOpacity>
);



export default function search() {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);
  console.log("==================result=============", result);
  const [keyword, setKeyword] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  // const notSearched = false;
  const searched = true;
  const [searchResult, setSearchResult] = useState({})
  const handleTopicPress = (topic) => {
    setSelectedTopic(topic);
  };

  
  useEffect(()=>{
  setSearchResult(result);
  },[result])

  return (
    <View>
      <View className="mt-[12%] ml-[5%] flex-row items-center">
        <TouchableOpacity
          onPress={() => {
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row  bg-white h-[30px] ml-[4%] pl-[1%] w-[84%] rounded-md">
          <TouchableOpacity
            onPress={() => {
              dispatch(searchKeywordAsync(keyword));
            }}
          >
            <EvilIcons name="search" size={27} color="black" />
          </TouchableOpacity>
          <TextInput
            className=" ml-[1%] w-[92%]"
            onChangeText={setKeyword}
            value={keyword}
            placeholder="Search by author/video/document name "
          />
        </View>
      </View>

{searchResult && searchResult.mediaData && (
  <View className="w-[100%] h-[600px] bg-red-200">
  <Text>hello</Text>
  </View>
)}
    </View>
  );
}
