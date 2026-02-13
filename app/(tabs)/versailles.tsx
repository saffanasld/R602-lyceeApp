import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { List } from 'components/Liste'; 
import Description from 'components/Description';
import lyceesData from 'assets/data.json';

export default function VersaillesMail() {
  const lycees = lyceesData.filter(lycee => lycee.code_academie === "025");

  return (
    <SafeAreaView className="flex-1 bg-[#EAE1CB]">
        
      <Description 
        titre="adresses email de versailles" 
        texte="Liste les adresses mail des lycée de l'académie de Versailles." 
      />
      <List data={lycees} nom="nom_etablissement" sousTitre="mail" type="libelle"/>
      
    </SafeAreaView>
  );
}