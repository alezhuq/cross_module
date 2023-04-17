import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { 
    Shape, 
    TwoDShape, 
    ThreeDShape, 
    Rectangle, 
    Diamond, 
    Prysm,
    Thorus,
    Pyramid
} from './classes/Shape';
import { useState } from 'react';

export default function Modultask() {

  const [arr, setArr] = useState<(Shape)[]>([]) 
  const [sumInc, setSumInc] = useState<number | undefined>(undefined)
  function calculate() : void{
    const res = []
    for(let i = 1; i < 11; i++){
        if(i % 5 === 0){
          res.push(new Rectangle(i, i+1))
          continue
        }
        else if(i % 4 === 0){
          res.push(new Thorus(i, i+2))
          continue
        }
        else if(i % 3 === 0){
          res.push(new Pyramid(i, i+1, i+2))
          continue
        }
        else if(i % 2 === 0){
          res.push(new Diamond(i, i+2))
          continue
        }
        else {
          res.push(new Prysm(i, i+1, i+2))
          continue
        }

    }
    setArr(res)
  }

  

  function funcMap (elem : Shape) : JSX.Element{
    if(elem instanceof TwoDShape){
      return (
      <View key={elem.getArea()} style={{marginTop: 20}}>
         <Text style={styles.text}>a = {elem.getA()}</Text>
        <Text style={styles.text}>b = {elem.getB()}</Text>
        <Text style={styles.text}>area = {elem.getArea()}</Text>
        <Text style={styles.text}>perimeter = {elem.getPerimeter()}</Text>

      </View>
    )
    }
    if (elem instanceof ThreeDShape){
    return (
      <View key={elem.getArea()} style={{marginTop: 20}}>
         <Text style={styles.text}>a = {elem.getA()}</Text>
        <Text style={styles.text}>b = {elem.getB()}</Text>
        <Text style={styles.text}>h = {elem.getH()}</Text>
        <Text style={styles.text}>area = {elem.getArea()}</Text>
        <Text style={styles.text}>volume = {elem.getVolume()}</Text>

      </View>
    )}
    return (<Text>can't display</Text>)
   }

  return (
    <ScrollView>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={calculate}>
            <Text style={styles.text}>Розрахунок</Text>
        </Pressable>
        {arr.map(funcMap)}
        {sumInc 
        ? <Text style={[styles.text, {marginTop: 40}]}>Total income = {sumInc}</Text>
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'center'
  },
  res: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 20
  }
});
