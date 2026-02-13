import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LyceeItem {
  data: any[];
  nom?: string,
  sousTitre?: string;
  type?: string;
}

export const List = ({ data, nom, sousTitre, type }: LyceeItem) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="bg-[#BC5727] p-4 mb-3 mx-4 rounded-2xl flex-row items-center shadow-sm">

          <View className="bg-[#5B3B1E] w-12 h-12 rounded-full items-center justify-center mr-4">
            <Ionicons name="business" size={20} color="#EAE1CB" />
          </View>

          <View className="flex-1">
            <Text className="text-[#EAE1CB] font-semibold text-base">
            {item[nom!] || 'Non renseigné'}
            </Text>
            
            <Text className="text-[#EAE1CB] text-sm italic">
              {item[sousTitre!] || 'Non renseigné'}
            </Text>
            
            <Text className="text-[#F1C166] font-bold text-xs uppercase">
              {item[type!] || 'Non renseigné'}
            </Text>
          </View>
        </View>
      )}
      contentContainerStyle={{ paddingVertical: 0 }}
    />
  );
};