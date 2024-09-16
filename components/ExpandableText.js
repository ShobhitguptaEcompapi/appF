import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExpandableText = ({ text, numberOfLines, type }) => {
    const [expanded, setExpanded] = useState(false);
    const readMoreText = expanded ? 'ReadLess' : 'ReadMore';

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const minLength = 10;
    const maxLength = 100;

    // Determine text based on expanded state
    const displayText = expanded
        ? text
        : (((text).substring(0, 30)) + '...')

    return (
        <View style={styles.container}>
            <Text
                // numberOfLines={expanded ? undefined : numberOfLines}
                style={type === "type" ? styles.typeText : styles.detailText}
                ellipsizeMode='tail'
            >
                {displayText}
                {text.length > 0 && (
                    <Text style={styles.readMore} onPress={toggleExpanded}>
                        {` ${readMoreText}`}
                    </Text>
                )}
            </Text>
            {/* {text.length > 0 && (
                <TouchableOpacity onPress={toggleExpanded}>
                    <Text style={styles.readMore}>
                        {expanded ? 'Read Less' : 'Read More'}
                    </Text>
                </TouchableOpacity>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    typeText: {
        flex: 1, // Allow the text to take up remaining space
        marginBottom: 10,
        fontSize: 12,
        fontWeight: "500",
        color: '#999A9A',
        flexWrap: "wrap",
        // backgroundColor: "red"
        // overflow: "hidden",
    },
    detailText: {
        flex: 1, // Allow the text to take up remaining space
        marginTop: 4,
        marginBottom: 10,
        fontSize: 12,
        fontWeight: "500",
        color: '#999A9A',
        flexWrap: "wrap"
        // overflow: "hidden",
    },
    readMore: {
        color: '#1973BE',
        fontSize: 12,
        fontWeight: "500",
        textDecorationLine: 'underline',
        marginLeft: 2, // Add space between text and link
    },
});

export default ExpandableText;
