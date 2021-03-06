import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Categories({data}){
    return(
      <View style={styles.areaCat}>

        <Image style={styles.img} source={{uri: data.imagem}}/>
        
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitulo}>{data.name}</Text>

          <FontAwesome
            style={{marginRight: 20}}
            name='caret-right'
            size= {60}
            color="#ffa500"
          />
        </TouchableOpacity>
  
      </View>
    );
}

const styles = StyleSheet.create ({
  areaCat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    borderBottomWidth: 2,
    borderColor: '#ddd',
    paddingLeft: 20
  },
  btn: {
    flex: 1,
    height: 90,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnTitulo: {
    color: '#222',
    fontSize: 18,
    marginLeft:10,
    textTransform: 'uppercase'
  },
  img: {
    width: 75,
    height: 75,
    marginRight: 10
  }
})