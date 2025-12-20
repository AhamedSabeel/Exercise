pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/AhamedSabeel/Exercise.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd node-student-app
                npm install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                cd node-student-app
                npm test
                '''
            }
        }

        stage('Deploy to Application EC2') {
            steps {
                sh """
                ssh ubuntu@13.233.255.60 '
                  cd /home/ubuntu/Exercise/node-student-app &&
                  git pull origin main &&
                  npm install &&
                  pm2 restart students-app
                '
                """
            }
        }
    }

    post {
        success {
            echo "✅ Build & Deployment Successful"
        }
        failure {
            echo "❌ Build Failed — Deployment Skipped"
        }
    }
}

