node ('sdet-node-staging') {
    stage('Running Example Tests') {
        sh "BUILD_NO = ${env.BUILD_NUMBER}"
        sh "JOB_URI = ${env.JOB_URL}"
        sh "node capture-buildno.js"
    }
}