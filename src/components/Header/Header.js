import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './Header.style';

const canGoBack = (props) => {
    return props.scene.route.name !== "QuizResult" && props.previous
}

export default function Header(props) {
    return (
      <Appbar.Header style={styles.container}>
        {canGoBack(props) ? <Appbar.BackAction style={styles.backBtn} color={'#fff'} onPress={props.navigation.goBack} /> : null}
        <Appbar.Content titleStyle={styles.title} title={props.scene.descriptor.options.title} />
      </Appbar.Header>
    );
  }