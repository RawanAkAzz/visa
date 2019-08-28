import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity , Dimensions} from "react-native";
import { Button } from 'react-native-elements'
import { Icon, Item, Content } from "native-base"



const s = StyleSheet.create({
  TextInput: {
    backgroundColor: "#fff",
    marginTop: 5,
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
    resizeMode:'contain',
    width: 100,
    height: 80,
    marginTop: 0,
    padding: 30,
    paddingLeft: 30,
  },
  visa: {
    height: 90,
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: '#ffff',
    marginTop: 10,
    paddingTop: 10,
    elevation: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    paddingBottom: 10,
    borderTopWidth: 3,
    borderColor: '#ddd',
    padding: 20,
    flexDirection: "row",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginBottom: 10,
    justifyContent: "space-between",
    width:Dimensions.get("window").width

  },
  arrow: {
    marginLeft: 70,
    //alignSelf:"flex-start",
    alignContent: "flex-end",
    padding: 50,
    paddingEnd: 100,
    paddingTop: 30,
    marginBottom: 30,
    alignSelf: "center",
    color: '#191970',
    width: 28,
    height: 50,
    justifyContent:"space-between"
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
        show: false
      }
  }


  submitForm = (val, text) => {
    this.setState({ type: text })

  }
  comp = () => {
    if (this.state.show == true) {
      this.setState({ show: false })
    }
    else {
      console.log('else')
      this.setState({ show: true })
    }
  }

  render() {

    console.log(this.state.type)
    return (
      <Content>

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
                <Image style={s.imag} source={require("./Images/visa-logo-v2.jpg")}  /> :
                this.state.type == "Paypal" ?
                  <Image style={s.imag} source={require("./Images/paypal.png")} /> :
                  <Image style={s.imag} source={require("./Images/master.png")} />}


            </View>
              <TouchableOpacity onPress={() => { this.comp() }} style={{  height: 50, marginTop: 14 }}>
                
                  {/* <Icon name="md-arrow-dropright" style={{ color: '#191970', fontSize: 35 }} /> */}
                  

                  <Icon name="md-arrow-dropdown" style={{ color: '#191970', fontSize: 35 }} />
                

              </TouchableOpacity>
            </View>
          {/* {this.state.show == true ? */}
            <View style={s.TextInput}>
               <View>

</View>
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
                <View style={{
                  width: 200, height: 90, borderBottomLeftRadius: 60, backgroundColor: "white", shadowOffset: {
                    width: 0,flexDirection:'column',
                    height: 2,
                  },
                  shadowOpacity: 0.40,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                  <Text style={{ color: "#5DA2D5", textAlign: "center", margin: "auto" , justifyContent:"center", alignContent:"center"}} onPress={this.onPress} >Payment Amount</Text>
                  <Text style={{ color: '#191970', fontSize:20, textAlign: "center", margin: "auto", justifyContent:"center" , alignContent:"center"  , marginTop:18}} onPress={this.onPress} >470,00JOD</Text>

                </View>
                <TouchableOpacity>
                  <View style={{ width: 200, height: 90, borderBottomRightRadius: 60, backgroundColor: "#051A38" }}>
                    <Text style={{ color: "white", textAlign: "center", justifyContent: "center", fontSize: 40 , marginTop :12 }}>Pay</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
             <View></View>
        </ScrollView>
      </Content>
    );
  }
}
