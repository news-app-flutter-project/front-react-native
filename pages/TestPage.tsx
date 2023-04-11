import TouchableText from '../component/TouchableText';
import React from 'react';
import {View} from 'react-native';
import TouchableIcon from '../component/TouchableIcon';

function TestPage(): JSX.Element {
  return (
    <View>
      <TouchableText
        text="assss"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon name="message" type="Entypo" />
      <TouchableIcon name="thumb-up" type="MaterialIcons" />
      <TouchableIcon name="thumb-down" type="MaterialIcons" />
      <TouchableIcon
        name="arrowleft"
        type="AntDesign"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon
        name="text-fields"
        type="MaterialIcons"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon
        name="bookmark"
        type="MaterialIcons"
        color="#FFED00"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon
        name="bookmark-outline"
        type="MaterialIcons"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon
        name="sticky-note-2"
        type="MaterialIcons"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon
        name="share"
        type="Octicons"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
    </View>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   text: {
//     color: 'white',
//     fontSize: 24,
//     lineHeight: 32,
//     fontWeight: '400',
//     textAlign: 'left',
//   },
//   input: {
//     color: 'white',
//     paddingVertical: 0,
//     outline: 'none',
//     borderBottomWidth: 2,
//     marginLeft: 5,
//     borderColor: 'white',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 24,
//     elevation: 3,
//     backgroundColor: 'white',
//     padding: 15,
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 12,
//   },
//   textBtn: {
//     color: 'white',
//     fontSize: 12,
//   },
// });

export default TestPage;
