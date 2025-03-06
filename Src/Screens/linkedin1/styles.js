import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cfd8dc',
    elevation: 2,
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  searchBar: {
    flex: 1,
    height: 42,
    backgroundColor: '#e3f2fd',
    borderRadius: 21,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#bbdefb',
  },
  searchIcon: {
    width: 26,
    height: 26,
    marginHorizontal: 12,
  },
  messageIcon: {
    width: 26,
    height: 26,
  },
  post: {
    backgroundColor: '#ffffff',
    marginVertical: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  postHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#263238',
    marginBottom: 6,
  },
  postContent: {
    fontSize: 15,
    color: '#455a64',
    marginBottom: 12,
    lineHeight: 22,
  },
  postImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
  },
  postDescription: {
    fontSize: 14,
    color: '#607d8b',
    lineHeight: 20,
    marginBottom: 12, // Butonlar için alan bıraktık
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 10, // Kenarlara boşluk ekledik
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  actionLabel: {
    fontSize: 13,
    color: '#546e7a',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#cfd8dc',
  },
  bottomItem: {
    alignItems: 'center',
  },
  bottomIcon: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  bottomLabel: {
    fontSize: 13,
    color: '#37474f',
  },
});

export default styles;
