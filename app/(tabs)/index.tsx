import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Description from 'components/Description';
import { Ionicons } from '@expo/vector-icons';
import "global.css";


export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#EAE1CB]">
      <Description 
        titre="LYCÉE APP" 
        texte="Explorez les données des lycées d'Île-de-France." 
      />

      <ScrollView contentContainerStyle={{ paddingInline: 15 }}>
        
        <Link href="/creteil" asChild>
          <Pressable style={{ borderColor: '#5B3B1E' }} className="p-5 rounded-2xl mb-4 border border-[#5B3B1E]">
            <View className="flex-row items-center justify-between">
            <View className="flex-row items-center flex-1 mb-2">

              <View style={{ marginRight: 10 }}>
                <Ionicons name="school-outline" size={24} color="#5B3B1E"/>
              </View>

                <Text style={{ color: '#5B3B1E' }} className="text-[#5B3B1E] font-black uppercase flex-1">lycées de l'académie de créteil</Text>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#5B3B1E" />
            </View>
            <Text style={{ color: '#5B3B1E' }} className="text-[#EAE1CB] text-sm italic">Visualisez la liste des lycées de l'académie de Créteil.</Text>
          </Pressable>
        </Link>

        <Link href="/prives" asChild>
          <Pressable style={{ borderColor: '#BC5727' }} className="p-5 rounded-2xl mb-4 border">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1 mb-2">

              <View style={{ marginRight: 10 }}>
                <Ionicons name="ribbon-outline" size={24} color="#BC5727"/>
              </View>

                <Text style={{ color: '#BC5727' }} className="font-black uppercase flex-1">lycées privés</Text>
              </View>
              
                <Ionicons name="chevron-forward" size={20} color="#BC5727" />
              </View>
            <Text style={{ color: '#BC5727' }} className="text-sm italic">Visualisez la liste des lycées privés de la région parisienne.</Text> 
          </Pressable>
        </Link>

        <Link href="/stats" asChild>
          <Pressable style={{ borderColor: '#5B3B1E' }} className="p-5 rounded-2xl mb-4 border">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1 mb-2">

              <View style={{ marginRight: 10 }}>
                <Ionicons name="stats-chart-outline" size={24} color="#5B3B1E"/>
              </View>

                <Text style={{ color: '#5B3B1E' }} className="font-black uppercase flex-1">répartition des lycées</Text>
              </View>
              
                <Ionicons name="chevron-forward" size={20} color="#5B3B1E" />
              </View>
            <Text style={{ color: '#5B3B1E' }} className="text-sm italic">Visualisez les statistiques des type de lycées : LP PR, LPO, LGT.</Text> 
          </Pressable>
        </Link>
        
        <Link href="/versailles" asChild>
          <Pressable style={{ borderColor: '#BC5727' }} className="p-5 rounded-2xl mb-4 border">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1 mb-2">

              <View style={{ marginRight: 10 }}>
                <Ionicons name="mail-outline" size={24} color="#BC5727"/>
              </View>

                <Text style={{ color: '#BC5727' }} className="font-black uppercase flex-1">adresses email de versailles</Text>
              </View>
              
                <Ionicons name="chevron-forward" size={20} color="#BC5727" />
              </View>
            <Text style={{ color: '#BC5727' }} className="text-sm italic">Visualisez la liste les adresses mail des lycée de l'académie de Versailles.</Text> 
          </Pressable>
        </Link>

        <Link href="/paris" asChild>
          <Pressable style={{ borderColor: '#5B3B1E' }} className="p-5 rounded-2xl mb-4 border">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1 mb-2">

              <View style={{ marginRight: 10 }}>
                <Ionicons name="list-outline" size={24} color="#5B3B1E"/>
              </View>

                <Text style={{ color: '#5B3B1E' }} className="font-black uppercase flex-1">lycées par académies</Text>
              </View>
              
                <Ionicons name="chevron-forward" size={20} color="#5B3B1E" />
              </View>
            <Text style={{ color: '#5B3B1E' }} className="text-sm italic">Visualisez les statistiques des lycées d'académies de région parisienne (Paris, Créteil et Versailles).</Text> 
          </Pressable>
        </Link>

        <View className='items-center mt-4'>
          <Text className="text-[#5B3B1E] text-xs font-bold uppercase">
            Design par Saffana Salaoudine
          </Text>
        </View>   

      </ScrollView>
    </SafeAreaView>
  );
}