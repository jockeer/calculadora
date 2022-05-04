import React from 'react'
import { Text, View } from 'react-native';
import { BotonCal } from '../components/BotonCal';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const { numero, 
        numeroAnterior, 
        limpiar, 
        positivoNegativo, 
        del, 
        dividir,
        armarNumero, 
        multiplicar, 
        restar,
        sumar,
        calcular } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
            (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
            }
           
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{ numero }</Text>

            <View style={styles.fila}>
                <BotonCal texto='C' color="#9B9B9B" action={limpiar}/>
                <BotonCal texto='+/-' color="#9B9B9B" action={positivoNegativo}/>
                <BotonCal texto='del' color="#9B9B9B" action={del}/>
                <BotonCal texto='/' color="#FF9427" action={dividir}/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto='7' action={armarNumero}/>
                <BotonCal texto='8' action={armarNumero}/>
                <BotonCal texto='9' action={armarNumero}/>
                <BotonCal texto='X' color="#FF9427" action={multiplicar}/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto='4' action={armarNumero}/>
                <BotonCal texto='5' action={armarNumero}/>
                <BotonCal texto='6' action={armarNumero}/>
                <BotonCal texto='-' color="#FF9427" action={restar}/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto='1' action={armarNumero}/>
                <BotonCal texto='2' action={armarNumero}/>
                <BotonCal texto='3' action={armarNumero}/>
                <BotonCal texto='+' color="#FF9427" action={sumar}/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto='0' ancho action={armarNumero}/>
                <BotonCal texto='.'action={armarNumero}/>
                <BotonCal texto='=' color="#FF9427" action={calcular}/>
            </View>
        </View>
    )
}
