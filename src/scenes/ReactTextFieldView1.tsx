
import { inject, observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {AbstractReactTextFieldPresenter} from "@presenters/ReactTextFieldPresenters"

interface ReactTextFieldView1Props {
    reactTextFieldPresenter?: AbstractReactTextFieldPresenter
}

@inject("reactTextFieldPresenter")
@observer
class ReactTextFieldView1 extends React.Component<ReactTextFieldView1Props,{}> {

    presenter?: AbstractReactTextFieldPresenter
    constructor(props: ReactTextFieldView1Props) {
        super(props)
        this.presenter = props.reactTextFieldPresenter
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.presenter?.text}</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText = {(val) => this.presenter?.setText(val)} 
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
export default ReactTextFieldView1