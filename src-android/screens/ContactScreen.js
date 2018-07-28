import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, SectionList } from 'react-native';
import styles from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class ContactScreen extends React.Component {

    constructor(props){
        super(props);
        this.goToScreen.bind(this);
    }
    goToScreen(screen){
        console.log('Grouo balance -- ', this.props, this.props.navigation.isFocused(), this.props.screenProps.navigation.isFocused());
        if(this.props.screenProps.navigation.isFocused()){
            switch(screen){
                case 'NewScreen':
                this.props.screenProps.navigation.navigate('NewScreen', {'screen': 'Friend'});
                break;
            }
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                
                        <SectionList
                            sections={[
                                {title: 'D', data: ['Devin']},
                                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                            ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                        />
                    
               <TouchableOpacity
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:56,
                        position: 'absolute',                                          
                        bottom: 16,                                                    
                        right: 16,
                        height:56,
                        backgroundColor:'#f15181',
                        borderRadius:100,
                        }}
                        onPress={()=>{
                            this.goToScreen('NewScreen')
                        }}
                >
                    <Ionicons name="md-add"  size={24} color="#fff" />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}