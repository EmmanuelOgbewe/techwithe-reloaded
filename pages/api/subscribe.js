// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//subscribe user to template
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export default async (req, res) => {
 
      console.log(req.body);
      const response = await mailchimp.ping.get();
      console.log(response);
       res.statusCode = 200
  
  res.status(200).json({ text: 'Hello' })
}
