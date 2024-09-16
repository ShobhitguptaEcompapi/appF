import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import NoResultFound from "../assets/SVG/NoResultFound.svg"
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Refresh from "../assets/images/refresh.svg";
import SlantUpperArrow from "../assets/images/slantUpperArrow.svg";
import ListComponent from "@/components/home/ListComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  searchKeywordAsync,
  selectisResultRecieved,
  selectlessonData,
  selectmediaData,
  selectResult,
  selectTopics,
} from "@/features/search/searchSlice";


const DATA$ = [
  {
    lessonData: [
      {
        courseId: "course1",
        createdAt: "2024-09-13T19:08:44.319Z",
        description: "what goes inside victims mind",
        lessonId: "lesson7",
        sequenceNumber: 4,
        title: "mental aspects of bullying",
        updatedAt: "2024-09-13T19:08:44.319Z",
      },
      {
        courseId: "course1",
        createdAt: "2024-09-13T19:08:44.319Z",
        description:
          "the lesson explains you measures u can take to protect yourself",
        lessonId: "lesson5",
        sequenceNumber: 3,
        title: "what to do when u are being bullied",
        updatedAt: "2024-09-13T19:08:44.319Z",
      },
      {
        courseId: "course1",
        createdAt: "2024-09-13T19:08:44.319Z",
        description:
          "This lesson explains different types of bullying at different places like schools, workplace, etc",
        lessonId: "lesson3",
        sequenceNumber: 2,
        title: "How bullying happens at different places",
        updatedAt: "2024-09-13T19:08:44.319Z",
      },
      {
        courseId: "course1",
        createdAt: "2024-09-13T19:08:44.319Z",
        description: "This explains what is bullying",
        lessonId: "lesson1",
        sequenceNumber: 1,
        title: "what is bullying?",
        updatedAt: "2024-09-13T19:08:44.319Z",
      },
    ],
    mediaData: [
      {
        author: "Pranjal",
        category: "Mental wellbeing",
        courseId: "",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "you are a bully?",
        lessonId: "",
        mediaId: "media6",
        path: "/path/to/document1",
        sequenceNumber: null,
        thumbnailImage: "/path/to/thumb2",
        titleName: "you are a bully?",
        type: "document",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
      {
        author: "Harsh",
        category: "Mental wellbeing",
        courseId: "",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "how to be a bully",
        lessonId: "",
        mediaId: "media5",
        path: "/path/to/video1",
        sequenceNumber: null,
        thumbnailImage: "/path/to/thumb1",
        titleName: "how to be a bully",
        type: "video",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
      {
        author: "ankur",
        category: "Celebrity",
        courseId: "",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "Bully bully bully",
        lessonId: "",
        mediaId: "media7",
        path: "/path/to/video1",
        sequenceNumber: null,
        thumbnailImage: "/path/to/thumb1",
        titleName: "Bully bully bully",
        type: "video",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
      {
        author: "Pranjal",
        category: "Science",
        courseId: "course2",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "harsh is bully",
        lessonId: "lesson2",
        mediaId: "media4",
        path: "/path/to/document1",
        sequenceNumber: 2,
        thumbnailImage: "/path/to/thumb2",
        titleName: "harsh is bully",
        type: "video",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
      {
        author: "Tushar",
        category: "lesson",
        courseId: "course1",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "what is bully",
        lessonId: "lesson1",
        mediaId: "media1",
        path: "/path/to/video1",
        sequenceNumber: 1,
        thumbnailImage: "/path/to/thumb1",
        titleName: "what is bully",
        type: "video",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
      {
        author: "shobhit",
        category: "Celebrity",
        courseId: "",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "What is bullyproof?",
        lessonId: "",
        mediaId: "media8",
        path: "/path/to/document1",
        sequenceNumber: null,
        thumbnailImage: "/path/to/thumb2",
        titleName: "What is bullyproof",
        type: "video",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
      {
        author: "Tushar",
        category: "Science",
        courseId: "lesson",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "why is bully?",
        lessonId: "lesson2",
        mediaId: "media2",
        path: "/path/to/video1",
        sequenceNumber: 1,
        thumbnailImage: "/path/to/thumb2",
        titleName: "why is bully?",
        type: "video",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
      {
        author: "Tushar",
        category: "lesson",
        courseId: "course1",
        createdAt: "2024-09-13T19:08:44.343Z",
        description: "Who is bully",
        lessonId: "lesson1",
        mediaId: "media3",
        path: "/path/to/video1",
        sequenceNumber: 2,
        thumbnailImage: "/path/to/thumb1",
        titleName: "Who is bully",
        type: "video",
        updatedAt: "2024-09-13T19:08:44.343Z",
      },
    ],
    success: true,
  },
];

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

const Item1 = ({ id, photoUrl, title, description, time }) => (
  <View className="h-[40px] w-[100%] flex-row items-center pl-[5%]">
    <Refresh></Refresh>
    <Text className="ml-[5%] font-semibold">Bullying</Text>
  </View>
);

const Item2 = ({ id, photoUrl, title, description, time }) => (
  <View className="h-[40px] w-[100%] flex-row items-center pl-[5%]">
    <SlantUpperArrow></SlantUpperArrow>
    <Text className="ml-[5%] font-semibold">Bullying</Text>
  </View>
);

const Item4 = ({ id, topic, onPress, isSelected }) => (
  <TouchableOpacity onPress={() => onPress(topic)}>
    <View
      className={`mx-[10px] ${
        isSelected ? "bg-[#E6ECF2]" : "bg-white"
      } rounded-2xl h-[90%] flex items-center justify-center px-[10px]`}
    >
      <Text>{topic}</Text>
    </View>
  </TouchableOpacity>
);

export default function search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const result = useSelector(selectResult);
  const lessonData = useSelector(selectlessonData);
  const mediaData = useSelector(selectmediaData);
  const isResultRecieved = useSelector(selectisResultRecieved);
  const searchResponseTopics = useSelector(selectTopics);
  console.log("==================result=============", result);
  // console.log("==================mediaData=============", result.mediaData);
  // console.log("==================searchResponseTopics=============", searchResponseTopics);

  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [lastSearchedKeyword, setLastSearchedKeyword] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [searched , setSearched] = useState(false)
  const handleTopicPress = (topic) => {
    setSelectedTopic(topic);
  };
  const handleViewAllLessons = (title) => {
    setSelectedTopic(title);
  };

  const filteredData =
    selectedTopic === "All"
      ? [...mediaData, ...lessonData] 
      : selectedTopic === "lesson"
      ? lessonData 
      : selectedTopic === "ARP Videos"
      ? mediaData.filter((item) => item.category.includes("lesson"))
      : mediaData.filter((item) => item.category.includes(selectedTopic));


  return (
    
    <View className="h-[100%] w-[100%]">
      <View className="mt-[7%]  ml-[5%] py-[1%] flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            }
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row  bg-white h-[40px] ml-[4%] pl-[1%] w-[84%] rounded-md">
          <TouchableOpacity
            onPress={() => {
              if (keyword.trim()) { 
              dispatch(searchKeywordAsync(keyword));
              setLastSearchedKeyword(keyword);  // Store the last searched keyword
              setKeyword("");  // Clear the input field after search
              setSearched(true);
            }
            }}
          >
            <View className="my-auto mb-[12px]">
            <EvilIcons name="search" size={27} color="black" />
            </View>
          </TouchableOpacity>
          <TextInput
            className=" ml-[1%] w-[92%]"
            onChangeText={setKeyword}
            value={keyword}
            placeholder={lastSearchedKeyword ? `${lastSearchedKeyword}` : "Search by author/video/document name"
            } 
          />
        </View>
      </View>

    <View className=" h-[93%] pb-[10px]">
      

      {(Object.keys(mediaData).length === 0) && (Object.keys(lessonData).length === 0) && (
        <View className=" h-[100%] flex items-center justify-center">
        <NoResultFound width={"60%"} height={"30%"} />
        <Text className="font-semibold text-lg">No results found</Text>
        <Text className="font-medium">Try searching for something</Text>
        <Text className="font-medium">else or try another name</Text>
          </View>
      )}

      {!searched && (
        <>
          <FlatList
            className="w-[100%]  bg-white mt-[30px]"
            data={DATA}
            ListHeaderComponent={
              <Text className="ml-[5%] mt-[10px] font-light">
                Recent Searches
              </Text>
            }
            renderItem={({ item }) => <Item1 />}
            keyExtractor={(item) => item.id}
          />
          <FlatList
            className="w-[100%]  bg-white mt-[10px]"
            data={DATA}
            ListHeaderComponent={
              <Text className="ml-[5%] mt-[10px] font-light">
                Try These Searches
              </Text>
            }
            renderItem={({ item }) => <Item2 />}
            keyExtractor={(item) => item.id}
          />
        </>
      )}

      {searched && result && (Object.keys(mediaData).length > 0) && (Object.keys(lessonData).length > 0) && searchResponseTopics.length > 1 && (
        <View className=" h-[100%]  flex items-center justify-center">
          <View className="h-[60px]  flex justify-center w-[100%] pt-[3%]  pl-[2%]">
          <FlatList
            className="h-[100%]"
            horizontal
            showsHorizontalScrollIndicator={false}
            data={searchResponseTopics}
            renderItem={({ item, i }) => (
              <Item4
                topic={item}
                onPress={handleTopicPress}
                isSelected={item === selectedTopic}
              />
            )}
            keyExtractor={(item,i) => i.toString()}
          />
          </View>

{selectedTopic === "All" ? (
  
      <FlatList className="mb-[30px]"
        data={searchResponseTopics.filter((topic) => topic !== "All")} 
        renderItem={({ item }) => {
          const filteredData =
      item === "lesson" 
        ? lessonData 
        : item === "ARP Videos"
        ? mediaData.filter((mediaItem) =>
            mediaItem.category.includes("lesson")
          )
        : mediaData.filter((mediaItem) =>
            mediaItem.category.includes(item)
          ); 
          return <ListComponent key={item} title={item} data1={filteredData} selectedTopic="All" onViewAllLessons={handleViewAllLessons}/>;
        }}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    ) : (
      <View className="h-[90%] pb-[5%]">
      <ListComponent title={selectedTopic} data1={filteredData} selectedTopic={selectedTopic}/>
      <View className="h-[80%]"></View>
      </View>
    )}
    
    </View>
      )}
      </View>
    </View>
  );
}
