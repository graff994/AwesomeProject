import * as React from 'react';
import { Text, View, TextInput, Button, ScrollView, Image, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import { Video } from 'expo-av';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    marginTop:30,
    width: 300,
    height: 200,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  
});



function Feed() {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handlePayment = () => {
    // Implementa il codice per gestire il pagamento qui
  };
  
  const [isPlaying, setIsPlaying] = React.useState(false);


  return (
    <ScrollView style={{ backgroundColor: '#AEC3B0'}}>
      <Text style={{ backgroundColor: '#FFA8A9', borderRadius: 20, marginTop: 50, marginBottom: 30, fontSize: 40 }}>
        APP DI PROVA
      </Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/isolafelice.png')} style={{ width: 350, height: 300 }} />
       
    
        <Text style={{ fontSize: 14, marginTop: 20 }}>
          {'\n'}
          Cos’è Lorem Ipsum?
          Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è
          considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una
          cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque
          secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso
          popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano
          passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva
          versioni del Lorem Ipsum.
          {'\n'}
          {'\n'}
          Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è
          considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una
          cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque
          secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso
          popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano
          passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva
          versioni del Lorem Ipsum.
          {'\n'}
          {'\n'}
        </Text>

        <MapView
        style={{ width: '100%', height: 300, marginTop: 20 }}
        initialRegion={{
          latitude: 44.405650,
          longitude: 8.946256,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 44.405650, longitude: 8.946256 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>

      <View style={styles.container}>
      <Video
        source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={isPlaying}
        isLooping
        style={styles.video}
      />

<View style={styles.controls}>
  <Button
    title={isPlaying ? 'Pause' : 'Play'}
    onPress={() => setIsPlaying(!isPlaying)}
  />
</View>

    </View>

        <View style={{ marginTop: 20 }}>
          <RadioButton.Group onValueChange={handleSelect} value={selectedValue}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="opzione1" size={20} />
              <Text style={{ fontSize: 20 }}>Opzione 1</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="opzione2" size={50} />
              <Text style={{ fontSize: 20 }}>Opzione 2</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="opzione3" />
              <Text style={{ fontSize: 20 }}>Opzione 3</Text>
            </View>
          </RadioButton.Group>
        </View>
        

        <Form />

        
      </View>
      
    </ScrollView>
  );
}


function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      
    </View>
    
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    // Gestisci l'invio del form qui
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 2,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Feed" activeColor="#e91e63" labelStyle={{ fontSize: 10 }} style={{ backgroundColor: 'blue' }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={29} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={29} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <MyTabs />
   </NavigationContainer>
    
  );
}
