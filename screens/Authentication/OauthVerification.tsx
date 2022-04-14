import React, {useContext} from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from '../../components/Themed';
import { AuthContext } from '../../constants/Context';


export default function OauthVerification({navigation, route}: any) {
  const { authContext } = useContext<any>(AuthContext);

  console.log('OAuthVerification');
  authContext.signIn(route.params.token)
  return (
      <SafeAreaProvider>
        <View>
          
      </View>

      </SafeAreaProvider>
  )
}
