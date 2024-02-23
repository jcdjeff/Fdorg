import { View } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[2]} />
      <ProductListItem product={products[5]}/>
    </View>
  );
};
