import mailchimp from "@mailchimp/mailchimp_marketing";
import {addUserToAudience, userInList} from './subscribe-template';

const md5 = require("md5");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});


/**
 * @param req 
 * @param res
 */
export default async (req, res) => {
 
    const userData = {
      email : req.body.email.toLowerCase(),
    };
  
  
    var inlist = await userInList(userData.email);
  
      try{
  
        if(inlist === false){
          var response = await addUserToAudience(userData);
          console.log("User has been added to list", response.id );
          res.status(200).json({ userAdded: true });
        } else{
          res.status(400).json({ errorMessage: "It appears you have been added to the list already."});
        }

       
  
      } catch (e){
        res.json({ errorMessage: e.message});
      } 
    
  }