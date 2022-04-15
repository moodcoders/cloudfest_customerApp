import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTime() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState<any>('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedValue: any) => {
        console.log(selectedValue)
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
            const currentDate = selectedValue || new Date();
            setDate(new Date(currentDate));
            setMode('time');
            setShow(Platform.OS !== 'ios'); // to show time
        } else {
            const currentTime = selectedValue || new Date();
            setDate((new Date(currentTime)));
            setShow(Platform.OS === 'ios'); // to hide back the picker
            setMode('date'); // defaulting to date for next open
        }
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        console.log("show date picker");
        showMode('date');
    };

    return (
        <View >
            <TouchableOpacity style={styles.serviceBtn} onPress={showDatepicker}>
                <Text style={styles.btnName} >{date.toLocaleDateString()} &#38; {date.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    display="default"
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    serviceBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 20,
        backgroundColor: '#c9dafa',
        marginTop: 15,
        alignSelf: 'center'

    },
    btnName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 15
    },

});
