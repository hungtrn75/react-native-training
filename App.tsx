/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component, Dispatch } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { counterActions } from "./ducks/counter";

interface Props {
  count: number;
  onIncrement: (time: number) => void;
  onDecrement: (time: number) => void;
}

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{this.props.count}</Text>
        <View>
          <Button
            title="Increment +"
            onPress={() => this.props.onIncrement(2)}
          />
          <Button
            title="Decrement -"
            onPress={() => this.props.onDecrement(1)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  count: state.counterReducers
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      onIncrement: counterActions.increaseAction,
      onDecrement: counterActions.decreaseAction
    },
    dispatch as any
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
