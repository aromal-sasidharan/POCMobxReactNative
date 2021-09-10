import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

@observer
class ReactTextFieldView extends React.Component<{},{}> {

    text:String = "HelloWorld!"
   
    constructor(props: {}) {
        super(props)
        makeObservable(this,{
            text: observable
        })
    }


    @action changeText = (val:String) => {
        this.text = val
        console.log("change text called", val)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.text}</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText = {this.changeText} 
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'stretch',
      justifyContent: 'space-evenly',
      padding: 40
    },
    textInput: {
        backgroundColor: "white",
        height : 40
    
    }
  });
export default ReactTextFieldView