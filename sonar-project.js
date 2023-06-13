const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: http://18.183.168.23:9000/,
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'sqa_dcbf9aede98f0e5bcf3774db37f91d155caecea5',
	    //'sonar.login': 'priyanka',
	    //'sonar.password': 'password',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
