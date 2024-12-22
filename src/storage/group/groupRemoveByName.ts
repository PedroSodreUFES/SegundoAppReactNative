import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted : string){
    try {
        const storedGroups = await groupsGetAll();

        const groups = storedGroups.filter(group => group !== groupDeleted);// pega todas as turmas menos a q será deletada

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));// salva as turmas sem a turma deletada

        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`); // Remove as chaves de jogadores associadas à turma deletada

    } catch (error) {
        throw error;
    }
}