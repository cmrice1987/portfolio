	$('#query').click(function() {
        	site = $('#site').attr("value");
        	$.ajax({
            	url: "http://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055680,07055780&period=P7D&parameterCd=00065&siteStatus=all",
            	dataType: 'json',
            	data: '',
            	success: function(json) {
                	for (i = 0; i < 4; i++) {
                    	$('#sitedesc' + i).text(json.value.timeSeries[i].sourceInfo.siteName);
                    	$('#discharge' + i).val(json.value.timeSeries[i].values[0].value[0].value);
                	}
            	},
            	error: function(XMLHttpRequest, textStatus, errorThrown) {
                	$('#sitedesc').text('Error. Site Number was probably invalid or not a real-time site.');
                	$('#discharge').val('');
                	$('#date').val('');
                	$('#time').val('');
                	$('#tz').val('');
            	}
        	});
    	});


        
      
     
       
        
        
       
       
        
        
        
    