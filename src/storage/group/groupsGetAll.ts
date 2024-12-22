import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll(){
    try 
    {
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

        const groups : string[] = storage ? JSON.parse(storage) : [];//se tiver algo em storage, devolve o json, senão devolve array vazio

        return groups;
    }
    catch(error){
        throw error;
    }
}