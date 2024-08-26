// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  // Step 1. Find users in the dabase using central
  const databaseName = await central(id);
  console.log(databaseName);
  // Step 2. Find user basic info
  const basicInfo = await dbs[databaseName](id);
  console.log(basicInfo);
  //   Step 3. Access the vault and take personal data
  const personalData = await vault(id);
  console.log(personalData);
  return {
    ...basicInfo,
    ...personalData
  }
  
}

const user = await getUserData(7);
console.log(user);

