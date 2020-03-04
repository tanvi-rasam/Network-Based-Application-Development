let connection=require("./../models/connection");

const connections=[
	new connection("TMUN1","Career Trek","Networking","Allstate career trek. Get a chance to connect with top professionals!","23rd January","12:00pm-1:00pm","CARC 120"),
	new connection("TMUN2","Microsoft Meetup","Networking","Get to know upcoming Projects in AI/ML field by Microsoft.","23rd January","12:00pm-1:00pm","CARC 121"),
	new connection("TMUN3","Cracking Technical Interview","Networking","Get hired by top companies in your domain by getting your skill set right. Bonus: Tips and tricks to make your Resume and LinkedIn profile standout","23rd January","12:00pm-1:00pm","CARC 112"),
	new connection("TMUW1","Charlotte JS","Web Technology Meetups","Group focused on gaining Hands-On Experience in JS","23rd January","12:00pm-1:00pm","BIOIN 10"),
	new connection("TMUW2","Charlotte Ruby Meetup Group","Web Technology Meetups","Group focused on gaining Hands-On Experience in Ruby","23rd January","12:00pm-1:00pm","BIOIN 12"),
	new connection("TMUW3","Word Press Hands-On Event","Web Technology Meetups","Group focused on gaining Hands-On Experience in Word Press","23rd January","12:00pm-1:00pm","BIOIN 11")
	

];

class ConnectionDB{
	
	getConnections(){
		return connections;
	}
	
	getTopic(){
		var topic=[];
		for (let i=0;i<connections.length;i++) {
			if (topic.indexOf(connections[i].topic)=== -1) {
			   topic.push(connections[i].topic);
			   console.log(connections[i].topic);
			}
		
	}
		return topic;
	}
	getConnection(connection_ID){
		for (let i=0;i<connections.length;i++) {
			if (connections[i].cid == connection_ID)
			{	return connections[i];} 
		
	}
	
	
	
	
}}

module.exports = ConnectionDB;