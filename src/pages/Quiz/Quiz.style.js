import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      cardContainer: {
          width: '80%',
          borderRadius: 15,
          borderColor: '#30dac4',
          borderWidth: 2,
          alignContent: 'center',
          minHeight: 350,
          backgroundColor: '#30dac425',
          position: 'relative',

      },
      card: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
      cardBody: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        lineHeight: 25,
      },
      cardBottom: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#30dac4',
        padding: 5,
        paddingVertical: 10,
        width: '100%',
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
      },
      cardBottomText: {
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          textShadowColor: '#000',
          textShadowRadius: 50,
      },
      correct: {
        marginTop: '10%',
      },
      incorrect: {
        backgroundColor: '#9E3F16',
      },
      questionCount: {
          position: 'absolute',
          top: 30,
          left: 30,
          fontWeight: 'bold',
          fontSize: 20,
      },
});