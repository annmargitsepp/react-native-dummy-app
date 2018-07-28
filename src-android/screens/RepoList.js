import React from 'react';
import { Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { listRepos } from '../../redux/actions/action';
import Ionicons from 'react-native-vector-icons/Ionicons';

class RepoList extends React.Component {
    constructor(props){
        super(props);
        this.renderItem.bind(this);
        this.gotToScreen.bind(this);
    }

    componentDidMount() {
        this.props.listRepos('roy2393');
      }

    _goToFriendsProfile(userId){
        this.props.screenProps.navigation.navigate('HistoryScreen', {'userId': userId});
    };

    gotToScreen(screen, param){
        if(this.props.screenProps.navigation.isFocused()){
            switch(screen){
                case 'HistoryScreen':
                this.props.screenProps.navigation.navigate('HistoryScreen', {'userId': param.userId});
                break;
                case 'NewScreen':
                this.props.screenProps.navigation.navigate('NewScreen', {'screen': 'Friend'});
                break;
            }
        }
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
          key={item.id.toString()}
          style={styles.item}
          onPress={() =>
            this.gotToScreen('HistoryScreen', {userId: item.name})
          }
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      );

    render() {
          
        const { repos } = this.props;
        console.log("Repos - ", repos);
        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView >
                <FlatList
                    data={repos}
                    renderItem={this.renderItem}
                        // ({item}) => <Text style={styles.item} onPress={() => this._goToFriendsProfile(item.key)}>{item.key}</Text>}
                    />
                </ScrollView>

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
                            this.gotToScreen('NewScreen');
                        }}
                >
                    <Ionicons name="md-add"  size={24} color="#fff" />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
    return {
      repos: storedRepositories
    };
  };
  
  const mapDispatchToProps = {
    listRepos
  };

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
