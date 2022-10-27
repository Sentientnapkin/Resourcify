import {View} from 'react-native';
import React, {useState} from "react";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import LocationPopUp from "../components/LocationPopUp";

export default function ClothesScreen (){
  const [goodWillFrVisible, setGoodWillFrVisible] = useState(false);
  const [goodWillSvVisible, setGoodWillSvVisible] = useState(false);
  const [hopeThriftVisible, setHopeThriftVisible] = useState(false);
  const [rossVisible, setRossVisible] = useState(false);
  const [stVincentDePaulVisible, setStVincentDePaulVisible] = useState(false);
  const [telegraphVisible, setTelegraphVisible] = useState(false);

  return(
    <>
      <LocationPopUp
        visible={goodWillFrVisible}
        setVisible={setGoodWillFrVisible}
        title={"Goodwill"}
        description={"Ranges from adult clothes, children's clothes, shoes, jewelry, bags, collectibles, and other products. Purchasements are involved to receive the products. " +
          "Tuesdays are senior discount days at this store. Customers 55 and older receive a 20% discount."}
        website={"https://sfgoodwill.org"}
        imageURL={'data:image/jpeg;base64,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'}
        address={"4025 Mowry Ave, Fremont, CA 94538"}
        phoneNum={"(510) 739-1671"}
      />

      <LocationPopUp
        visible={goodWillSvVisible}
        setVisible={setGoodWillSvVisible}
        title={"Goodwill"}
        description={"Ranges from adult clothes, children's clothes, shoes, jewelry, bags, collectibles, and other products. Purchasements are involved to receive the products. " +
          "Tuesdays are senior discount days at this store. Customers 55 and older receive a 20% discount."}
        website={"https://sfgoodwill.org"}
        imageURL={'https://goodwillsv.org/wp-content/uploads/2022/01/gwsv.jpg'}
        address={"2800 El Camino Real, Santa Clara, CA 95051"}
        phoneNum={"(408) 247-2800"}
      />

      <LocationPopUp
        title={"HopeTHRIFT"}
        description={"HopeTHRIFT features more than 70,000 top-quality and name brand items you’ll be proud to call your own. Dress in style with our enormous selection of clothing, shoes and accessories. Fill your home with new and lightly used furniture and housewares, or cruise the pavement with like-new bikes for everyone in your family." +
          "\nPhone: (510) 795 6100"}
        website={"https://hope-thrift.org"}
        imageURL={'data:image/jpeg;base64,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'}
        visible={hopeThriftVisible}
        setVisible={setHopeThriftVisible}
        address={"41200 Blacow Rd, Fremont, CA 94538"}
        phoneNum={"(510) 795-6100"}
      />

      <LocationPopUp
        title={"ROSS"}
        description={"Get more for less at your  Ross Store. All types of products (including products)."}
        website={"https://www.rossstores.com"}
        imageURL={'https://cdn.dribbble.com/userupload/2747287/file/original-5919947307968f7ffb07812410436569.png?compress=1&resize=752x'}
        visible={rossVisible}
        setVisible={setRossVisible}
        address={"4112 Fremont Hub, Fremont, CA 94538"}
        phoneNum={"(510) 796-4761"}
      />

      <LocationPopUp
        title={"St Vincent De Paul"}
        description={"Dresses, skirts and formal-wear, blouses and shirts, pants and jackets, purses and bags\n" +
          "Accessories: hats, belts, jewelry, shoes, boots, and many other products "}
        website={"https://www.svdp-alameda.org/shop.html"}
        imageURL={'https://images.squarespace-cdn.com/content/v1/56b953728a65e27e69cdbbf6/1456369710563-JRRQJUI0L2TMDIA9CQUP/Logo%2BUS%2Bblue%2BJPEG.jpg?format=2500w'}
        visible={stVincentDePaulVisible}
        setVisible={setStVincentDePaulVisible}
        address={"3777 Decoto Rd, Fremont, CA 94555"}
        phoneNum={"(510) 792-3711"}
      />

      <LocationPopUp
        title={"Telegraph Ministry Center Clothing Closet"}
        description={"The clothing room provides new and gently used shirts, pants, coats, shoes for not only children, but people of all ages.  For parents with infants, we have diapers available as well as formula and other baby provisions."}
        website={"https://tmcoakland.org/what-we-do/"}
        imageURL={'https://tmcoakland.org/wp-content/themes/yootheme/cache/icon-clothing-7f0ae011.png'}
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
            title={"Goodwill of Fremont"}
            onPress={() => setGoodWillFrVisible(true)}
            coordinate={{latitude: 37.5475938, longitude: -121.9895866}}
          />

          <Marker
            title={"Goodwill of Silicon Valley"}
            onPress={() => setGoodWillSvVisible(true)}
            coordinate={{latitude: 37.3522860, longitude: -121.9779258}}
          />

          <Marker
            title={"HopeTHRIFT"}
            onPress={() => setHopeThriftVisible(true)}
            coordinate={{latitude: 37.5230790, longitude: -121.9707410}}
          />

          <Marker
            title={"Ross"}
            onPress={() => setRossVisible(true)}
            coordinate={{latitude: 37.5464965, longitude: -121.9884544}}
          />

          <Marker
            title={"St Vincent De Paul"}
            onPress={() => setStVincentDePaulVisible(true)}
            coordinate={{latitude: 37.5726859, longitude: -122.0316653}}
          />

          <Marker
            title={"Telegraph Ministry Center Clothing Closet"}
            onPress={() => setTelegraphVisible(true)}
            coordinate={{latitude: 37.8391473, longitude: -122.2618229}}
          />
        </MapView>
      </View>
    </>
  );
}
