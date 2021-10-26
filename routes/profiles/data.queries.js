'use strict';

const tableName ='profiles',
// database = require('../../middleware/database')
  mysql = require('../../middleware/mysql')


module.exports = {
   selectProfiles,
    insertProfile
};

async function  selectProfiles(options){
   let items = await mysql.db.query('select * from profiles')
    if(query.ageIsGreater){
        items = items.filter(profile => profile.age >= query.ageIsGreater)
    }
    if(query.ageIsLower){
        items = items.filter(profile => profile.age < query.ageIsLower)
    }
    return items;

}
function insertProfile(profile){
  return database.insert(tableName, profile);

}