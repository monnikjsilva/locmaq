import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CategoriesHome({data}){
    return(
        <View style={styles.container}>

            <TouchableOpacity onPress={() => {}} style={styles.areabtn}> 
                <Image style={styles.img} source={{uri: data.imagem}}/>
                <Text style={styles.txtCat}>SERVIÇO</Text>
                <Text style={styles.txtProd}>NOME PRODUTO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.areabtn}> 
                <Image style={styles.img} source={{uri: data.imagem}}/>
                <Text style={styles.txtCat}>SERVIÇO</Text>
                <Text style={styles.txtProd}>NOME PRODUTO</Text>
            </TouchableOpacity>

        </View>      
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    areabtn: {
        width: '46%',
        marginHorizontal: '2%',
    },
    txtCat: {
        position: 'absolute',
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#ffa500',
        padding: 3, 
        marginTop: 8,
        marginLeft: 8
    },
    img: {
        width: '100%',
        height: 140,
        borderWidth: 3,
        borderColor: '#ffa500',
        borderRadius: 10,
        flexDirection: 'row'
    },
    txtProd: {
        fontSize: 16,
        textAlign: 'center',
        color: '#222',
        marginTop: 8,
        marginBottom: 10,
        height: 40
    }
})