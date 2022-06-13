const mongoose = require("mongoose");
const settings = require("../configs/settings.json");

mongoose.connect(settings.mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.connection.on("connected", () => {
    console.log(`✅・[MONGOOSE] Mongo Bağlantısı Başarıyla Kuruldu`);
});

mongoose.connection.on("disconnected", () => {
    console.log(`❌・[MONGOOSE] Mongo Bağlantısı Hata Sonucu Kesildi`);
});

mongoose.connection.on("error", () => {
    console.error(`❌・[MONGOOSE] Mongo Bağlantısı Kurulurken Bir Hata Oluştu`);
});
