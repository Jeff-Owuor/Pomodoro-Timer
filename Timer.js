import  React  from 'react'
import  {View,Button,Text,StyleSheet}  from  'react-native'

export default  class Timer extends  React.Component{
    state = {
        minutes:25,
        seconds:0,
        time:1500
    }
   
    componentDidMount(){
        
        const interval = setInterval(()=>{
             this.startTimer()
        },1000)
    }
        startTimer = () => {
            this.setState(prevState => ({
                minutes:Math.floor(prevState.time/60),
                seconds: prevState.time%60,
                time:this.state.time-1
            }))
        }
        componentWillUnmount(){
            clearInterval(this.interval)
        }
    render(){
        return(
              <View style={styles.appContainer}>
                <Text style={styles.textElement}>{this.state.minutes<10?"0"+this.state.minutes:this.state.minutes}  :  {this.state.seconds<10?"0"+this.state.seconds:this.state.seconds}</Text>
              </View>
        )
    }
}

const styles = StyleSheet.create({
   appContainer : {
            flex:1,
            justifyContent:"center",
            alignItems:"center"
   },
   textElement:{
    fontSize:48,
   }
})