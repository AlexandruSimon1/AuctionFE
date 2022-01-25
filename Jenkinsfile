pipeline {
    agent docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    triggers {
        githubPush()
    }
    stages {
        stage('Build Docker UI image') {
            steps {
                echo 'Building service image and pushing it to DockerHub'
                    withCredentials([usernamePassword(credentialsId: 'Docker', usernameVariable: 'dockerLogin',
                        passwordVariable: 'dockerPassword')
                ]) {
                            sh script: "docker login -u ${dockerLogin} -p ${dockerPassword}"
                            sh script: "docker image build -t ${dockerLogin}/auction-ui ."
                            sh script: "docker push ${dockerLogin}/auction-ui"
                }
                echo 'Building UI image and pushing it to DockerHub is successful done'
            }
        }
                stage('Deploy On AWS EC2 Instance') {
                    steps {
                        withCredentials([usernamePassword(credentialsId: 'Docker', usernameVariable: 'dockerLogin',
                                            passwordVariable: 'dockerPassword'),
                                        sshUserPrivateKey(credentialsId: 'AWS-Keypair', keyFileVariable: 'identity', passphraseVariable: '',
                                        usernameVariable: 'userName')
                ]) {
                    script {
                        def remote = [:]
                            remote.user = userName
                            remote.host = host
                            remote.name = userName
                            remote.identityFile = identity
                            remote.allowAnyHosts = 'true'
                            sshCommand remote: remote, command: 'docker container kill --signal=SIGHUP auction-ui'
                            sshCommand remote: remote, command: 'docker rm -v auction-ui'
                            sshCommand remote: remote, command: "docker rmi ${dockerLogin}/auction-ui:latest"
                            sshCommand remote: remote, command: "docker login | docker pull ${dockerLogin}/auction-ui"
                            sshCommand remote: remote, command: "docker container run -d -p 4100:4200 --name auction-ui ${dockerLogin}/auction-ui"
                            sshCommand remote: remote, command: 'exit'
                    }
                        timeout(time: 90, unit: 'SECONDS') {
                        waitUntil(initialRecurrencePeriod: 2000) {
                            script {
                                def result =
                                sh script: 'curl -k --silent --output /dev/null http://localhost:4100',
                                returnStatus: true
                                return (result == 0)
                            }
                        }
                        }
                        echo 'Angular UI is up'
                }
                    }
                }
        stage('Clean Docker Images') {
            steps {
                echo 'Starting Deleting Created Docker Images'
                sh script: 'docker rmi $(docker images -q)'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
