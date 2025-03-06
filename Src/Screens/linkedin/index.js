import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {Images} from '../../Assets';
const LinkedInLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.linklg} style={styles.linklg} />

      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        placeholderTextColor="#cfcfcf"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor="#cfcfcf"
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('linkedin1');
        }}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.registerButton}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkedInLogin;
