node ('sdet-node-staging') {
    stage('Running Example Tests') {
        sh "export BUILD_NO = ${env.BUILD_NUMBER}"
        sh "export JOB_URI = ${env.JOB_URL}"
        sh "node capture-buildno.js"
    }
}