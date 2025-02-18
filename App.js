import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nome}>Cargos T.I.</Text>

      <ScrollView>

      <View style={styles.ficha}> 
      <Text style={styles.title}>Programador Júnior</Text>
      <Text style={styles.txt}>Programadores Júnior estão começando, com pouca experiência, e precisam de orientação constante. Eles lidam com tarefas mais simples e ainda estão aprendendo.</Text>
      <Image style={styles.img} source={require('./assets/junior.png')}/>
      </View>

      <View style={styles.ficha}>
      <Text style={styles.title}>Programador Pleno</Text>
      <Text style={styles.txt}> Programadores Pleno têm mais experiência, trabalham de forma mais independente e podem assumir responsabilidades maiores, resolvendo problemas mais complexos, mas ainda consultam colegas experientes.</Text>
      <Image style={styles.img} source={require('./assets/pleno.webp')}/>
      </View>

      <View style={styles.ficha}>
      <Text style={styles.title}>Programador Senior</Text>
      <Text style={styles.txt}>Programadores Sêniores têm grande experiência, são independentes em decisões técnicas e complexas, lideram equipes e tomam decisões estratégicas em projetos. Eles têm um papel central no desenvolvimento e na direção técnica dos projetos.</Text>
      <Image style={styles.img} source={require('./assets/senior.jpg')}/>
      </View>

      </ScrollView>
      <StatusBar style="auto" />

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ficha:{
    width: '96%',
    backgroundColor: '#c9d4d6',
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 25,
    
  },
  img: {
    width: 300,
    height: 250,
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 13,
    alignSelf: 'center'
  },
  title:{
    fontWeight: 800,
    fontSize: 30,
    marginLeft: 25
  }, 
  nome: {
    height: '6%',
    width: '100%',
    fontWeight: 900,
    fontSize: 25,
    color: '#172fa6',
    textDecorationLine: 'underline',
    backgroundColor: '#b3b3b3',
    textAlign: 'center',
    paddingTop:5,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    marginBottom:15
  },
  txt: {
    marginLeft: 25
  }
});
