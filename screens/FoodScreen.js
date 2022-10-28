import {View} from 'react-native';
import React from 'react';
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import LocationPopUp from "../components/LocationPopUp";

export default function FoodScreen (){
  const [salaamVisible, setSalaamVisible] = React.useState(false);
  const [triCityVisible, setTriCityVisible] = React.useState(false);
  const [gurdwaraVisible, setGurdwaraVisible] = React.useState(false);
  const [lovVisible, setLovVisible] = React.useState(false);
  const [haywardParishVisible, setHaywardParishVisible] = React.useState(false);
  const [milpitasPantryVisible, setMilpitasPantryVisible] = React.useState(false);
  const [ecumenicalVisible, setEcumenicalVisible] = React.useState(false);
  const [cogVisible, setCogVisible] = React.useState(false);
  const [landFVisible, setLandFVisible] = React.useState(false);
  const [telegraphVisible, setTelegraphVisible] = React.useState(false);

  return(
    <>
      <LocationPopUp
        visible={salaamVisible}
        setVisible={setSalaamVisible}
        title={"Salaam Food Pantry"}
        description={"People such as veterans, single parents, and impoverished families who struggle to pay for their rent or food are among the crowd they want to reach out to. Naseer Irfan and his full family including wife and children work diligently with a group of volunteers to prepare, co-ordinate and organize the monthly food distributions in the Irvington community of Fremont, Bay Area."}
        website={"https://salaamfoodpantry.org"}
        imageURL={'data:image/jpeg;base64,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'}
        address={"2835 Wilson Cmn, Fremont, CA 94538"}
        phoneNum={"(415) 860-2409"}
      />

      <LocationPopUp
        visible={triCityVisible}
        setVisible={setTriCityVisible}
        title={"Tri-City Food Bank"}
        description={"Households in need of food can either visit our Joseph Street location twice a month to choose a mix of healthy and nutritious food (including seasonal fruits and vegetables, whole grains, canned and boxed goods, meats, and dairy items*) Farmers Market style."}
        website={"https://www.tri-cityvolunteers.org/food/"}
        imageURL={'data:image/png;base64,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'}
        address={"37350 Joseph St Fremont, CA 94536"}
        phoneNum={"(510) 793-4583"}
      />

      <LocationPopUp
        visible={gurdwaraVisible}
        setVisible={setGurdwaraVisible}
        title={"Fremont Gurdwara Sahib"}
        description={"A Sikh food pantry. If you are a Sikh in need of basic food due to the recent Coronavirus Emergency, click on the link below for more information."}
        website={"http://www.fremontgurdwara.org/sikh-food-pantry/"}
        imageURL={'https://us0-cdn.onlineradiobox.com/img/l/5/8595.v2.png'}
        address={"300 Gurdwara Road, Fremont CA 94536"}
        phoneNum={"(510) 790-0177"}
      />

      <LocationPopUp
        visible={lovVisible}
        setVisible={setLovVisible}
        title={"League of Volunteers Food Pantry"}
        description={"For 40 years, LOV has touched the lives of Tri-City children, seniors and people in need.  Since 1979, we’ve been working to improve the quality of life in the Bay Area’s Tri-City communities of Fremont, Newark and Union City."}
        website={"https://lov.org"}
        imageURL={'https://lov.org/wp-content/uploads/2014/09/lov-logo-text.png'}
        address={"8440 Central Ave, Newark, CA 94560"}
        phoneNum={"(510) 793-5683"}
      />

      <LocationPopUp
        visible={haywardParishVisible}
        setVisible={setHaywardParishVisible}
        title={"South Hayward Parish Emergency Food Pantry"}
        description={"Open 4 days per week, our food pantry serves thousands of pounds of food per month to our neighbors in Castro Valley, Hayward, and Union City."}
        website={"https://www.southhaywardparish.org/food-pantry."}
        imageURL={'https://images.squarespace-cdn.com/content/v1/5f4422e1ce38db12fc690d95/10da1db3-7949-4b71-a3e6-2e7c36f1d394/SHP+shelterandfood+icon+10in.png?format=1500w'}
        address={"27287 Patrick Ave Hayward, CA 94544"}
        phoneNum={"(510) 785-3663"}
      />

      <LocationPopUp
        visible={milpitasPantryVisible}
        setVisible={setMilpitasPantryVisible}
        title={"Milpitas Food Pantry"}
        description={"We are a faith-based 501(c)(3) non-profit organization who rely on community support to distribute emergency food and offer food assistance to more than 3,500 low- and fixed-income people."}
        website={"https://milpitasfoodpantry.org"}
        imageURL={'http://milpitasfoodpantry.org/wp-content/uploads/2016/11/MFP-logo-banner.jpg'}
        address={"1440 S. Main Street, Milpitas, CA 95035"}
        phoneNum={"(408) 946-5564"}
      />

      <LocationPopUp
        visible={ecumenicalVisible}
        setVisible={setEcumenicalVisible}
        title={"Ecumenical Hunger Program"}
        description={"EHP provides boxes of food to meet basic nutritional needs of families, as well as to individuals experiencing temporary emergency needs or special circumstances." +
          "EHP provides supplemental bags of food to homeless individuals or individuals/families in transitional housing."}
        website={"https://www.ehpcares.org/food-services.html"}
        imageURL={'https://www.ehpcares.org/uploads/2/4/6/3/24635326/published/ehp-logo.png?1597161679'}
        address={"2411 Pulgas Avenue, East Palo Alto, CA  94303"}
        phoneNum={"(650) 323 7781"}
      />

      <LocationPopUp
        visible={cogVisible}
        setVisible={setCogVisible}
        title={"Community of Grace"}
        description={"Our Food Pantry ministry functions to bridge a gap for those whose limited income creates an inability to purchase food for themselves and/or their household. The majority of what we supply is in the form of canned and boxed food."}
        website={"https://www.icgrace.org/comunity_outreach"}
        imageURL={'https://files.secure.website/wscfus/10212552/4525048/newcommunityofgrace-w1024-o.png'}
        address={"380 Elmhurst Street Hayward, CA 94544"}
        phoneNum={"(510) 783-8062"}
      />

      <LocationPopUp
        visible={landFVisible}
        setVisible={setLandFVisible}
        title={"Loaves & Fishes Family Kitchen"}
        description={"We provide hot and nutritious prepared meals five days a week across the Bay Area."}
        website={"https://www.loavesfishes.org/meal-programs"}
        imageURL={'https://images.squarespace-cdn.com/content/v1/553aa046e4b0fe84386ad100/1611271943066-K7FSSL4UOF3AT51GKCX2/Asset+1.png?format=1500w'}
        address={"1500 Berger Drive San Jose, CA 95112 "}
        phoneNum={"(408) 922-9085"}
      />

      <LocationPopUp
        title={"Telegraph Ministry Center Food Pantry"}
        description={"Our Food Pantry distributes to people in need in Oakland and Alameda County.  We distribute food every Wednesday and Friday from 10am to 2pm and Wednesday evenings from 5:30pm to 7pm."}
        website={"https://tmcoakland.org/what-we-do/"}
        imageURL={'https://tmcoakland.org/wp-content/uploads/2020/05/icon-food-pantry.png'}
        visible={telegraphVisible}
        setVisible={setTelegraphVisible}
        address={"5316 Telegraph Avenue Oakland, CA 94609"}
        phoneNum={"(510) 961-4385"}
      />

      <View className={"flex-1"}>
        <MapView
          initialRegion={{
            latitude: 37.6,
            longitude: -122.1,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4,
          }}
          className={"flex-1 z-0"}
          mapType={"mutedStandard"}
        >
          <Marker
            title={"Salaam Food Pantry"}
            onPress={() => setSalaamVisible(true)}
            coordinate={{latitude: 37.540852, longitude: -121.958955}}
          />

          <Marker
            title={"Tri-City Volunteers - Food Pantry"}
            onPress={() => setTriCityVisible(true)}
            coordinate={{latitude: 37.555999, longitude: -122.007860}}
          />

          <Marker
            title={"Fremont Gurdwara Sahib"}
            onPress={() => setGurdwaraVisible(true)}
            coordinate={{latitude: 37.5230790, longitude: -121.998560}}
          />

          <Marker
            title={"League of Volunteers Food Pantry"}
            onPress={() => setLovVisible(true)}
            coordinate={{latitude: 37.516660, longitude: -122.045255}}
          />

          <Marker
            title={"South Hayward Parish Emergency Food Pantry"}
            onPress={() => setHaywardParishVisible(true)}
            coordinate={{latitude: 37.634141, longitude: -122.079575}}
          />

          <Marker
            title={"Milpitas Food Pantry"}
            onPress={() => setMilpitasPantryVisible(true)}
            coordinate={{latitude: 37.409788, longitude: -121.901337}}
          />

          <Marker
            title={"Ecumenical Hunger Program"}
            onPress={() => setEcumenicalVisible(true)}
            coordinate={{latitude: 37.470967, longitude: -122.131258}}
          />

          <Marker
            title={"Community of Grace"}
            onPress={() => setCogVisible(true)}
            coordinate={{latitude: 37.655743, longitude: -122.094049}}
          />

          <Marker
            title={"Loaves & Fishes Family Kitchen"}
            onPress={() => setLandFVisible(true)}
            coordinate={{latitude: 37.371035, longitude: -121.897289}}
          />

          <Marker
            title={"Telegraph Ministry Center Food Pantry"}
            onPress={() => setTelegraphVisible(true)}
            coordinate={{latitude: 37.8391473, longitude: -122.2618229}}
          />
        </MapView>
      </View>
    </>
  );
}