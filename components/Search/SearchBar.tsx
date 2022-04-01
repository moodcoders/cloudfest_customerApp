import React from 'react'
import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput } from 'react-native';
import { View } from '../Themed'



function query(query: any) {
    throw new Error('Function not implemented.');
}

function SearchBar() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    console.log(query);

    return (
        <View style={[styles.container, styles.shadowProp]}>
            {/* Search Icon */}
            <Feather
                name="search"
                size={20}
                color="#599bd8"
                style={{ marginLeft: 10 }}
            />
            {/* Input field */}
            <TextInput
                style={styles.serviceInput}
                placeholder="Service Name"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "92%",
        marginRight: 20,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    serviceInput: {
        fontSize: 20,
        marginLeft: 10,
        color: '#a6b0c5',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

});


export default SearchBar;


