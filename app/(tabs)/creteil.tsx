import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { List } from 'components/Liste';
import Description from 'components/Description';
import lyceesData from 'assets/data.json';

export default function AcademieCreteil() {
  const lycees = lyceesData.filter(lycee => lycee.code_academie === "024");

  return (
    <SafeAreaView className="flex-1 bg-[#EAE1CB]">

      <Description 
        titre="lycées de l'académie de créteil" 
        texte="Liste des lycées de l'académie de Créteil." 
      />
      <List data={lycees} nom="nom_etablissement" sousTitre="adresse_postale" type="libelle"/>
      
    </SafeAreaView>
  );
}