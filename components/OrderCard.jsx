import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'twrnc';

export default function OrderCard() {
  return (
    <ScrollView horizontal>
      <View style={tw`gap-2 flex flex-row `}>
    {/* mapping */}

        <View style={tw`mt-3 w-50 h-55 bg-gray-200 `}>
          <TouchableOpacity>
            {/* Image */}
            <View style={tw`w-50 h-34 bg-white`}></View>
            {/* Text */}
            <View>
              <Text>Order Data</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-3 w-50 h-55 bg-gray-200 rounded-lg`}>
          <TouchableOpacity>
            {/* Image */}
            <View style={tw`w-50 h-34 bg-white`}></View>
            {/* Text */}
            <View>
              <Text>Order Data</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-3 w-50 h-55 bg-gray-200 rounded-lg`}>
          <TouchableOpacity>
            {/* Image */}
            <View style={tw`w-50 h-34 bg-white`}></View>
            {/* Text */}
            <View>
              <Text>Order Data</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-3 w-50 h-55 bg-gray-200 rounded-lg`}>
          <TouchableOpacity>
            {/* Image */}
            <View style={tw`w-50 h-34 bg-white`}></View>
            {/* Text */}
            <View>
              <Text>Order Data</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
