import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const Guidelines = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.guidelineContainer}>
        <Text style={styles.header}>Home</Text>
        <Text style={styles.guidelineText}>
          Slider for reviewer
        </Text>
        <Text style={styles.guidelineText}>
          see some  Latest Reviewer
        </Text>
        <Text style={styles.guidelineText}>
          Description: Use the slider to see some latest reviewer and all the available reviewer for IT students
        </Text>
      </View>

      <View style={styles.guidelineContainer}>
        <Text style={styles.header}>Latest Reviewer</Text>
        <Text style={styles.guidelineText}>It will show all the available Latest Reviewer</Text>
        <Text style={styles.guidelineText}>
          Functionality: View some latest reviewer.
        </Text>
        <Text style={styles.guidelineText}>
          Description: Access this section to view some latest uploads
          and you can review when you click some available reviewer in the 
          reviewer buttons.
        </Text>
      </View>
      <View style={styles.guidelineContainer}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.guidelineText}>
          View your information and edit it.
        </Text>
        <Text style={styles.guidelineText}>
          Functionality: - View your personal information. - Edit your
          information and add a photo.
        </Text>
        <Text style={styles.guidelineText}>
          Description: You can access and review your personal details stored in
          the application. Additionally, edit your profile information,
          including adding or updating your photo to personalize your profile.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#252C4A'
  },
  guidelineContainer: {
    marginBottom: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'yellow'
  },
  guidelineText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
    backgroundColor: 'white'

  }
})

export default Guidelines
