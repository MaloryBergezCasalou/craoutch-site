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
                echo "${env.BUILD_ID}" >> version.txt
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        
        stage('Running') {
            steps {
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}, site hosted on https://craoutch-center.herokuapp.com/"
            }
        }
    }
}
