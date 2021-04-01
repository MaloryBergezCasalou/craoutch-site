pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo 'hello there'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        
        stage('Running') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh('curl https://craoutch-center.herokuapp.com/')
            }
        }
    }
}
