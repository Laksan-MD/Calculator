import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView ,View ,TouchableOpacity, Text, TextInput} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  const [const1, setMyConst] = useState('0');
  const handleClick1 = () => {
    if(const1==0){
      setMyConst('1');
    }else{
      setMyConst(const1+'1');
    }
  }
  const handleClickplus = () => {
    if(const1==0){
      setMyConst(' + ');
    }else{
      setMyConst(const1+' + ');
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
      <View className="items-center z-10 mt-32 ">
      <View className="bg-purple-400 z-10 w-80 h-20 text-3xl mt-9 inline-block rounded-xl  justify-center items-end  ">
        <Text className="mr-3 text-3xl">{const1}</Text>
      </View>
      </View>
      <View className="bg-whitesmoke text-white h-full  flex justify-center items-center">
      {/* <Text  onPress={  handleClick("Pressed The Text")} className="text-2xl text-white">Laksan</Text> */}
      <SafeAreaView style={{flexDirection:"row"}} className=" mb-96 bg-[#ffffff] h-full w-full flex items-center rounded-xl">  
        <View style={{flexDirection:'column'}}>
           <TouchableOpacity onPress={handleClickCE} className="bg-indigo-400 w-20 h-16 text-3xl  ml-6 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">CE</Text>
           </TouchableOpacity>
           <TouchableOpacity  onPress={handleClick7} className="bg-red-400 w-20 h-16 text-3xl mt-3 ml-6 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">7</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick4} className="bg-red-400 w-20 h-16 text-3xl ml-6 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">4</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick1} className="bg-red-400 w-20 h-16 text-3xl ml-6 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text  className="text-2xl">1</Text>
           </TouchableOpacity>
           <TouchableOpacity  className="bg-orange-400 w-20 h-16 text-3xl ml-6 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">+/-</Text>
           </TouchableOpacity>
           </View>
                   <View  className=" ml-30" style={{flexDirection:'column'}}>
           <TouchableOpacity   className="bg-indigo-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">C</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick8}  className="bg-red-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">8</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick5} className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">5</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick2} className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">2</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick0} className="bg-red-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">0</Text>
           </TouchableOpacity>
           </View>
           <View  className=" ml-30" style={{flexDirection:'column'}}>
           <TouchableOpacity onPress={  handleClickdot } className="bg-yellow-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">.</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick9} className="bg-red-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClick6} className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">6</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleClick3} className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">3</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={  handleClickzz } className="bg-red-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">00</Text>
           </TouchableOpacity>
           </View>
           <View  className=" ml-30" style={{flexDirection:'column'}}>
           <TouchableOpacity   className="bg-green-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">/</Text>
           </TouchableOpacity>
           <TouchableOpacity  className="bg-green-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">X</Text>
           </TouchableOpacity>
           <TouchableOpacity  className="bg-green-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-5xl">-</Text>
           </TouchableOpacity>
           <TouchableOpacity   onPress={handleClickplus} className="bg-green-400 w-20 h-16 text-3xl  ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">+</Text>
           </TouchableOpacity>
           <TouchableOpacity   className="bg-blue-400 w-20 h-16 text-3xl ml-3 mt-3 inline-block rounded-xl justify-center items-center ">
            <Text className="text-2xl">=</Text>
           </TouchableOpacity>
           </View>          
      </SafeAreaView>
      </View>
      {/* <StatusBar style="auto" /> */}
    </TailwindProvider>
  );
}
