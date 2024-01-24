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
    <View>
      <Text>Description</Text>
      <Text>
        {readMore ? description : shortDescription}{' '}
        <Text
          onPress={() => {
            setReadMore(!readMore);
          }}>
          {readMore ? 'Read Less' : 'Read More'}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
