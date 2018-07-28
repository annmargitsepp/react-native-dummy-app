import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20
    },
    inputGroup: {
        flexDirection: 'row',
        margin: 10
    },
    formControl: {
        flex: 1,
        borderWidth: 1,
        height: 40,
        padding: 5
    },
    statusBar: {
        backgroundColor: "#433371",
        height: Constants.statusBarHeight,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
    item: {
        padding: 10,
        height: 80
      },
    safeArea: { flex: 1, backgroundColor: '#fff' }

});

// export default styles;