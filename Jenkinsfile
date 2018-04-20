node ('sdet-node-staging') {
            stage ('Running Example Tests') {
                sh '''
                    export BUILD_NO = ${env.BUILD_NUMBER}
                    export JOB_URI = ${env.JOB_URL}

                    node capture-buildno.js
                '''
            }
}