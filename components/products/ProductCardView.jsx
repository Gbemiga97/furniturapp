import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'

const ProductCardView = () => {
  return (
    <TouchableOpacity onPressIn={() => {}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../../assets/images/fn2.jpg')}
                style={styles.image}
                />
            </View>
            {/* details */}
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>product</Text>
                <Text style={styles.supplier} numberOfLines={1}>product</Text>
                <Text style={styles.price}>$1000</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView