import React from 'react';
import { StyleSheet, Text} from 'react-native';

function TextBlock({children, ...styles}) {
    if(!children){
        return (<Text style={styles.text}/>);
    }
    return (
        <Text style={styles.text} {...styles}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 0,
    },
    

})
export default TextBlock;