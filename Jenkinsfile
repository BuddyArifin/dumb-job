node ('sdet-node-staging') {
    timestamps {
        wrap([$class: "AnsiColorBuildWrapper", "colorMapName": "XTerm", "defaultFg": 1, "defaultBg": 2]) {

            stage ('Running Example Tests') {
                sh '''
                    export BUILD_NO = ${env.BUILD_NUMBER}
                    export JOB_URI = ${env.JOB_URL}

                    node capture-buildno.js
                '''
            }
        }
    }
}