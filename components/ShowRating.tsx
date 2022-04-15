import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import StarIconFilled from '../assets/fonts/star_filled.png';
import StarIconUnFilled from '../assets/fonts/star_corner.png';

const ShowRating = ({ data }: any) => {
  const [Rating, setRating] = useState(data.rating);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item: any, key) => {
        return (
          <TouchableOpacity activeOpacity={0.7} key={item}>
            <Image
              style={styles.starImageStyle}
              source={item <= Rating ? StarIconFilled : StarIconUnFilled}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ShowRating;

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
});
