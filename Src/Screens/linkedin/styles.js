import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077b5', // LinkedIn mavi arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  linklg: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotPassword: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 30,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#005582',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    color: '#ffffff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default styles;
