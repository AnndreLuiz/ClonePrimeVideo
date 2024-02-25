import {Image, StyleSheet,TouchableOpacity} from "react-native";


export function MoviesCard({movieURL}) {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={movieURL}/>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    img: {
    marginRight: 20,
    }
})
