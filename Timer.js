import  React  from 'react'
import  {View,Button,Text,StyleSheet,Vibration}  from  'react-native'
import BreakTimer  from './BreakTimer';

var interval;

export default  class Timer extends  React.Component{
    state = {
        minutes:1,
        seconds:0,
        time:60,
        
    }
    oneSecondInMs=1000
    pattern =[
        1 * this.oneSecondInMs,
        2 * this.oneSecondInMs,
        3 * this.oneSecondInMs,
      ];
 
    handleStart=()=>{
         interval = setInterval(()=>{
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
        
        handleStop = ()=>{
                clearInterval(interval)
        }
    render(){
        if(this.state.time == 0){
            {clearInterval(interval)}
            {Vibration.vibrate(this.pattern)}
           return ( 
                 <BreakTimer/>
           )
            
        }
        else{
            return(
                <View style={styles.appContainer}>
                <Text style={styles.textElement}>Focus Time</Text>
                {this.state.time == 0 && <BreakTimer/>}
                  <Text style={styles.textElement}>{this.state.minutes<10?"0"+this.state.minutes:this.state.minutes}  :  {this.state.seconds<10?"0"+this.state.seconds:this.state.seconds}</Text>
                 <Button  title="Start" onPress={this.handleStart} style={styles.button} />
                 <Button  title="Stop"  onPress={this.handleStop} style={styles.button}/>
                </View>
          )
        }
        
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
   },
   button:{
    border: "2 solid black",
    borderRadius:"2"
   },
   buttonContainer:{
    flex:1,
    flexDirection:"row",
   }
})