import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

interface DescriptionProps {
  description: string | undefined;
  shortDescription: string | undefined;
}

export default function Description({
  description,
  shortDescription,
}: DescriptionProps) {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>
        {readMore ? description : shortDescription}{' '}
        <Text
          style={styles.readMore}
          onPress={() => {
            setReadMore(!readMore);
          }}>
          {readMore ? 'Read Less' : 'Read More'}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2D2C',
  },

  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 23,
    color: '#9B9B9B',
  },

  readMore: {
    color: '#C67C4E',
  },
});
