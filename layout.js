import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const grid = [
  {
    id: "1",
    flex: 2,
    flexDirection: 'row',
    children: [
      {
        id: "1-1",
        flex: 2,
        backgroundColor: 'black'
      },
      {
        id: "1-2",
        flex: 1,
        flexDirection: 'row',
        children: [
          {
            id: "1-2-1",
            flex: 1,
            flexDirection: 'column',
            children: [
              {
                id: "1-2-1-1",
                flex: 1,
                backgroundColor: 'lightgrey'
              },
              {
                id: "1-2-1-2",
                flex: 1,
                backgroundColor: 'fuchsia'
              }
            ]
          },
          {
            id: "1-2-2",
            flex: 1,
            flexDirection: 'column',
            children: [
              {
                flex: 1,
                backgroundColor: 'pink'
              },
              {
                flex: 1,
                backgroundColor: 'purple'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    flex: 1,
    flexDirection: 'row',
    children: [
      {
        id: "2-1",
        flex: 2,
        backgroundColor: 'yellow'
      },
      {
        id: "2-2",
        flex: 1,
        backgroundColor: 'gold'
      }
    ]
  },
  {
    id: "3",
    flex: 5,
    flexDirection: 'row',
    children: [
      {
        id: "3-1",
        flex: 2,
        flexDirection: 'row',
        children: [
          {
            id: "3-1-1",
            flex: 2,
            flexDirection: 'row',
            children: [
              {
                id: "3-1-1-1",
                flex: 1,
                backgroundColor: 'sandybrown'
              }
            ]
          },
          {
            id: "3-1-2",
            flex: 1,
            flexDirection: 'column',
            children: [
              {
                id: "3-1-2-1",
                flex: 1,
                backgroundColor: 'orangered'
              },
              {
                id: "3-1-2-2",
                flex: 1,
                backgroundColor: 'maroon'
              }
            ]
          }
        ]
      },
      {
        id: "3-2",
        flex: 1,
        flexDirection: 'column',
        children: [
          {
            flex: 3,
            backgroundColor: 'mediumblue'
          },
          {
            flex: 2,
            backgroundColor: 'dodgerblue'
          }
        ]
      }
    ]
  }
];

const renderGrid = (grid) => {
  return (
    <>
      {grid.map(container => (
        <View key={container.id} style={{flex: container.flex, flexDirection: container.flexDirection, backgroundColor: container.backgroundColor}}>
          {container.children && renderGrid(container.children)}
        </View>
      ))}
    </>
  )
}

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      {renderGrid(grid)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20
  },
});

export default Flex;
