import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage:"Image_1",
      fontsLoaded: false,
      dropDownHeight:40,

    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }


  render() {
    if(!this.state.fontsLoaded){
      return (
        <AppLoading>
        </AppLoading>
      )
    }
    else  {
      let previewImages={
        "Image_1":require("../assets/story_image_1.png"),
        "Image_2":require("../assets/story_image_2.png"),
        "Image_3":require("../assets/story_image_3.png"),
        "Image_4":require("../assets/story_image_4.png"),
        "Image_5":require("../assets/story_image_5.png"),
      }
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Story</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image 
              source={previewImages[this.state.previewImage]}
              style={styles.previewImage}
              />
              <View style={{height:RFValue(this.state.dropDownHeight)}}>
              <DropDownPicker
            items={[
              {label:"Image_1", value:"Image_1" },
              {label:"Image_2", value:"Image_2" },
              {label:"Image_3", value:"Image_3" },
              {label:"Image_4", value:"Image_4" },
              {label:"Image_5", value:"Image_5" },
            ]}
            defaultValue={this.state.previewImage}
            open={this.state.dropDownHeight==170?true:false}
            onOpen={()=>{this.setState({dropDownHeight:170})}}
            onClose={()=>{this.setState({dropDownHeight:40})}}
            style={{
              backgroundColor:"transparent",
              borderWidth:1,
              borderColor:"white",

            }}
            textStyle={{
              color:this.state.dropDownHeight==170?"black":"white",
              fontFamily:"BubbleGum-Sans",

            }}
            onSelectItem={(item)=>this.setState({previewImage:item.value})}
    />
              </View>
            </ScrollView>
          </View>
          <View style={{flex:0.08}}>
            <TextInput
            style={styles.inputField
            }
            placeholder={"title"}
            placeholderTextColor="white"
            onChangeText={title=>this.setState({title})}
            />
             <TextInput
            style={[styles.inputField,styles.inputFontExtra,styles.inputTextBig]}
            placeholder={"description"}
            placeholderTextColor="white"
            onChangeText={description=>this.setState({description})}
            multiline={true}
            numberOfLines={4}

            />
            <TextInput
            style={[styles.inputField,styles.inputFontExtra,styles.inputTextBig]}
            placeholder={"story"}
            placeholderTextColor="white"
            onChangeText={story=>this.setState({story})}
            multiline={true}
            numberOfLines={20}

            />
            <TextInput
            style={[styles.inputField,styles.inputFontExtra,styles.inputTextBig]}
            placeholder={"moral of the story"}
            placeholderTextColor="white"
            onChangeText={moral=>this.setState({moral})}
            multiline={true}
            numberOfLines={4}

            />
          </View>
          </View>
      )
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});
