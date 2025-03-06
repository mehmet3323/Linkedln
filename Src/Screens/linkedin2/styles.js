import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f8f8f8',
  },
  icon: {
    width: 25,
    height: 25,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    fontSize: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  banner: {
    width: '100%',
    height: 100,
    backgroundColor: '#e0e0e0',
    marginBottom: -50,
  },
  profilePic: {
   marginLeft:-250,
    width: 150,
    height: 150,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 10,
  },
  cameraIcon: {
    position: 'absolute',
    right: '10%',
    top: '12%',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  name: {
   marginLeft:-250,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    marginLeft:-120,
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  location: {
    marginLeft:-190,
    fontSize: 14,
    color: '#777',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#0073b1',
  },
  activeButton: {
    backgroundColor: '#0073b1',
  },
  buttonText: {
    color: '#0073b1',
    fontWeight: 'bold',
  },
  buttonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerCard: {
    backgroundColor: '#eef6fb',
    padding: 15,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  cardButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#0073b1',
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
