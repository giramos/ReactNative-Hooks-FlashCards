import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import { ROUTES}   from '../constants/navigation.constant';
import SignUp from '../components/SignUp';

const Stack = createStackNavigator();


function Navigation(params) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component= {SignUp} name= {ROUTES.signUp}> </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
    }

    export default Navigation;