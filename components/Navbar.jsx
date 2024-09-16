import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Navbar = ({ name, onIcon1Press, onIcon2Press }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.greeting}>
                Hello, <Text style={styles.name}>{name}</Text>
            </Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={onIcon1Press} style={styles.icon}>
                    <Image style={styles.size}
                        source={require("../assets/images/searchIcons.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onIcon2Press} style={styles.icon}>
                    <Image style={styles.size}
                        source={require("../assets/images/BellIcon.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        marginTop: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        // backgroundColor: '#fff',
        // elevation: 3,
        // shadowColor: '#000',
        // shadowOpacity: 0.1,
        // shadowRadius: 5,
    },
    greeting: {
        fontSize: 18,
        color: '#333',
    },
    name: {
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 16, // Space between icons
    },
    size: {
        height: 20,
        width: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
    }
});

export default Navbar;
