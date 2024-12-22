import { Container} from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Alert } from 'react-native';
import { Loading } from '@components/Loading';

export function Groups() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    function handleNewGroup(){
      navigation.navigate("new")
    }

    async function fetchGroups()
    {
      try{
        setIsLoading(true);

        const data = await groupsGetAll();

        setGroups(data);
        setIsLoading(false);

      }catch(error){
        console.log(error);
        Alert.alert("Turmas", "Não foi possível carregar as turmas.")
      } finally{
          setIsLoading(false);
      }
    }

    function handleOpenGroup(group: string){
      navigation.navigate('players', {group : group});
    }

    useFocusEffect(useCallback(() => {
      fetchGroups(); //useffect que funciona ate quando muda de tela e muda de estado
    }, []));

    return (
    <Container>
      <Header />

      <Highlight 
        title= "Turmas"
        subtitle='Jogue com a sua turma'
       />

      { 
        isLoading ? <Loading/> :

       <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
            <GroupCard 
                title={item}
                onPress={() => handleOpenGroup(item)}
            />
            )}
            contentContainerStyle={groups.length == 0 && { flex : 1}}
            ListEmptyComponent={() => (
            < ListEmpty 
                message="Que tal cadastrar a primeira turma?"
                />
            )}
       />
      }

       <Button
            title="Criar nova turma"
            onPress={handleNewGroup}
       />
    </Container>
  );
}