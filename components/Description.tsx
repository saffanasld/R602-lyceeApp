import { View, Text } from 'react-native';

interface DescriptionItems {
  titre: string;
  texte: string;
}

const Description = ({ titre, texte }: DescriptionItems) => {
  return (
    <View className="px-6 py-5">
      <Text className="text-[#5B3B1E] text-2xl font-black uppercase">
        {titre}
      </Text>
      
      <View className="h-1 w-12 bg-[#979E6C] my-2 rounded-full"/>
      
      <Text className="text-[#5B3B1E]/70 text-sm italic">
        {texte}
      </Text>
    </View>
  );
};

export default Description;