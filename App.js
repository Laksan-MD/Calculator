import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView ,View ,TouchableOpacity, Text, TextInput} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { horizontalScale, moderateScale, verticalScale } from './metric.js';




export default function App() {

  const [const1, setMyConst] = useState('0');


    const defaultValue = 0;
    const [resultValue, setResultValue] = useState(defaultValue)
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (text) => {
      setInputValue(text);
    };
  
    const handleButtonPress = () => {
      // Here, you can use the inputValue value as needed

      const myConst = inputValue.trim();
      const myArray = const1.trim().split(" ");
      const ma1 = myArray[1];
      const ma2 = parseFloat(myArray[2]);
      const ma0 = parseFloat(myArray[0]);
      if(myArray.length != 3) {
        setMyConst('Invalid Expression')
        return 0;
      }
      if(myArray.length != 3) {
        setMyConst(myConst)
        return 0;
      }
        if(ma1=="+"){
          setMyConst((ma0 + ma2).toString())
      }else if(ma2==" " || ma1==" "){
        setMyConst(' ');
      }
       if(ma1=="-"){
        setMyConst((ma0 - ma2).toString())
      }else if(ma2==" " || ma1==" "){
        setMyConst(' ');
      }
       if(ma1=="*"){
        setMyConst((ma0 * ma2).toString())
      }else if(ma2==" " || ma1==" "){
        setMyConst(' ');
      }
       if(ma1=="/"){
        setMyConst((ma0 / ma2).toString())
   }else if(ma2==" " || ma1==" "){
    setMyConst(' ');
  }
 }
  const handleClick1 = () => {
    if(const1==0){
      setMyConst('1');
    }else{
      setMyConst(const1+'1');
    }
  }
  const handleClickplus = () => {
    const myConst = inputValue.trim();
    const myArray = const1.trim().split(" ");
    const ma1 = myArray[1];
    const ma2 = parseFloat(myArray[2]);
    const ma0 = parseFloat(myArray[0]);
    console.log(myArray)
    if(const1==0){
      setMyConst(' + ');
    }else{
      setMyConst(const1+' + ');
    }
  }
  const handleClickminus = () => {
    if(const1==0){
      setMyConst(' - ');
    }else{
      setMyConst(const1+' - ');
    }
  }
  const handleClickmul = () => {
    if(const1==0){
      setMyConst(' * ');
    }else{
      setMyConst(const1+' * ');
    }
  }
  const handleClickdiv = () => {
    if(const1==0){
      setMyConst(' / ');
    }else{
      setMyConst(const1+' / ');
    }
  }
  const handleClick0 = () => {
    if(const1==0){
      setMyConst('0');
    }else{
      setMyConst(const1+'0');
    }
  } 
  const handleClick2 = () => {
    if(const1==0){
      setMyConst('2');
    }else{
      setMyConst(const1+'2');
    }
  } 
  const handleClick3 = () => {
    if(const1==0){
      setMyConst('3');
    }else{
      setMyConst(const1+'3');
    }
  } 
  const handleClick4 = () => {
    if(const1==0){
      setMyConst('4');
    }else{
      setMyConst(const1+'4');
    }
  } 
  const handleClick5 = () => {
    if(const1==0){
      setMyConst('5');
    }else{
      setMyConst(const1+'5');
    }
  } 
  const handleClickpi = () => {
      setMyConst('3.14159265359');
  }
  const handleClick6 = () => {
    if(const1==0){
      setMyConst('6');
    }else{
      setMyConst(const1+'6');
    }
  } 
  const handleClickCE = () => {
      setMyConst('0');
  } 
  const handleClickdot = () => {
    if(const1==0){
      setMyConst('.');
    }else{
      setMyConst(const1+'.');
    }
  }
     const handleClick9 = () => {
    if(const1==0){
      setMyConst('9');
    }else{
      setMyConst(const1+'9');
    }
  }
  const handleClick7 = () => {
    if(const1==0){
      setMyConst('7');  
    }else{
      setMyConst(const1+'7');
    }
  }
  const handleClick8 = () => {
    if(const1==0){
      setMyConst('8');
    }else{
      setMyConst(const1+'8');
    }
  }
  const handleClickzz = () => {
    if(const1==0){
      setMyConst('00');
    }else{
      setMyConst(const1+'00');
    }
  }
  return (
    <TailwindProvider>
      <View className="items-center z-10  ">
      <View  value={inputValue} onChangeText={handleInputChange} style={{width:horizontalScale(300) ,height:verticalScale(74)}}className="bg-purple-400 z-10  text-3xl mt-9 inline-block rounded-full  justify-center items-end  ">
        <Text value={resultValue}className="mr-3 text-3xl">{const1}</Text>
      </View>
      </View>
      <View className="bg-whitesmoke text-white h-full  flex justify-center items-center">
      {/* <Text  onPress={  handleClick("Pressed The Text")} className="text-2xl text-white">Laksan</Text> */}
      <SafeAreaView style={{flexDirection:"row"}} className=" mb-96 bg-[#ffffff] h-full w-full flex items-center rounded-xl">  
        <View style={{flexDirection:'column'}}>
           <TouchableOpacity onPress={handleClickCE} style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-indigo-400  text-3xl  ml-6 mt-1 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">CE</Text>
           </TouchableOpacity>
           <TouchableOpacity  onPress={handleClick7}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-red-400 w-20 h-16 text-3xl mt-3 ml-6 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">7</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick4}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-red-400 w-20 h-16 text-3xl ml-6 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">4</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick1}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-red-400 w-20 h-16 text-3xl ml-6 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text  className="text-2xl">1</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick0} style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-red-400 w-20 h-16 text-3xl ml-6 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">0</Text>
           </TouchableOpacity>
           </View>
                   <View  className=" ml-30" style={{flexDirection:'column'}}>
           <TouchableOpacity   style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-indigo-400 w-20 h-16 text-3xl ml-3 mt-1 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">C</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick8}  style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-red-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">8</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick5}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">5</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick2} style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">2</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClickzz } style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">00</Text>
           </TouchableOpacity>
           </View>
           <View  className=" ml-30" style={{flexDirection:'column'}}>
           <TouchableOpacity onPress={  handleClickdot }style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-yellow-400 w-20 h-16 text-3xl  ml-3 mt-1 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">.</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick9} style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-red-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick6}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">6</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick3}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-red-400 w-20 h-16 text-3xl   ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">3</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClickpi}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-pink-400 w-20 h-16 text-3xl mr-3  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">pi</Text>
           </TouchableOpacity>
           </View>
           <View  className=" ml-30" style={{flexDirection:'column'}}>
           <TouchableOpacity  onPress={handleClickdiv}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-green-400 w-20 h-16 text-3xl ml-1 mt-1 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">/</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClickmul}style={{width:horizontalScale(74) ,height:verticalScale(63)}}  className="bg-green-400 w-20 h-16 text-3xl ml-1 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-3xl">*</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClickminus} style={{width:horizontalScale(74) ,height:verticalScale(63)}}className="bg-green-400 w-20 h-16 text-3xl  ml-1 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-5xl">-</Text>
           </TouchableOpacity>
           <TouchableOpacity   onPress={handleClickplus}style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-green-400 w-20 h-16 text-3xl  ml-1 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">+</Text>
           </TouchableOpacity>
           <TouchableOpacity  onPress={ handleButtonPress }style={{width:horizontalScale(74) ,height:verticalScale(63)}} className="bg-blue-400 w-20 h-16 text-3xl mt-3 ml-1 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">=</Text>
           </TouchableOpacity>
           </View>          
      </SafeAreaView>
      </View>
 <StatusBar style="auto" />
    </TailwindProvider>
  );
}
