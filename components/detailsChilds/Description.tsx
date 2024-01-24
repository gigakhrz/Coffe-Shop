import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface DescriptionProps {
  description: string | undefined;
  shortDescription: string | undefined;
}

export default function Description({
  description,
  shortDescription,
}: DescriptionProps) {
  return (
    <View>
      <Text>Description</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
