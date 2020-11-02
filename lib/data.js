/**
 * Define template data 
 */

export const templatesData = {
    "ArtBoard" : {
        feat_name : "ArtBoard - The Best Digital Website",
        description : 'Spatacular portfolio for photographers or models to show their work .',
        category : 'Digital',
        name: "ArtBoard",
        s_price : 150,
        id: "t1",
        comingSoon : true,
        features : ["Interactions", "Animations", "Customer Form", "Responsive Design"],
        images : []
    },
    "Estore" : {
        feat_name : "Estore - A starter ecommerce site made for you.",
        description : 'Spatacular portfolio for photographers or models to show their work .',
        category : 'Digital',
        name: "ArtBoard",
        s_price : 450,
        id: "t2",
        comingSoon : false,
        features : ["Interactions", "Animations", "Customer Form", "Responsive Design"],
        images : []
    },
    "PorfolioX" : {
        feat_name : "PorfolioX - The Best Digital Website",
        description : 'Whethere your a student or a business professional. This template is perfect to show your experience.',
        category : 'Digital',
        name: "ArtBoard",
        s_price : 99,
        id: "t3",
        comingSoon : false,
        features : ["Interactions", "Animations", "Customer Form", "Responsive Design"],
        images : []
    }

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