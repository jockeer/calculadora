import { useRef, useState } from "react"


enum Operadores {
    sumar,restar,multiplicar,dividir
}
export const useCalculadora = () => {

    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = ( numeroTexto:string ) => {
        //no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
                
                //Evaluar si es otro cero, y hay un punto
            }else if (numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto)
                
                //Evaluar si es diferente de 0 y no tiene un punto
            }else if (numeroTexto !== '0' && !numero.includes('.')) {
                
                setNumero(numeroTexto)
            }else if (numeroTexto === '0' && !numero.includes('.')){

                setNumero(numero)
            }else{
                setNumero( numero + numeroTexto)
            }

        }else{
            setNumero( numero + numeroTexto)
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-',''))
        }else{
            setNumero( '-' + numero)

        }
    }

    const del = () => {
        let negativo=''
        let numeroTemp = numero
        if (numero.includes('-')) {
            negativo='-'
            numeroTemp = numero.substring(1)
            
        }
        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0,-1))
        }else{
            setNumero('0')
        }
        
    }

    const modAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1))
            
        }else{
            setNumeroAnterior(numero)

        }
        setNumero('0')
    }

    const dividir = () => {
        modAnterior();
        ultimaOperacion.current = Operadores.dividir
    }
    const multiplicar = () => {
        modAnterior();
        ultimaOperacion.current = Operadores.multiplicar
    }
    const restar = () => {
        modAnterior();
        ultimaOperacion.current = Operadores.restar
    }
    const sumar = () => {
        modAnterior();
        ultimaOperacion.current = Operadores.sumar
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;
        }
        setNumeroAnterior('0')
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        del,
        dividir,
        restar,
        multiplicar,
        sumar,
        calcular

    }
}