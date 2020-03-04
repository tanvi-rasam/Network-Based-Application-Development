/* @nanajjar */
class Connection {
  constructor(cid,name,topic,details,date,time,venue) {
    this.cid = cid;
    this.name = name;
    this.topic = topic;
    this.details = details;
	this.date=date;
	this.time=time;
	this.venue=venue;
  }


  getCourseDetails() {
    return {
      cid: this.cid,
      name: this.name,
      topic: this.topic,
      details: this.details,
	  date:this.date,
	  time:this.time,
	  venue:this.venue
	  
	  
  }};
  getCid() {
    return this.cid;
  }

  setCid(cid) {
    this.cid = cid;
  }

  getTopic() {
    return this.topic;
  }

  setTopic(topic) {
    this.topic = topic;
  }
  getDetails() {
    return this.details;
  }

  setDetails(details) {
    this.details = details;
  }
  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
  
  getTime() {
    return this.time;
  }

  setTime(time) {
    this.time = time;
  }
  getVenue() {
    return this.venue;
  }

  setVenue(venue) {
    this.venue = venue;
  }


  
  }

module.exports = Connection;
