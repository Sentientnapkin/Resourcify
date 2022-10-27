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
        imageURL={'https://goodwillsv.org/wp-content/uploads/2022/01/gwsv.jpg'}
        address={"4025 Mowry Ave, Fremont, CA 94538"}
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
      />

      <LocationPopUp
        title={"HopeTHRIFT"}
        description={"HopeTHRIFT features more than 70,000 top-quality and name brand items you’ll be proud to call your own. Dress in style with our enormous selection of clothing, shoes and accessories. Fill your home with new and lightly used furniture and housewares, or cruise the pavement with like-new bikes for everyone in your family." +
          "\nPhone: (510) 795 6100"}
        website={"https://hope-thrift.org"}
        imageURL={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQQExYTExQQEBYWFhgTFhkYExgTExYXGRgXGBYWFhQZHikhGRsmHBcWIj8iJiosLy8vGCA1OjUtOSkuLywBCgoKDg0OHBAQGy4nISYuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABGEAACAQIDBAYFBwoFBQEAAAAAAQIDEQQSIQUGMUEHE1FhcYEic5GhsRQyNEJywdEXM1JTYpOisrPSI1SCkvAkQ2Ph8Rb/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAMBEAAgIBAwIDBwQCAwAAAAAAAAECAxESITEEQQVRcRQiYYGRobETMtHwweEGI0L/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLgGQQu1tvwovLFdZNcUnZLxfb3EBV3krt6OMPCN/jcq2dXXW8M1c0i8go1HeWvHi4z8Y2+FiwbK27Cu1Fpwn2PVPn6L5irrKrHhPcwpxZMgidsbbp4ZeleUnwiuPi+xFXxO9deT9HJTXcrvzb/Astl2no7rlmK282X4HPKW8+IXGal4xX3WJzZe9UJtRqrq29MyfoefYNSN7fD761qxlfAs4PmLPoyUgAAAAAAAAAAAAAAAAAAAAAAAAAAAQe8u0nRhlg7TlwfYub8eXmTbKLvRVcsRJfopRXsv8AeVerscK9vQ1m8IiWzJgycIgME7s1rC0JYiSvOXo017vxfgiCZMb3PKqFJaKML+6y/wCd5e6CCc3J9kW+hpVtyi+CArVpTk5SblJu7bPMA6p7COFwAADJbdztrNvqJu9leD7lxiW65y7ZdVwrU5LlNe92fuZ1BG6Z5zxOhV26o8Pc+gAZOeAAAAAAAAAAAAAAAAAAAAAAAAYZRN56TjiJN/WSkvC1vuZfCC3m2a60FKKvKHLtjzXjzKvWVuyrblbms1lFLMmAcIrlj2Ju+qkVUq5rPWMU7acm3xJDb+wvlCUovLOKtH9Frsf4krs+adODXBwjb2GyegpqjCPulyqcqpKUOSobG3VTjmrZrvhBO1vtNcz12purDK3RvGS5N3i+7XgWo+GTFh9dfr1an6dvocmsYuTlbe6DlKM8PSnHM0mnq1eydmuw9qVDCY3SjJ0Kv6EuD8ufkyWfS2wWWti103/I+lulpbwyH2XRc61OK5zj7L3fuTOoRRV92NhypTlUqKzi3GK4+Ml3cvaWpEMUR+JXxttxF7IyADY54AAAAAAAAAAAAAAAAAAAAAAAAIDezb8cDRz2UpyeWnG9rvm21wil93aTzOQdJmNdTFuF/RpQjBLvfpSfjrFf6US0w1zwyK6eiDaLLhMXhdo+lTmqFZ/OpzsrvnZc+PFeaMVt3q8fqKX2ZL77HLyRwu38TSVoV60V2Z215J3sa3+EVWSbWxUV6f7kde3dhWhDJVg0l813TffGyZNpnBcXt3EVVapXrSXZnaXmkWrczfZ0stHESbp8IVHxhyUZ9se/l4Gy6KVVeM5wTQ6mLek6kVPe7eKNGLpU3epJWbX1E+39ruNqnvTSni44Wm+sbUnKSaypxV8q7Xo/A5ztCi4VakG28s5LV3bs9G3zZY6Pp1ZP3u25V8T6uVVWK++Vny9DXCdmmtGtVya8ADuHlfQ6Pubt14iPV1HepBcf0o8L+Pb4loOQbvYt0cRSmv0lF+EvRfxv5HXkcHraVVZtwz1nhnUu6rEuVsfQAKh0gAAAAAAAAAAAAAAAAAAAAAAADDOLdINNxx1a/wBbJJeGSK+5najn/SjsZzjHFQV3TWSpb9C7al5Nv/cT9PNRnuV+pjqgcyMgwdQ5xkAGBgsnR1ScsdSaXzVOT8Mjj8ZI9tt1M2IrNc6kviSm52G+Q4apjKmk6iyUU+LjxT83Z+ESu+Or7ebHTLM5SXHBS8SliuEO/P8Aj+QAC+chGxs2m5VqcVq3Ugv4kdluc83D2U6lXr5L0ad1Hsc2re5P22OiJHE8QsUrNK7fk9L4NU40ub/9fhH0ACidgAAAAAAAAAAAAAAAAAAAAAAAAHnOCkrPVPRrkz0ABzTeXo+ld1MJZp69U2lb1cnpbuftKRi9mVqLtUpVYeMGl7eB+ggWYdTOKw9ytPpYvjY/PuD2XXrO1OlVn4Qdvbw95eN2ej5pxqYu2mqpJ3v6yXC3cvbyOlAxPqZvZbCPSwXO5Wd6tgSxSi4Ts4LSD0g+/Tg+RQcXsmvSdp0qke+117VdHZDFjejrJ1LTyit1Xhld8tecM4rSws5u0YTk+5N/Asex9zatRqVe9KHG105v7l5nRzJJZ4hZJYisENXg1UXmb1fJJGthMNGlFQgssYqySNkAoHYSxsAAAAAAAAAAAAAAAAAAAAAD5bPowwDnO3OkCvh69WjGnRkqc3FN5rtLtsy7bBx0sRh6VWSUXOCk0uCv2XON74fTMR61/cdW3RxEFg8OnKKfVR4tJlm6uKhFpclWqxuck2bO9G05YXDVK0EpShlsnezvOMdbeJUd3N+62KxNKjKnRjGbabjmzK0JS0u+4nd/q8Xga6Uot2hwaf8A3IHONwvp9D7U/wCnMVVqVbbQtskrEkztrZQ9v9IkKUnDDxVZrRzb/wAO/wCzbWXuNnpM2vKjQjSg3GVZuLadmoJelbxul5s57uxsOWOrqknlilmnK18sVbh3u9hTTFx1z4F1slLRDkk6nSDjW7qVKK7FTVvfqSWzekqrFpV6cKkebh6E135XdP3Ftwu5eDhHL1MZ/tSblJ9976eRTN+Nz44WHX4e6pp2nBtyyXdlJSetr2VmbxlTN6dODSUboLVqydJ2VtOliaaqUpKcX7U+akuT7iG323gqYGnTnTjCbnPI817JZW9LeBQejza0qGKjTv8A4dV5JLlm+pLxvZefcWjpb/MUfWv+SRH+jptUXuSfqudTktmQ35TcR+qw/wDH+J70Ok2qn6dClJc8spRfle5odHOy6OJq1Y1oRqKME0nfR346Erv/ALs4ahh+toxVKSko2Tdp3dno3xWr07yWSpU9GP79SFO1w15/v0LjsDb9LG089JtNWUou2eLfauzjr3Fb3s31rYPEOjCnSlFRjK8s19fBlc6MKso4zKr2lTmpeVmm/h5nx0mfTZerp/BmsaYq7S+DeV0nVqWxu/lMxH6rD/x/iYfSbiP1WH/j/Eldy92cLiMLTqVaUZzbnd55LhOSWifYTn/4vAfqI/vJ/wBxhypTxpCjc1nUTmArOpThN2vKEZO3C7SehsnlQpqEVGKsopRXclokepVLaAABkAAAAAAAAAAAAGGZMMwDhe9/0yv61/cfOH3YxVWKqQoTnGSvFrLZrk+J9b4fTK/rX9x1vc5f9Hh/VROhOx1wi0c6utTnJM5BjN28TRg6lShOEI8ZPLZXaS4PtaNzcL6fQ+1P+nM6V0g/QK/hD+pA5puF9Pw/2p/05iFjnXJszKtQsikT3S0n1tF8urnbxzLN7sp69Eco5sQvrWptfZvO/vaJ7pD2K8TQU6avUpNzS5yi16cV38H/AKTl+wdsTwdWNWnZ20knwnF2vF/jyZrD/so0rk2sei7U+DvhC74SisHiL2t1Ul5vRe+xFYbpDwko3k6lN84uDk79zjdMp++W+HyxdVSjKFFPM7/Om07q6T0S42IK6JuW6J7LoKOzIDYibxFG3Hradv8AejoXS3+Yo+tf8kivdG+xnWrqvJf4dF3vydS2iXhe/s7Sw9Lf5ij61/ySLFkk7oryK8ItUyfmc72bj61Bt0Z1Kbas3Hmu82aixeMks3ynEPldSkl225RLP0S/nq/q4/zHT2hbdonjApp1wznYpm4O6s8JetWsqk1lUbp5I8XdrRt6cOwqfSZ9Nl6uHwZ2A490mfTZerh8GR0Scrcskvio1YRE4HYmKqwU6VKtODvZx+a7Oz59tzaobuY1Si3QxFlJN+F1fmWXdLfPD4XDQo1eszRzXtC61k5LW/YyZ/KNg/8Azfu//ZJOy3LSiRwhVhNyLdE+jU2ZjY16casL5ZrNG6s7d65G2US+gAAAAAAAAAAAAAAAfLPo8qqbVk7P4d4BRNs9H0sRWqVlXjDrJOVurbtfle5b9jYH5PQp0W8/VwUb2snbnYqO044uhVpUnipSdV2TypW1S4c+JsbYxNfCSw0J13K85OpKySlBTp6Ndii5FqVcpKK1J+X9wc1dVCDlLQ1hpP58d/jn4Fi3i2b8rw9SipZM+X0rXtaUZcPIrG7+4UsLXp1nXjNQbeXq3G94yjxv3m1tzb6lUoRoVU052qZXxTcVZ38zy2ri60sZOisR8mgkpJvLl4LTXtuK67NOM4TTf3wbW9TVqyllppbPzWfwXSTKjvDuLRxMnUpydCo9W0rwk+2UOT71Y18DtqtKhibz6x0l6FWKSvx7FZ8L37zzx21aywmHmqsoynKSnLS7V5cfD7hGmcZbPvj7ZEusqnDLXbP3x6EHV6NcSn6NTDSXa5Ti/ZkdvaSey+jRJqVeqpLnCmmk+5zevuRLYPC16mZQx8Kry/VUZOPpL0rJ9ia8yPwkMXUxFTDrFSTpq+bKmnw5eZvmyWVrWyzw/wCCNzhHD/Te7wt1/Jd8DhYUYKnTioQjoklZIhd793nj6cIKoqWSef5ua/otWtddpubbxU6GGnOHpTjFa2vrdJyt7WV/d51a0oTWNzt61KTScrc0k/jZcSCEZY/UT4/JZtujGaq05z+Pqbe5+6bwE5zdWNXPFRsoZbWd+1lqKFtNYuhWo0nipS62Vk8qVryS4c+Js7RxmIoulhIVVUrVG26jSTUW/RVtbcHqSTplJp6lv68LvwRR6uME04NY27cvhclzbKZvPuRLGVnWVaNO8YxtkzfN53uj42hHF4FKt8odeN0pxlHTXxv7dD029tKpOth1TrOhCrTUm9LK93d39hiuqaknBrDzv6LPHIt6uGlqcWmsbccvC74/gifyYS/zMf3T/uH5MJf5iP7p/wBxMbD2pV6+rQlWWJjGm5qoktGsvNceL80RezsfVqwzTx6oPVZZZb+P/OwlSuy/e8vv8skTvo29175+3PfBd9h4H5PQp0c2fq4qN7WvbnbkSB5UPmq7zaLXt7z1KJ1FwAADIAAAAAAAAAAAAMWMgAqu8eBqTxWGnGEpRjJZmuEdU9TG92AqVa2GcabqQjN59NFFypXzd1lL2FpaFiZXSTT8k19SrPpYyUk3+5p/QqG8OxUqmHdCkklUvNwSVkpQevvPnG7EeIxlXrIS6uVOynbRStFJp9vEuNhlCvmlt5NZ9TWXRVuTfbKeNsbLBS8Bha0cJWw06clKKeRpaTu+T5v7rHhjdl1ZYXDU+rk5Rm3ONtYpylx8mXqx9WMrqZZzjvn54wY9hjp0tvjT8s5/0R2C2VRoNunTjBtWbXNETsvBTjj8RNwkoSVoy5N2jw9j9hZcp9WI1ZLf47Ezoh7uNsPO3o1/k0Nq1ZwpSdOHWztpG9r9v/wp9PB1K+IpTp4aWEySUqjvaLs1wVl3rTjcv1jLM12uC2X9/Bpf0ytabfGPLs8+pVt48HUqYnCzhCUowknJrhH04vX2GN6NmVOtp4mgs86ejjzaT0t7Wi02CRsrpLHwWPqJ9JGWrf8Ac0/RrjH0KPtKtisfGNH5PKhFtOcpNtaeKXDzubO1diuWIw0Orc6MIdXN29FJXSv7i3tGbGfaGsaUkt/Pvyaexxllzk23jnHZ5wU/d/BVcNOtQdOUqbu4VLLXTSLfh70+0idmYerShlns913q80pJOz5Wyv4nRbCxn2l5ba5x5/Ux7BHCSb2zjjh9t0eOEk3CLccjcU3G98rtwv3GwYSMlcuoAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z'}
        visible={hopeThriftVisible}
        setVisible={setHopeThriftVisible}
        address={"41200 Blacow Rd, Fremont, CA 94538"}
      />

      <LocationPopUp
        title={"ROSS"}
        description={"Get more for less at your  Ross Store. All types of products (including products)."}
        website={"https://www.rossstores.com"}
        imageURL={'https://cdn.dribbble.com/userupload/2747287/file/original-5919947307968f7ffb07812410436569.png?compress=1&resize=752x'}
        visible={rossVisible}
        setVisible={setRossVisible}
        address={"4112 Fremont Hub, Fremont, CA 94538"}
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
      />

      <LocationPopUp
        title={"Telegraph Ministry Center Clothing Closet"}
        description={"The clothing room provides new and gently used shirts, pants, coats, shoes for not only children, but people of all ages.  For parents with infants, we have diapers available as well as formula and other baby provisions."}
        website={"https://tmcoakland.org/what-we-do/"}
        imageURL={'https://tmcoakland.org/wp-content/themes/yootheme/cache/icon-clothing-7f0ae011.png'}
        visible={telegraphVisible}
        setVisible={setTelegraphVisible}
        address={"5316 Telegraph Avenue Oakland, CA 94609"}
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
