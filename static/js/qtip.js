var titleContents = ["Pie Chart","Bar Chart","Row Chart","Data Table Chart","Heatmap Chart","Histogram Chart","Composite Chart","Line Chart","Scatter Plot Chart","Boxplot Chart","Area Chart","Bubble Chart"]

$('.btn').each(function(i){
	$(this).qtip({
		content: titleContents[i]
	})

})