var Parser = require('nginxparser');
var node25 = 0;
var parser = new Parser('$remote_addr - $remote_user [$time_local] '
        + '"$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"');
var topicHot = {};
var nodeHot = {};
parser.read('./20140803/20.log', {tail:true}, function (row) {
//    console.log(row);
    //
  if(row.request.match(/fid=(\d+)/)){
  var fid = row.request.match(/fid=(\d+)/)[1]
        console.log(fid);
       if(!nodeHot[fid]){
       nodeHot[fid]=0;
       }
       nodeHot[fid]++;
 };

  var tid = row.request.match(/tid=(\d+)/);
  if(tid&&tid[1]){
    if(!topicHot[tid[1]]){
    topicHot[tid[1]]=0;
    }
    topicHot[tid[1]]++;

  }
  console.log(topicHot);
}, function (err) {
    if (err) throw err;
    console.log('Done!')
});