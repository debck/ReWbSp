var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var url ="https://www.reddit.com/top/";

request(url, function(err,response,html){
     if(!err){
         var $ = cheerio.load(html);
       
        var alldata= $("#siteTable").children();
        
        var data =[];
        alldata.each(function(index){
        
        var result=$("#siteTable").children().eq(index).children().eq(4).find("a.title").text();
        if(result !== "")
            data.push(result);
        
        });
        
        fs.writeFile("result.txt",JSON.stringify(data, null , 4));
        //console.log(data);
     }
});
