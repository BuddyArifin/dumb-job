var build_number = process.env.BUILD_NO;
var build_url = process.env.BUILD_URL;

console.log('print build number', build_number);
console.log('print build job ', build_url);

console.log('Direct Access to Jenkins Variable', process.env.BUILD_NUMBER );
console.log('Direct Access to Jenkins Variable 2', process.env.JOB_URL);