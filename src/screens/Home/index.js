import { Image ,Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView} from "react-native";
import PrimeVideoLogo  from "../../assets/prime_video.png";
import PrimeVideo  from "../../assets/amazon_logo.png";


import TheWheel from "../../assets/movies/the_wheel_of_time.png";

import {MOVIESWATCHING} from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";
import {MOVIESCRIME} from "../../utils/moviesCrimes";
import {MOVIESWATCH} from "../../utils/moviesWatch";



export default function Home()  {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image  style={styles.primeLogoImg} source={PrimeVideoLogo}/>
        <Image style={styles.amazonLogoImg}  source={PrimeVideo}/>
      </View>



      <View style={styles.category}>
        <TouchableOpacity>
            <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
      <TouchableOpacity style={styles.moveImageThumbail}>
          <Image style={styles.theWheelImg} source={TheWheel}/>
      </TouchableOpacity>

      <View>
        <Text style={styles.categoryTitleText}>Continue Watching</Text>
      </View>

      <FlatList 
      data={MOVIESWATCHING} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
       <MoviesCard movieURL={item.moviesURL}/> 
      )} 
      horizontal={true}
      contentContainerStyle={styles.contentList}
      showsHorizontalScrollIndicator={false}
       />

      <View>
        <Text style={styles.categoryTitleText}>Crime Movies</Text>
      </View>

      <FlatList
      data={MOVIESCRIME}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (<MoviesCard movieURL={item.moviesURL}/>)}
      horizontal={true}
      contentContainerStyle={styles.contentList}
      showsHorizontalScrollIndicator={false}
      />

      <View>
        <Text style={styles.categoryTitleText}>Watching in your language</Text>
      </View>

      <FlatList
      data={MOVIESWATCH}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (<MoviesCard movieURL={item.moviesURL}/>)}
      horizontal={true}
      contentContainerStyle={styles.contentList}
      showsHorizontalScrollIndicator={false}
      />
      </ScrollView>

    </View>
  )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#232f3f",
      alignItems: "flex-start", 
  },
  header: {
      width: "100%",
      paddingTop: 30,
      alignItems: "center",
      justifyContent: "center",	
  },
  amazonLogoImg: {
      marginTop: -32,
      marginLeft: 30,
  },
  category: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 30,
      marginBottom: 15,
  },
  categoryText: {
      fontSize: 14,
      fontWeight: "700",
      color: "white",
  },
  theWheelImg:{
    marginright: 0,
    marginleft: 0,
  },
  moveImageThumbail:{
    width: "100%",
    alignItems: "center",
  },
  categoryTitleText:{
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    padding: 15,
  },
  contentList:{
    paddingLeft: 18,
    paddingRight: 30,
  },
  contentMovies:{
    
  },
});