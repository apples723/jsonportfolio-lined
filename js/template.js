var cd = new Date();
var curyear = cd.getFullYear();
 var data = {};
        $.getJSON(
            "resume-web.json",
            function (d) {
                data = d;
				if (data.work) {
					if (data.work[0].company) {
						data.workBool = true;
						_.each(data.work, function(w){
							if (w.startDate) {
								w.startDateYear = (w.startDate || "").substr(0,4);
								switch (w.startDate.substr(5,2)) {
									case '01':
										w.startDateMonth = "January ";
										break;
									case '02':
										w.startDateMonth = "February ";
										break;
									case '03':
										w.startDateMonth = "March ";
										break;
									case '04':
										w.startDateMonth = "April ";
										break;
									case '05':
										w.startDateMonth = "May ";
										break;
									case '06':
										w.startDateMonth = "June ";
										break;
									case '07':
										w.startDateMonth = "July ";
										break;
									case '08':
										w.startDateMonth = "August ";
										break;
									case '09':
										w.startDateMonth = "September ";
										break;
									case '10': 
										w.startDateMonth = "October ";
										break;
									case '11':
										w.startDateMonth = "November ";
										break;
									case '12':
										w.startDateMonth = "December ";
										break;
									}
							}
							if(w.endDate) {
								w.endDateYear = (w.endDate || "").substr(0,4);
								switch ((w.endDate || "").substr(5,2)) {
									case '01':
										w.endDateMonth = "January ";
										break;
									case '02':
										w.endDateMonth = "February ";
										break;
									case '03':
										w.endDateMonth = "March ";
										break;
									case '04':
										w.endDateMonth = "April ";
										break;
									case '05':
										w.endDateMonth = "May ";
										break;
									case '06':
										w.endDateMonth = "June ";
										break;
									case '07':
										w.endDateMonth = "July ";
										break;
									case '08':
										w.endDateMonth = "August ";
										break;
									case '09':
										w.endDateMonth = "September ";
										break;
									case '10': 
										w.endDateMonth = "October ";
										break;
									case '11':
										w.endDateMonth = "November ";
										break;
									case '12':
										w.endDateMonth = "December ";
										break;
									}
							} else { 
								w.endDateYear = 'Present'
							}
							if (w.highlights) {
								if (w.highlights[0]) {
									if (w.highlights[0] != "") {
										w.workHighlights = true;
									}
								}
							}
						});
					}
				}
				if (data.volunteer) {
					if (data.volunteer[0].position) {
						data.volunteerBool = true;
						_.each(data.volunteer, function(a){
							a.startDateYear = (a.startDate || "").substr(0,4);
							switch ((a.startDate || "").substr(5,2)) {
								case '01':
									a.startDateMonth = "January ";
									break;
								case '02':
									a.startDateMonth = "February ";
									break;
								case '03':
									a.startDateMonth = "March ";
									break;
								case '04':
									a.startDateMonth = "April ";
									break;
								case '05':
									a.startDateMonth = "May ";
									break;
								case '06':
									a.startDateMonth = "June ";
									break;
								case '07':
									a.startDateMonth = "July ";
									break;
								case '08':
									a.startDateMonth = "August ";
									break;
								case '09':
									a.startDateMonth = "September ";
									break;
								case '10': 
									a.startDateMonth = "October ";
									break;
								case '11':
									a.startDateMonth = "November ";
									break;
								case '12':
									a.startDateMonth = "December ";
									break;
							}
							a.endDateYear = (a.endDate || "").substr(0,4);
							switch ((a.endDate || "").substr(5,2)) {
								case '01':
									a.endDateMonth = "January ";
									break;
								case '02':
									a.endDateMonth = "February ";
									break;
								case '03':
									a.endDateMonth = "March ";
									break;
								case '04':
									a.endDateMonth = "April ";
									break;
								case '05':
									a.endDateMonth = "May ";
									break;
								case '06':
									a.endDateMonth = "June ";
									break;
								case '07':
									a.endDateMonth = "July ";
									break;
								case '08':
									a.endDateMonth = "August ";
									break;
								case '09':
									a.endDateMonth = "September ";
									break;
								case '10': 
									a.endDateMonth = "October ";
									break;
								case '11':
									a.endDateMonth = "November ";
									break;
								case '12':
									a.endDateMonth = "December ";
									break;
							}
							if (a.highlights) {
								if (a.highlights[0]) {
									if (a.highlights[0] != "") {
										a.volunterHighlights = true;
									}
								}
							}
						});
					}
				}
				if (data.education) {
					if (data.education[0].institution) {
						data.educationBool = true;
						_.each(data.education, function(e){
							if( !e.area || !e.studyType ){
							  e.educationDetail = (e.area == null ? '' : e.area) + (e.studyType == null ? '' : e.studyType);
							} else {
							  e.educationDetail = e.area + ", "+ e.studyType;
							}
							if (e.gpa) {
								e.gpaBool = true;
							}
							if (e.startDate) {
								e.startDateYear = e.startDate.substr(0,4);
								switch (e.startDate.substr(5,2)) {
									case '01':
										e.startDateMonth = "January ";
										break;
									case '02':
										e.startDateMonth = "February ";
										break;
									case '03':
										e.startDateMonth = "March ";
										break;
									case '04':
										e.startDateMonth = "April ";
										break;
									case '05':
										e.startDateMonth = "May ";
										break;
									case '06':
										e.startDateMonth = "June ";
										break;
									case '07':
										e.startDateMonth = "July ";
										break;
									case '08':
										e.startDateMonth = "August ";
										break;
									case '09':
										e.startDateMonth = "September ";
										break;
									case '10': 
										e.startDateMonth = "October ";
										break;
									case '11':
										e.startDateMonth = "November ";
										break;
									case '12':
										e.startDateMonth = "December ";
										break;
								}
							} else {
								e.endDateMonth = "";
							}
							if (e.endDate) {
								e.endDateYear = e.endDate.substr(0,4);
								switch (e.endDate.substr(5,2)) {
									case '01':
										e.endDateMonth = "January ";
										break;
									case '02':
										e.endDateMonth = "February ";
										break;
									case '03':
										e.endDateMonth = "March ";
										break;
									case '04':
										e.endDateMonth = "April ";
										break;
									case '05':
										e.endDateMonth = "May ";
										break;
									case '06':
										e.endDateMonth = "June ";
										break;
									case '07':
										e.endDateMonth = "July ";
										break;
									case '08':
										e.endDateMonth = "August ";
										break;
									case '09':
										e.endDateMonth = "September ";
										break;
									case '10': 
										e.endDateMonth = "October ";
										break;
									case '11':
										e.endDateMonth = "November ";
										break;
									case '12':
										e.endDateMonth = "December ";
										break;
								}
								if (e.endDateYear > curyear) {
									e.endDateYear += " (expected)";
								}
							} else { 
								e.endDateYear = 'Present'
								e.endDateMonth = '';
							}
							if (e.courses) {
								if (e.courses[0]) {
									if (e.courses[0] != "") {
										e.educationCourses = true;
									}
								}
							}
						});
					}
				}
				if (data.skills) {
					if (data.skills[0].name) {
						data.skillsBool = true;
					}
				}

				var template = $("#portfolioTmpl").html();
                var html = Mustache.to_html(template, data);
                $('#portfolioArea').html(html);
            }
        );