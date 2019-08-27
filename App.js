import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements'
import { Icon, Item } from "native-base"
import Carousel from 'react-native-snap-carousel';


const s = StyleSheet.create({
  TextInput: {
    backgroundColor: "#fff",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "blue",
  },
  card: {
    height: 70,
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 3,
    elevation: 3,
    alignContent: "center",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.40,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    textShadowColor: "white",
    color: "blue",
  },
  t: {
    color: "blue",
    fontSize: 40,
  },
  imag: {
    width: 120,
    height: 30,
    marginTop: 50,
    padding: 30,
    paddingLeft: 30,
    // borderTopEndRadius:60,

  },
  visa: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingEnd: 90,
    paddingTop: 10,
    elevation: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    paddingBottom: 10,
    borderTopWidth: 3,
    borderColor: '#ddd',
    padding: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginBottom: 10,

  },
  arrow: {
    flexDirection: "row",
    alignSelf:"flex-end",
    padding: 30,
    paddingEnd: 81,
    paddingTop: 30,
    marginBottom: 30,
    alignSelf: "center",
    color: 'green',
    width: 28,
    height: 28,
  },
  b: {
    flexDirection: "row",
    borderBottomEndRadius: 30,
    height: 100,
    borderTopEndRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  carousel: {
    height: 200,
  }
});


const array = [
  {
    image: 'https://disneyrewards.com/app/uploads/2018/07/CardArt-Plain-Front-60th.png',
    text: 'Visa'
  },
  {
    image: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/debit-card/pp-bdmc-hero-card-new.png?01AD=3DiFiADgyA3rx3_Cmrh3wqq5BtxROnN0KAetnrTmKrmn_ukzUTRYIyA&01RI=0DF4A216FCB5D72&01NA=-end',
    text: 'Paypal',
  },
  {
    image: "https://www.mastercard.jo/ar-jo/consumers/find-card-products/credit-cards/_jcr_content/contentpar/herolight_2079794736/image.adaptive.479.high.jpg/1541713936207.jpg",
    text: "Master",
  }
]

export default class Example extends Component {
  constructor(props) {
    super(props),
      this.state = {
        focused: 'name',
        number: '',
        name: '',
        cvc: '',
        expiry: '',
        address: '',
        index: 0,
        type: 'Visa',
        show:false
      }
  }


  // renderItem = ({item, index}) => {
  //   const {backgroundColor} = item;
  //   return (
  //       <TouchableOpacity style={[s.item, {backgroundColor}]}
  //                         onPress={() => {
  //                             this._carousel.scrollToIndex(index);
  //                         }}>
  //        ]
  //       </TouchableOpacity>)


  submitForm = (val, text) => {
    this.setState({ type: text })

  }
  comp(){
    console.log('hi')
    if(this.state.show == true){
      this.setState({show:false})
    }
    else{
      this.setState({show:true})
    }
  }

  render() {

    console.log(this.state.type)
    return (
      // <Carousel style={s.carousel}
      //   data={data}
      //   renderItem={this.renderItem}
      //   itemWidth={200}
      //   containerWidth={width - 20}
      //   separatorWidth={20}
      //   ref={(c) => {
      //     this._carousel = c;
      //   }}
      //pagingEnable={false}
      // />
      <View>

        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <ScrollView horizontal={true}>

            {array.map((val, ind) => {
              return (
                <TouchableOpacity onPress={() => { this.submitForm(val.image, val.text) }}>


                  <Image source={{ uri: `${val.image}` }} key={ind}
                    style={{ width: 180, height: 100, padding: 10, justifyContent: 'space-around', }} />
                </TouchableOpacity>
              )
            })}

          </ScrollView>
        </View>


        <ScrollView>
          <View style={s.visa}>

            <View>

              {this.state.type == "Visa" ?
                <Image style={s.imag} source={require("./Images/visa-logo-v2.jpg")} /> :
                this.state.type == "Paypal" ?
                  <Image style={s.imag} source={require("./Images/paypal.png")} /> :
                  <Image style={s.imag} source={require("./Images/master.png")} />}


            </View>
            <View style={s.arrow}>
            <TouchableOpacity onPress={() => { this.comp() }}>
                {/* {this.state.show == false?
                <Icon name="arrow-dropright" style={{ width:50, color:'blue' ,fontSize:35,marginTop:10,marginLeft:130}} />
             :                  */}
             
             {/* <Text> Hi</Text> */}
             <Icon name="arrow-dropdown" style={{ width:50, color:'blue' ,fontSize:35,marginTop:10,marginLeft:130}} />   
             {/* //         } */}

              </TouchableOpacity>
            </View>
          </View>
          <View style={s.TextInput}>

            <View style={s.card}>
              <TextInput ref="name" placeholder="CARDHOLDER NAME" autoFocus={true} value={this.state.name} onChangeText={(name) => this.setState({ name: name })} />
            </View>
            <View style={s.card}>
              <TextInput ref="number" placeholder="CARD NUMBER" autoFocus={true} value={this.state.number} onChangeText={(number) => this.setState({ number })} />
            </View>
            <View style={s.card}>
              <TextInput ref="expiry" type="Number" placeholder="EXPIRD DATE" autoFocus={true} value={this.state.expiry} onChangeText={(expiry) => this.setState({ expiry })} />
            </View>
            <View style={s.card}>
              <TextInput ref="cvv" placeholder="CVV" autoFocus={true} value={this.state.cvv} onChangeText={(cvv) => this.setState({ cvv })} />
            </View>
            <View style={s.card}>
              <TextInput ref="address" placeholder="ADDRESS" autoFocus={true} value={this.state.address} onChangeText={(address) => this.setState({ address })} />
            </View>
            <View style={s.b}>
              <View style={{ width: 200, height: 90, borderBottomLeftRadius: 60, backgroundColor: "blue", text: "pay" }}>
                <Button >Pay</Button>
              </View>
              <View style={{ width: 200, height: 20, borderBottomLeftRadius: 60, backgroundColor: "blue", text: "pay" }}>
                <Button >Pay</Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
