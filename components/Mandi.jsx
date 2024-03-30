import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'twrnc';
import axios from 'axios'

export default function Mandi() {
    const [records,setRecords] = useState([])

    useEffect(()=>{
        apiCall()
    },[])

    const apiCall=async()=>{
        const response = await axios.get(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters%5Bstate%5D=Maharashtra`)
        console.log("Records:",response.data.records)
        setRecords(response.data.records)
    }
  return (
    <ScrollView horizontal>
        <View style={tw`gap-5 flex flex-row `}>
      {
            records.map((record,index)=>(
                <View key={index} style={tw`mt-3 w-50 h-55 bg-gray-200 `}>
                <TouchableOpacity>
                  {/* Image */}
                  <View style={tw`w-50 h-34 bg-white`}></View>
                  {/* Text */}
                  <View style={tw`flex `}>
                    <Text style={tw`text-black`}>District:{record.district}</Text>
                    <Text style={tw`text-black`}>Market:{record.market}</Text>
                    <Text style={tw`text-black`}>Commodity:{record.commodity}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))
        }
        </View>
    </ScrollView>
  );
}
