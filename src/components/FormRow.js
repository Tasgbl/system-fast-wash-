import React from 'react';
import {StyleSheet, View} from 'react-native';

const FormRow = props => {
    const {children}=props;
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles=StyleSheet.create ({
        container: {
            padding:10,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10,
            elevation: 1,
                        
        }
})

export default FormRow; 