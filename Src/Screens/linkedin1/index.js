import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';

const LinkedIn1 = () => {
  return (
    <View style={styles.container}>
      {/* Üst Menü */}
      <View style={styles.topBar}>
        <Image 
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQF4JAt0wEfPtA/profile-displayphoto-shrink_100_100/B4DZPJrADJHUAU-/0/1734255313758?e=1741219200&v=beta&t=4Es5nhiyrf2aPujEwoEeV-L4BRBsBbnGRJPyASLEYl0' }} 
          style={styles.profileImage} 
        />
        <TextInput style={styles.searchBar} placeholder="Arama Yap" />
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5636/5636698.png' }} 
          style={styles.searchIcon} 
        />
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1370/1370907.png' }} 
          style={styles.messageIcon} 
        />
      </View>

      {/* Gönderiler */}
      <ScrollView>
        <View style={styles.post}>
          <Text style={styles.postHeader}>Parbulo Otomotiv Yedek Parça</Text>
          <Text style={styles.postContent}>
            Şase Numaranız ile ihtiyacınız olan otomotiv yedek parçanızı bulabilirsiniz.
          </Text>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pDIeAmuVl2990mzgbQ8y9-IQ2pqhnma93Q&s' }} 
            style={styles.postImage} 
          />
          <Text style={styles.postDescription}>
            Bu gönderi, otomotiv sektöründe ihtiyacınız olan tüm yedek parçaları kolayca bulmanıza yardımcı olacaktır.
          </Text>
          <View style={styles.postActions}>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/126/126473.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Beğen</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/12655/12655944.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Yorum Yap</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/545/545661.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Paylaş</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099085.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Kaydet</Text>
            </View>
          </View>
        </View>

        {/* İkinci Gönderi */}
        <View style={styles.post}>
          <Text style={styles.postHeader}>TechTalk Yazılım ve Teknoloji</Text>
          <Text style={styles.postContent}>
            En son yazılım trendlerini ve yenilikleri öğrenmek için bizi takip edin.
          </Text>
          <Image 
            source={{ uri: 'data:image/png;base64,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' }} 
            style={styles.postImage} 
          />
          <Text style={styles.postDescription}>
            Yazılım dünyasındaki gelişmelerden haberdar olmak için doğru adrestesiniz.
          </Text>
          <View style={styles.postActions}>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/126/126473.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Beğen</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/12655/12655944.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Yorum Yap</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/545/545661.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Paylaş</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099085.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Kaydet</Text>
            </View>
          </View>
        </View>

        {/* Üçüncü Gönderi */}
        <View style={styles.post}>
          <Text style={styles.postHeader}>Doğa Fotoğrafçılığı</Text>
          <Text style={styles.postContent}>
            Doğanın güzelliklerini keşfetmek için bizimle bir yolculuğa çıkın.
          </Text>
          <Image 
            source={{ uri: 'data:image/jpeg;base64,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' }} 
            style={styles.postImage} 
          />
          <Text style={styles.postDescription}>
            En güzel manzara fotoğrafları ile ruhunuzu dinlendirin.
          </Text>
          <View style={styles.postActions}>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/126/126473.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Beğen</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/12655/12655944.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Yorum Yap</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/545/545661.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Paylaş</Text>
            </View>
            <View style={styles.actionItem}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099085.png' }} 
                style={styles.actionIcon} 
              />
              <Text style={styles.actionLabel}>Kaydet</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Alt Menü */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/25/25694.png' }} 
            style={styles.bottomIcon} 
          />
          <Text style={styles.bottomLabel}>Ana Sayfa</Text>
        </View>
        <View style={styles.bottomItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2352/2352167.png' }} 
            style={styles.bottomIcon} 
          />
          <Text style={styles.bottomLabel}>Ağım</Text>
        </View>
        <View style={styles.bottomItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3161/3161837.png' }} 
            style={styles.bottomIcon} 
          />
          <Text style={styles.bottomLabel}>Gönderi</Text>
        </View>
        <View style={styles.bottomItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3602/3602145.png' }} 
            style={styles.bottomIcon} 
          />
          <Text style={styles.bottomLabel}>Bildirimler</Text>
        </View>
        <View style={styles.bottomItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10235/10235315.png' }} 
            style={styles.bottomIcon} 
          />
          <Text style={styles.bottomLabel}>İş İlanları</Text>
        </View>
      </View>
    </View>
  );
};

export default LinkedIn1;
