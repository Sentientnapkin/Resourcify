import {View, Text, TouchableOpacity, SafeAreaView, Linking, Image, ScrollView} from 'react-native';
import React from "react";
import {ArrowRightIcon, ArrowTopRightOnSquareIcon} from "react-native-heroicons/mini";

export default function DMVU18Screen (){

  return (
    <View className={"flex-1 bg-white"}>
        <ScrollView className={""}>
          <Text>
            The first step of the process is to complete Drivers Ed. It is recommended that you do your drivers ed around 2 months before
            you turn 15.5 years old, as at 15.5 years old you can get your permit, and Drivers Ed is required to get your permit.
            {"\n\n"}
            Drivers Ed is usually 30 hour course that you can take online or in person.
            Some online courses can take under 30 hours, and they still count as a completed drivers ed course.
            One such course can be seen if you click {""}
            <Text onPress={() => Linking.openURL('https://www.mycaliforniapermit.com')}>
              here
            </Text>
            :
          </Text>

          <TouchableOpacity className={"mb-16"} onPress={() => Linking.openURL('https://www.mycaliforniapermit.com')}>
            <Image
              source={require('../assets/MyCaliforniaPermit.png')}
              style={{width:'100%', height: 200}}
              resizeMode={"stretch"}
            />
          </TouchableOpacity>

          <Text>
            If you search "California Drivers Ed" on google or safari or whatever you use to search, you can find a number of programs.
            One thing that is true is that all courses cost money, the one in the image, for example, costs $65
            The Drivers Ed course is made to give a load of knowledge of driving laws in California, but also
            some other information like when the Ford Model T was created.
            {"\n\n"}
            Once completed, it is time for the permit test. The test can only be taken when you reach 15.5 years old, so 6 months after your 15th birthday.
            The permit test is a 46 question test where you
            are only allowed to get 8 questions wrong. The test should take from 20-45 minutes, and all questions come
            directly from the drivers handbook.
          </Text>
          <View className={"flex-row p-3 justify-center items-center space-x-2"}>
            <Text>
                See Drivers Handbook Here
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/')}>
              <ArrowTopRightOnSquareIcon
                  height={24} width={24}
                  color={"#00cc81"}
              />
            </TouchableOpacity>
          </View>

          <Text>
            Passing the permit test allows the driver to have a drive permit, which allows you to drive with an adult in the car.
            To start the permit test application, click here
            <TouchableOpacity onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/')}>
              <ArrowTopRightOnSquareIcon
                height={20} width={20}
                color={"#00cc81"}
              />
            </TouchableOpacity>
          </Text>

          <Text>
            Arrive 1 hour before the appointment to be sure you make it in on time, as the DMV can often have very long wait times.

          </Text>

        </ScrollView>
    </View>
  );
}
