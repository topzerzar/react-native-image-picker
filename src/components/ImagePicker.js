import React, { Component } from 'react';
import {
  View,
  Image,
  PixelRatio,
  StyleSheet,
} from 'react-native';

import ImgPicker from 'react-native-image-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});

class ImagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: null,
      videoSource: null,
    };
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImgPicker.showImagePicker(options, (response) => {
      console.log(`Response: ${response}`);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  selectVedioTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      medaiType: 'video',
      videoQuality: 'medium',
    };

    ImgPicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    });
  }

  render() {
    return (
      <View>
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
      </View>
    );
  }
}

export default ImagePicker;