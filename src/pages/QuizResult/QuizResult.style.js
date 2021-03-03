import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: '100%',
        opacity: 0.1,
        position: 'absolute',
      },
      title: {
          fontSize: 40,
          lineHeight: 40,
      },
      smiley: {
        transform: [{ rotate: '90deg'}],
      },
      smileyTxt: {
          color: 'green',
          fontSize: 40,
          lineHeight: 40,
      },
      resultWrap: {
        marginVertical: '15%',
        backgroundColor: '#30dac450',
        padding: 15,
        borderRadius: 150,
        width: 150,
      },
      result: {
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#9E3F16',
      },
      resultOf: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        textShadowColor: '#30dac4',
        textShadowRadius: 50,
      },
      total: {
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#9E3F16',
      },
});