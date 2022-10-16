
import React, { Fragment } from 'react';
import { Calendar } from "react-native-calendars";
import { View, TextInput, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#5a415b' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.background}>
          <View style={styles.header}>
          </View>
          <View style={styles.container}>
          
              <Calendar
                currnet={'2022-10-15'}
                minDate={'2022-10-01'}
                maxDate={'2022-10-31'}
                markingType={'custom'}
                markedDates={{
                  '2022-10-16': {
                    customStyles: {
                      container: {
                        backgroundColor: '#483448',
                      }
                    }
                  }
                }}
                theme={{
                  backgroundColor: '#5a415b',
                  calendarBackground: '#5a415b',
                  dayTextColor: '#fff',
                  todayTextColor: '#fff',
                  monthTextColor: '#fff',
                  textMonthFontWeight: 'bold',
                  textDisabledColor: '#887e9f',
                  textDayHeaderFontWeight: '500',
                  arrowColor: '#fff',
                  textMonthFontSize: 20,
                }}
              />


          </View>
          <View style={styles.todoContainer}>
            <View>
              <Text style={styles.todoModalHeader}>
                Today
              </Text>
            </View>
            <View style={styles.todoItem}>
              <View style={styles.todoItemLeft}>
                <View style={[{ backgroundColor: '#fd8b8b' }, styles.todoItemIcon]}>
                </View>
                <View style={styles.todoItemTextContainer}>
                  <Text style={styles.todoItemText}>UI Design for Azimo</Text>
                </View>
              </View>
              <View style={[{ backgroundColor: '#fd8b8b' }, styles.todoItemStatusContainer]}>
                <Text style={styles.todoItemStatus}>Done</Text>
              </View>
            </View>
            <View style={styles.todoItem}>
              <View style={styles.todoItemLeft}>
                <View style={[{ backgroundColor: '#a5abff' }, styles.todoItemIcon]}>
                </View>
                <View style={styles.todoItemTextContainer}>
                  <Text style={styles.todoItemText}>CG IOS App Prome</Text>
                </View>
              </View>
              <View style={[{ backgroundColor: '#a5abff' }, styles.todoItemStatusContainer]}>
                <Text style={styles.todoItemStatus}>In Progress</Text>
              </View>
            </View>
            <View style={styles.todoItem}>
              <View style={styles.todoItemLeft}>
                <View style={[{ backgroundColor: '#8cd3fd' }, styles.todoItemIcon]}>
                </View>
                <View style={styles.todoItemTextContainer}>
                  <Text style={styles.todoItemText}>Meeting with CEO</Text>
                </View>
              </View>
              <View style={[{ backgroundColor: '#8cd3fd' }, styles.todoItemStatusContainer]}>
                <Text style={styles.todoItemStatus}>Done</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>

  )
}
/**
 * background : 
 * pink : #fd8b8b,
 * violet: #a5abff,
 * mint : #8cd3fd
 * disable : 887e9f
 */
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#5a415b'
  },
  container: {
    paddingTop: 50,
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
  },

  todoContainer: {
    flex: 0.8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 300,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff'
  },

  todoModalHeader: {
    paddingTop: 40,
    paddingLeft: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5a4859'
  },

  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 10
  },

  todoItemLeft: {
    flexDirection: 'row',
  },

  todoItemIcon: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },

  todoItemTextContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },

  todoItemText: {
    fontSize: 18,
    color: '#5a4859'

  },

  todoItemStatusContainer: {
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  todoItemStatus: {
    color: '#fff',
    fontWeight: 'bold'
  }

})

export default App;
