import React, {  } from 'react'
import { Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

function DateInputForm({toggle, startDate, endDate, setDate, mode}) {
    const date = [mode == "start-date"? startDate: endDate];
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        if (mode == "start-date")
        currentDate.setHours(0,0,0,0)
        else
        currentDate.setHours(22,59,59,999)
        toggle(false);

        if ((mode == "start-date" && currentDate.getTime() > endDate.getTime()) || mode == "end-date" && startDate.getTime() > currentDate.getTime()) {
            Alert.alert("Warning", "End date cannot be the day before Start Date")
            return;
        }

        setDate(currentDate);
    };

    
  return (
    
    <DateTimePicker
        testID="dateTimePicker"
        value={date[0]}
        mode={'date'}
        is24Hour={true}
        onChange={onChange}
    />
  )
}

export default DateInputForm