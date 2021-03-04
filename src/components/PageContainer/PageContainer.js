import React from 'react';
import { View, Image, Text } from 'react-native'
import styles from './PageContainer.style';

const background = require('../../assets/imgs/background.png');

export default function PageContainer (props) {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background}></Image>
        {props.children}
      </View>
    );
}