import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './DeckCard.style';

export default function DeckCard(props) {
    return (
        <Card style={styles.container} onPress={props.onPress}>
            <Card.Content>
                <Title style={styles.title}> { props.title ? props.title : '' } </Title>
                <Paragraph style={styles.count}> { props.cardsCount ? props.cardsCount + ' Cards' : 'No cards yet' } </Paragraph>
            </Card.Content>
        </Card>
    );
  }