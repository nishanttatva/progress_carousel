import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  scrollContainer: {marginVertical: 20},
  itemContainer: {marginVertical: 10},
  indicatorContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    overflow: 'hidden',
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
  },
  image: {flex: 1},
  textBase: {marginTop: 10, alignSelf: 'center'},
});

const StepIndicator = ({
  index,
  itemsCount,
  size,
  iconSize,
  level,
  activeColor,
  inactiveColor,
}) => {
  let prevLineColor = inactiveColor,
    nextLineColor = inactiveColor,
    iconColor = activeColor;

  if (level > index) {
    prevLineColor = activeColor;
    nextLineColor = level > index + 1 ? activeColor : inactiveColor;
    iconColor = activeColor;
  } else {
    iconColor = 'transparent';
    nextLineColor = inactiveColor;
  }

  return (
    <View style={styles.indicatorContainer}>
      <View
        style={{
          height: 2,
          flex: 1,
          marginEnd: 2,
          backgroundColor: index === 0 ? 'transparent' : prevLineColor,
        }}
      />
      <View
        style={{
          borderWidth: 2.5,
          borderColor: prevLineColor,
          transform: [{rotate: '45deg'}],
          zIndex: 2,
        }}>
        <MaterialCommunityIcons
          name={'check'}
          color={iconColor}
          size={iconSize}
          style={{transform: [{rotate: '315deg'}]}}
        />
      </View>
      <View
        style={{
          height: 2,
          flex: 1,
          marginStart: 2,
          backgroundColor:
            index === itemsCount - 1 ? 'transparent' : nextLineColor,
        }}
      />
    </View>
  );
};

function ProgressCarousel(props) {
  let {
    items,
    imageSize,
    iconSize,
    level,
    activeColor,
    inactiveColor,
    textStyle,
  } = props;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}>
      {items.map((item, index) => (
        <View
          key={item?.id?.toString() ?? `${index}`}
          style={[
            styles.itemContainer,
            {
              width: imageSize + 20,
            },
          ]}>
          <StepIndicator
            index={index}
            itemsCount={items.length}
            level={level}
            size={imageSize}
            iconSize={iconSize}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          />
          <View
            style={[
              styles.imageContainer,
              {
                height: imageSize,
                width: imageSize,
                borderRadius: imageSize / 2,
                borderColor: level > index ? activeColor : inactiveColor,
                opacity: level > index ? 1 : 0.5,
              },
            ]}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </View>
          <Text
            style={[
              textStyle,
              styles.textBase,
              {
                color: level > index ? activeColor : inactiveColor,
                opacity: level > index ? 1 : 0.5,
              },
            ]}
            numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

ProgressCarousel.defaultProps = {
  imageSize: 100,
  iconSize: 15,
  level: 0,
  items: [],
  activeColor: 'yellow',
  inactiveColor: 'white',
  textStyle: {fontSize: 16},
};

ProgressCarousel.propTypes = {
  imageSize: PropTypes.number,
  iconSize: PropTypes.number,
  level: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  activeColor: PropTypes.string.isRequired,
  inactiveColor: PropTypes.string.isRequired,
  textStyle: Text.propTypes.style,
};

export default ProgressCarousel;

