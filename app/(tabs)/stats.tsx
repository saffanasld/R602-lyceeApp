import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Diagramme } from 'components/Diagramme';
import Description from 'components/Description';
import lyceesData from 'assets/data.json';

export default function StatsLycee() {
  const LP = lyceesData.filter(lycee => lycee.sigle_uai === "LP PR").length;
  const LPO = lyceesData.filter(lycee => lycee.sigle_uai === "LPO").length;
  const LGT = lyceesData.filter(lycee => lycee.sigle_uai === "LGT").length;

  const statsNom = [
    { label: 'Lycée Professionnel', value: LP, color: '#F1C166' },     
    { label: 'Lycée Polyvalent', value: LPO, color: '#D18E97' },  
    { label: 'Lycée Général Technologique', value: LGT, color: '#BC5727' }, 
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#EAE1CB]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>

      <Description 
        titre="répartition des lycées" 
        texte="Statistiques du nombre de chaque type de lycées : LP PR, LPO, LGT." 
      />
        
      <Diagramme 
        stats={statsNom}
      />
            
      </ScrollView>
    </SafeAreaView>
  );
}