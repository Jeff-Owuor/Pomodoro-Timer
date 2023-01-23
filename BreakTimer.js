import   React  from 'react'
import  {Button,View,Text,Vibration,StyleSheet}  from 'react-native'
import Timer from './Timer';

export default  class  BreakTimer  extends  React.Component {
    state = {
        minutes:2,
        seconds:0,
        time:120,
        oneSecondInMs:1000
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
            {Vibration.vibrate(10*this.oneSecondInMs)}
            {clearInterval(interval)}
            return (
                <Timer/>
            )
        }
        else{
            return(
                <View style={styles.appContainer}>
                <Text style={styles.textElement}>Break Time!!</Text>
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



 