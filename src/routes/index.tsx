import { NavigationContainer} from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

import { AppRoutes } from "./app.routes";

export function Routes(){
    const {COLORS} = useTheme(); // garantir que o fundo é da cor padrão ao trocar de tela em android
    return( 
        <View style={{flex:1, backgroundColor: COLORS.GRAY_600}}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    );
}