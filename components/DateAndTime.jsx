import TimePicker from "./TimePicker";
import DatePicker from "./DatePicker";
import { View, StyleSheet, ImageComponent } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDateAndTime } from "@/services/slices/incidentSlice";


export default DateAndTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const dispatch = useDispatch();   
  const combineDateTime = (selectedDate, selectedTime) => {
    const combinedDateTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      selectedTime.getHours(),
      selectedTime.getMinutes()
    );
    dispatch(setDateAndTime(combinedDateTime.toISOString()));
  };

  useEffect(()=>{
    combineDateTime(date, time);
  },[date, time]);
  return (
    <View style={styles.container}>
      <DatePicker date={date} setDate={setDate} />
      <TimePicker time={time} setTime={setTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
});
