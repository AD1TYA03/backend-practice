const path =require("path");
const fs = require("fs");



const products =[];
module.exports =class Product{
    constructor(t) {
        this.title = t;
    }

    save(){
        const p=path.join(path.dirname(require.main.filename),'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            let products=[];
            if(err == null){
             products =JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{});
        });
    }

    static fetchAll(cb){
        const p=path.join(path.dirname(require.main.filename),'data','products.json')
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
           cb(JSON.parse(fileContent));
        })
        return products;
    }
}