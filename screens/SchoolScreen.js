import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import json from '../data/fremontSchoolsData.json';
import SchoolBit from "../components/SchoolBit";

export default function SchoolScreen(){
  const data = json.school;

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) =>
          <SchoolBit
            name={item.name}
            rating={item.rating}
            url={item.url}
            address={item.address}
            phoneNum={item.phoneNum}
            rating_url={item.rating_url}
            image={item.image}
          />
          }
      />
    </SafeAreaView>
  );
}