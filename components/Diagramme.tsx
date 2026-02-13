import { View, Text, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export const Diagramme = ({ stats }: { stats: any[] }) => {
  const maxVal = Math.max(...stats.map(s => s.value));

  const Column = ({ label, value, color }: any) => {
    const animHeight = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(animHeight, {
        toValue: (value / maxVal) * 200,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, [value]);

    return (
      <View className="items-center flex-1">
        <Text className="font-bold text-[#EAE1CB] mb-2">{value}</Text>
        <View className="w-12 bg-[#EAE1CB]/20 rounded-full justify-end overflow-hidden" style={{ height: 200 }}>
          <Animated.View style={{ height: animHeight, backgroundColor: color }} className="w-full rounded-full" />
        </View>
        <Text className="text-xs text-[#EAE1CB] font-semibold mt-4 mx-1 text-center uppercase">{label}</Text>
      </View>
    );
  };

  return (
    <View className="bg-[#979E6C] m-5 p-6 rounded-2xl shadow-md">
      <View className="flex-row items-end justify-around">
        {stats.map((item, index) => (
          <Column key={index} label={item.label} value={item.value} color={item.color} />
        ))}
      </View>
    </View>
  );
};