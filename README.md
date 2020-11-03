## React Native Progress Carousel

Progress Carousel - Pure JS implementation

#### Usage

```js
import ProgressCarousel from '../../components/ProgressCarousel';

function App(props) {
  return (
    <View style={{flex: 1}}>
      <ProgressCarousel
        items={[
          {
            id: 1,
            name: 'Gift 1',
            image: 'https://randomuser.me/api/portraits/men/10.jpg',
          },
          {
            id: 2,
            name: 'Gift 2',
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
          },
          {
            id: 3,
            name: 'Gift 3',
            image: 'https://randomuser.me/api/portraits/men/6.jpg',
          },
          {
            id: 4,
            name: 'Gift 4',
            image: 'https://randomuser.me/api/portraits/men/9.jpg',
          },
        ]}
        activeColor={'red'}
        inactiveColor={'white'}
        imageSize={150}
        iconSize={20}
        level={1}
      />
    </View>
  );
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
