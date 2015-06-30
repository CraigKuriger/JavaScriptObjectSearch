var message = '';
var student;
var search;

function print(message){
	console.log(message)
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message
}

function getStudentReport(student){
	var report = '<p>Student: ' + student.name + '</p>';
	report += '<p>Age: ' + student.age + '</p>';
	report += '<p>Location: ' + student.location + '</p>';
	report += '<p>Points: ' + student.points + '</p><br>';
	return report;
}

while (true) {
	search = prompt('Search for a student or type "quit" to end');
	if (search === null || search.toLowerCase() === 'quit') {
		break;
	}
	for (var i = 0; i < students.length; i += 1){
		student = students[i];
		if (student.name === search) {
			message = getStudentReport(student)
			print(message)
		}
		
	}

}


print(message)