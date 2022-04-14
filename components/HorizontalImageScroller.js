import React from "react";
import { View, Image, FlatList } from "react-native";
import PropTypes from "prop-types";

export default class HorizontalImageScroller extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    height: PropTypes.number,
  };

  static defaultProps = {
    height: 250,
  };

  constructor(props) {
    super(props);

    this._isMounted = false;
  }

  state = {
    loadedImages: [],
  };

  async componentDidMount() {
    this._isMounted = true;

    const { images } = this.props;
    const loadedImages = await Promise.all(
      images.map(url =>
        Image.prefetch(url).then(
          () => url,
          () => false
        )
      )
    );

    this._isMounted &&
      this.setState({
        loadedImages: loadedImages.filter(Boolean),
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderImage = ({ item: url }) => {
    const { height } = this.props;
    const style = {
      height,
      aspectRatio: 1,
    };
    return (
      <View style={{ position: "relative" }} key={url}>
        <Image source={{ uri: url }} resizeMode="cover" style={style} />
      </View>
    );
  };

  render() {
    const { loadedImages } = this.state;

    if (loadedImages.length < 1) return null;

    return (
      <FlatList
        data={loadedImages}
        renderItem={this.renderImage}
        horizontal={true}
        inverted={true} // TODO: lang
        keyExtractor={url => url}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}
