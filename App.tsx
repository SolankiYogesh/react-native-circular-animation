import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const App = () => {
  const scale = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scale.value, [0, 1], [0, 150]),
        },
      ],
    };
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity
        onPress={() => {
          scale.value = withTiming(scale.value === 0 ? 1 : 0, {
            duration: 500,
          });
        }}
        style={style.toggleContainer}>
        <Text style={style.toggleText}>Close</Text>
      </TouchableOpacity>
      <Animated.View style={[style.circularTransition, animatedStyle]} />
    </SafeAreaView>
  );
};

export default App;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: width / 3,
    width: width / 3,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  toggleContainer: {
    padding: 10,
    zIndex: 1000,
    backgroundColor: 'lightblue',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  toggleText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  circularTransition: {
    padding: 20,
    zIndex: 1,
    backgroundColor: '#038cfc',
    borderRadius: 1000,
    overflow: 'hidden',
    position: 'absolute',
  },
});
