export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){  // bu log, Base'deki log fonksiyonunu ezdi. Override
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}