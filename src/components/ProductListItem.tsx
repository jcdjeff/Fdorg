import { Image, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import products from '@assets/data/products';
import { Product } from '../types'

export const defaultImg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {
return (
<View style={styles.container}>
    <Image style={styles.image} source={{ uri: product.image || defaultImg }} />
    <Text style={styles.title}>{product.name} </Text>
    <Text style={styles.price}>$ {product.price}</Text>
</View>
);
};

export default ProductListItem; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20, 
        padding: 10,
        flex: 1, 
        maxWidth: "50%",
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10, 

    },
    price: {
        color: Colors.light.tint, 
    }

});
