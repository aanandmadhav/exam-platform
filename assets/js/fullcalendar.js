!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=26)}({26:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";!function(e){var t=new Date,n=("0"+(t.getMonth()+1)).slice(-2),r=[{title:"Presentation",description:"Just presenting some UI examples.",type:"presentation",allday:"false",bg:"#FF5722",start:t.getFullYear()+"-"+n+"-04T16:00:00",end:t.getFullYear()+"-"+n+"-06T18:00:00"},{title:"Meeting with Sam",description:"Quick meetup with Sam to review the current progress of the project.",type:"meeting",allday:"false",bg:"#E53935",start:t.getFullYear()+"-"+n+"-16T16:00:00",end:t.getFullYear()+"-"+n+"-16T18:00:00"},{title:"Conference",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dolores illo inventore iste perspiciatis qui quidem rem repudiandae sed.",type:"event",bg:"#4CAF50",allday:"true",start:t.getFullYear()+"-"+n+"-11",end:t.getFullYear()+"-"+n+"-13"},{title:"Board Meeting",description:"Get toghether with everyone in the company to assess.",type:"meeting",bg:"#E53935",allday:"false",start:t.getFullYear()+"-"+n+"-12T10:30:00",end:t.getFullYear()+"-"+n+"-12T12:30:00"},{title:"Next months Meeting",description:"Testing an event next month.",type:"meeting",bg:"#039BE5",allday:"false",start:t.getFullYear()+"-"+n+"-28T10:30:00",end:t.getFullYear()+"-"+n+"-31T12:30:00"}];new Object;if(e("#calendar").length>0){var a=function(t){t.startDate=moment(t.start).format("dddd, MMMM Do YYYY"),t.startTime=moment(t.start).format("hh:mm"),t.endDate=moment(t.end).format("dddd, MMMM Do YYYY"),t.endTime=moment(t.end).format("hh:mm");var n=e("#sidebar-calendar");n&&(n.get(0).mdkDrawer.open(),e("#sidebar-calendar .content").html(l(t)))},l=function(e){return'<div class="p-1"><h5 class="m-0"><i class="material-icons text-muted">event</i> <span class="icon-text">'+e.title+'</span></h5></div><div class="pl-1 pr-1"<p>'+e.description+'</p><ul class="list-group"><li class="list-group-item"> <small class="text-muted"><strong>Starts:</strong></small><br/>'+e.startDate+'</li><li class="list-group-item"><small class="text-muted"><strong>Ends:</strong></small><br/>'+e.endDate+"</li></ul>"};e("#calendar").fullCalendar({header:{left:"prev",center:"title",right:"next"},editable:!0,eventLimit:!0,events:r,eventClick:function(e){!function(e){a(e)}(e)},eventRender:function(e,t){e,t.css("background-color",e.bg)},loading:function(t){t&&e("#loading").toggle(t)},viewRender:function(){i()}}),i(),e("#addEvent").click(function(){var t={title:"Custom Event Added",description:"Added a custom event",type:"meeting",bg:"#f4511e",start:new Date,end:new Date};e("#calendar").fullCalendar("renderEvent",t),i()})}function i(){e("#calendar").fullCalendar("clientEvents");e("#this-month-event-list").html("da")}}(jQuery)}});