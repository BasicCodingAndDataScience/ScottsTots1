var myConfig = {
 	type: "pie",
 	plot: {
 	  borderColor: "#2B313B",
 	  borderWidth: 5,
 	  // slice: 90,
 	  valueBox: {
 	    placement: 'out',
 	    text: '%t\n%npv%',
 	    fontFamily: "Open Sans"
 	  },
 	  tooltip:{
 	    fontSize: '18',
 	    fontFamily: "Open Sans",
 	    padding: "5 10",
 	    text: "%npv%"
 	  },
 	  animation:{
      effect: 2,
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
 	},
 	source: {
 	  text: 'gs.statcounter.com',
 	  fontColor: "#8e99a9",
 	  fontFamily: "Open Sans"
 	},
 	title: {
 	  fontColor: "#8e99a9",
 	  text: 'Maddies Awesome Chart',
 	  align: "left",
 	  offsetX: 10,
 	  fontFamily: "Open Sans",
 	  fontSize: 25
 	},
 	subtitle: {
 	  offsetX: 10,
 	  offsetY: 10,
 	  fontColor: "#8e99a9",
 	  fontFamily: "Open Sans",
 	  fontSize: "16",
 	  text: 'May 2016',
 	  align: "left"
 	},
 	plotarea: {
 	  margin: "20 0 0 0"
 	},
	series : [
		{
			values : [11.38],
			text: "Internet Explorer",
		  backgroundColor: 'aqua',
		},
		{
		  values: [56.94],
		  text: "Chrome",
		  backgroundColor: '#FF7965',
		  detached:true
		},
		{
		  values: [14.52],
		  text: 'Firefox',
		  backgroundColor: 'coral',
		  detached:true
		},
		{
		  text: 'Safari',
		  values: [9.69],
		  backgroundColor: 'pink'
		},
		{
		  text: 'Other',
		  values: [7.48],
		  backgroundColor: 'blue'
		}
	]
};

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: '100%',
	width: '100%'
});
