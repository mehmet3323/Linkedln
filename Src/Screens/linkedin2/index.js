import React from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Linkedin2 = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/271/271220.png',
          }} // Geri ok ikonu
          style={styles.icon}
        />
        <TextInput
          placeholder="Çağatay Savun"
          style={styles.searchInput}
          placeholderTextColor="#aaa"
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3524/3524636.png',
          }} // Ayarlar simgesi
          style={styles.icon}
        />
      </View>

      {/* Profil Kısmı */}
      <View style={styles.profileSection}>
        <View style={styles.banner}></View>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/v2/D4D03AQF4JAt0wEfPtA/profile-displayphoto-shrink_100_100/B4DZPJrADJHUAU-/0/1734255313758?e=1741219200&v=beta&t=4Es5nhiyrf2aPujEwoEeV-L4BRBsBbnGRJPyASLEYl0',
          }} // Profil fotoğrafı
          style={styles.profilePic}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/685/685655.png',
          }} // Kamera simgesi
          style={styles.cameraIcon}
        />
        <Text style={styles.name}>Çağatay Savun</Text>
        <Text style={styles.description}>
          Fırat Üniversitesi eğitim kurumunda öğrenci
        </Text>
        <Text style={styles.location}>Fırat Üniversitesi, Elazığ, Türkiye</Text>
      </View>

      {/* Butonlar */}
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.activeButton]}>
          <Text style={styles.buttonTextActive}>Açık</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bölüm Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Profili Geliştir</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Sizin için önerilen</Text>
        <View style={styles.footerCard}>
          <Text style={styles.cardTitle}>Hangi sektörde çalışıyorsunuz?</Text>
          <Text style={styles.cardDescription}>
            Sektör bilgisine sahip üyeler 2.5 kata kadar daha fazla profil
            görüntülemesi alır.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Sektör ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Linkedin2;
