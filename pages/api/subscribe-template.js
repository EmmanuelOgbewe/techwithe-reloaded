// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//subscribe user to template
import mailchimp from "@mailchimp/mailchimp_marketing";
const md5 = require("md5");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const listId = "4b63a7c905";

const updateUserTag =  async (email, templateName) => {

  const tag = `T_${templateName}_QR`;
  const subscriberHash = md5(email);

  console.log(tag);

  const response = await mailchimp.lists.updateListMemberTags(
    listId,
    subscriberHash,
    {
      body: {
        tags: [
          {
            name: tag,
            status: "active",
          },
        ],
      },
    }
  );

  return response;

}

export const addUserToAudience = async (userData) => {

  const subResponse = await mailchimp.lists.addListMember(listId, {
    email_address: userData.email,
    phone_number : userData.phoneNumber,
    comments : userData.comments,
    status: "subscribed",
    merge_fields: {
      FNAME: userData.firstName,
      LNAME: userData.lastName
    }
  });
  return subResponse;
}


export const userInList = async (email) => {

  const subscriberHash = md5(email);

  try {
    const response = await mailchimp.lists.getListMember(
      listId,
      subscriberHash
    );

    console.log(`This user's subscription status is ${response.status}.`);
    return true;

  } catch (e) {
    if (e.status === 404) {
      console.error(`This email is not subscribed to this list`);
      return false;
    }
  }
}


/**
 * @param req 
 * @param res
 */
export default async (req, res) => {

 
  const userData = {
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.email.toLowerCase(),
    phoneNumber : req.body.phoneNumber,
    comments : req.body.comments
  };


  var inlist = await userInList(userData.email);

    try{

      if(inlist === false){
        var response = await addUserToAudience(userData);
        console.log("User has been added to list", response.id );
      }
      await updateUserTag(userData.email, req.body.templateName )
      res.status(200).json({ userAdded: true });

    } catch (e){
      console.log(e);
      res.status(400).json({ errorMessage: e.message });

    } 
  
}
