/**
 * Define template data 
 */

export const templatesData = {
    "PhotoX" : {
        feat_name : "PhotoX - A beginners portfolio",
        description : 'Spatacular portfolio for beginner photographers who want to show their work.',
        category : 'Digital',
        name: "PhotoX",
        preview: "https://photox-template.vercel.app/",
        s_price : 79,
        id: "t1",
        comingSoon : true,
        features : ["Interactions", "Animations", "Responsive Design"],
        images : ["photox_image_one.png","photox_image_two.png","photox_image_three.png"]
    },
    // "Estore" : {
    //     feat_name : "Estore - A starter ecommerce site made for you.",
    //     description : 'Spatacular portfolio for photographers or models to show their work .',
    //     category : 'Digital',
    //     name: "Estore",
    //     s_price : 450,
    //     id: "t2",
    //     comingSoon : false,
    //     features : ["Interactions", "Animations", "Customer Form", "Responsive Design"],
    //     images : ["photox/photox_image_one.png"]
    // },
    // "PorfolioX" : {
    //     feat_name : "PorfolioX - The Best Digital Website",
    //     description : 'Whethere your a student or a business professional. This template is perfect to show your experience.',
    //     category : 'Digital',
    //     name: "PorfolioX",
    //     s_price : 99,
    //     id: "t3",
    //     comingSoon : false,
    //     features : ["Interactions", "Animations", "Responsive Design"],
    //     images : ["photox/photox_image_one.png"]
    // },

}

export function getAllKeys(){ 
    console.log("running");
    return Object.keys(templatesData).map((templateName) => {
        return {
            params : {
                name : templateName
            }
        }
    })
    
}

export function getTemplateData(name){ 
    
    return templatesData[name];
}



export default templatesData