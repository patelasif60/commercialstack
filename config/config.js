require('dotenv').config();

//  const username = process.env.DB_USERNAME;
//  const password = process.env.DB_PASSWORD;
//  const database = process.env.DB_NAME;
//  const host = process.env.DB_HOST;
    const nodeEnv = process.env.NODE_ENV;
//  const timezone = process.env.DB_TIMEZONE || "+01:00";
//  const systemTimezone = process.env.SYSTEM_TIMEZONE || "Europe/Oslo";
//  const dialect = process.env.DB_DIALECT
//  consprocess.env.t charset = process.env.DB_CHARSET || "utf8mb4";
//  const collate = process.env.DB_COLLATE || "utf8mb4_unicode_ci";
//  const port = process.env.DB_PORT;
    const mongoUri= process.env.MONGO_URI
const config = {
    development: {
         mongoUri
    //   username,
    //   password,
    //   database,
    //   host,
    //   port,
    //   timezone,
    //   systemTimezone,
    //   dialect,
    //   charset,
    //   collate,
    //   dialectModule: require('mysql2')
    },
    test: {
         mongoUri    
    //   username,
    //   password,
    //   database,
    //   host,
    //   port,
    //   timezone,
    //   systemTimezone,
    //   dialect,
    //   charset,
    //   collate
    },
    production: {
         mongoUri
    //   username,
    //   password,
    //   database,
    //   host,
    //   port,
    //   timezone,
    //   systemTimezone,
    //   dialect,
    //   charset,
    //   collate
    }
  }
  
  module.exports = config[nodeEnv]
  