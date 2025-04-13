let Names= ["John Smith","Jane Doe","John Simpson","Jane Davis"]
let Existing_emails= [ "johns@company.com","janed1@company.com"]

function emailGen(Names,Existing_eamils){
    let email=""
    
    for(let i=0;i<Names.length;i++){
        let count=1
        target=Names[i].split(" ")
        email=target[0].toLowerCase()+target[1][0].toLowerCase()+"@company.com"
        while(Existing_emails.includes(email)){
            email=target[0].toLowerCase()+target[1][0].toLowerCase()+count+"@company.com"
            count++
        }
        console.log(email)
        Existing_emails.push(email)
    }
    
}
emailGen(Names,Existing_emails)