import {  Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './productDetails.style'
import { useNavigation } from '@react-navigation/native'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS, SIZES, images } from '../constants'


export default function ProductDetails() {
  const navigation = useNavigation()
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  

  
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
        </View>
        <Image
        source={images.FN2}
        style={styles.image} />
      
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$1000</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index) => (
              <Ionicons
              key={index}
              name='star'
              size={24} color="gold"
              />
            ))}
            <Text style={styles.ratingText}>  (4.9)</Text>
          </View>

          <View style={styles.rating}>
          <TouchableOpacity onPress={() => decrement()} >
            <SimpleLineIcons name='minus' size={20} />
           </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>
           <TouchableOpacity onPress={() => increment()}>
            <SimpleLineIcons name='plus' size={20} 
            />
           </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descWrapper}>
          <Text style={styles.desc}>
            Description
          </Text>
          <Text style={styles.descTxt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque natus atque officia itaque molestiae debitis omnis, quisquam obcaecati tenetur nisi quaerat maiores ullam nesciunt consequuntur cumque veniam dolorum perferendis dolore, vel delectus error laboriosam. Iusto consequuntur aperiam debitis dolores vel eveniet accusamus amet voluptate! Molestias doloribus aliquam voluptates natus.
          </Text>
        </View>
        
        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
           <View style={{flexDirection: "row"}}>
           <Ionicons name='location-outline' size={20} />
            <Text>   Dallas</Text>
           </View>

           <View style={{flexDirection: "row"}}>
           <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
            <Text>   Free Delivery  </Text>
           </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addToCart}>
            <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite}/>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

