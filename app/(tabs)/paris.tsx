import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Diagramme } from 'components/Diagramme';
import Description from 'components/Description';
import lyceesData from 'assets/data.json';

export default function StatsAcademies() {
  const paris = lyceesData.filter(lycee => lycee.code_academie === "001").length;
  const creteil = lyceesData.filter(lycee => lycee.code_academie === "024").length;
  const versailles = lyceesData.filter(lycee => lycee.code_academie === "025").length;

  const statsNom = [
    { label: 'Paris', value: paris, color: '#F1C166' },     
    { label: 'Créteil', value: creteil, color: '#D18E97' },  
    { label: 'Versailles', value: versailles, color: '#BC5727' }, 
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#EAE1CB]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>

      <Description 
        titre="lycées par académies" 
        texte="Comparaison du nombre de lycées des académies de la région parisienne (Paris, Créteil et Versailles)." 
      />
        
      <Diagramme 
        stats={statsNom}
      />
            
      </ScrollView>
    </SafeAreaView>
  );
}