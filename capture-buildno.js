var build_number = process.env.BUILD_NUMBER;
var build_url = process.env.JOB_URL;

console.log('print build number', build_number);
console.log('print build job ', build_url);

console.log('Direct Access to Jenkins Variable', process.env.BUILD_NUMBER);
console.log('Direct Access to Jenkins Variable 2', process.env.JOB_URL);