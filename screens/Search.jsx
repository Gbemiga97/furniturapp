import { TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons } from '@expo/vector-icons'
import { SIZES, COLORS } from '../constants'
import styles from './search.style'


const Search = () => {
  return (
    <SafeAreaView>
       <View style={styles.searchContainer}>
        <TouchableOpacity  onPressIn={() => {}} >
        <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TouchableOpacity
          style={{marginTop: 12}}
          onPressIn={() => {}}>
          <TextInput
            style={styles.searchInput}
            value=''
            placeholder='What are you looking for'
            />
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
        <Feather name='search'  size={SIZES.xLarge} color={COLORS.offwhite}  />
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Search

