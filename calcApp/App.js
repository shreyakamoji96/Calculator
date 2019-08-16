/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Alert, TouchableOpacity, StyleSheet, Button, Text, View } from 'react-native';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      calcText: ""
    };
    this.ops = ['D', '+', '-', '*', '/'];

  }

  calclauteResult() {
    const text = this.state.calcText;

    this.setState({
      restText: eval(text)
    })
  }

  validate() {
    const text = this.state.calcText;

    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }
  btnPressed(text) {
    if (text == '=') {
      return this.validate() && this.calclauteResult();
    }
    this.setState({
      calcText: this.state.calcText + text
    })
  }
  onOperate(ops) {
    //console.log(ops)
    switch (ops) {
      case 'D': let text = this.state.calcText.split('');
        text.pop();
        this.setState({
          calcText: text.join('')
        });
        break;


      case '+':
      case '-':
      case '*':
      case '/': let lastChar = this.state.calcText.split('').pop();
        if (this.ops.indexOf(lastChar) > 0) return
        if (this.state.text == "") return
        this.setState({
          calcText: this.state.calcText + ops
        })

      // let arrNums = calcText.split('+')
      //console.log(calcText);


    }
  }



  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity key={nums[i][j]} onPress={() => { this.btnPressed(nums[i][j]) }} style={styles.btn} >
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }


    let opsRow = [];
    for (let i = 0; i < 5; i++) {
      opsRow.push(<TouchableOpacity key={this.ops[i]} onPress={() => { this.onOperate(this.ops[i]) }} style={styles.btn}>
        <Text style={[styles.btnText, styles.white]}>{this.ops[i]}</Text>
      </TouchableOpacity>)
    }

    return (
      <View style={styles.container}>

        <View style={styles.calculation}><ScrollView><Text style={styles.calTextcss}>{this.state.calcText}</Text></ScrollView></View>


        <View style={styles.result}><Text style={styles.resText}>{this.state.restText}</Text ></View>

        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{opsRow}</View>
        </View>

      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calTextcss: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',

  },
  white: {
    color: 'white',
  },
  btn: {
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  btnText: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  resText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 30,


  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,

  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    fontSize: 30,

  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',

  },
  buttons: {
    flexGrow: 3,
    flexDirection: 'row',

  },

  numbers: {
    flex: 2,
    backgroundColor: 'gray'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',

  }

});







