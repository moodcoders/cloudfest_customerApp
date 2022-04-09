import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const Calenders = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <CalendarPicker
                    startFromMonday={true}
                    minDate={new Date(2018, 1, 1)}
                    maxDate={new Date(2050, 6, 3)}
                    width={340}
                    height={342}
                    weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                    months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    previousTitle="<<"
                    nextTitle=">>"
                    todayBackgroundColor="#e6ffe6"
                    selectedDayColor="#66ff33"
                    selectedDayTextColor="#000000"
                    scaleFactor={375}
                    textStyle={{
                        color: 'black',
                    }}

                />
            </View>
        </SafeAreaView>

    );
};
export default Calenders;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
});
