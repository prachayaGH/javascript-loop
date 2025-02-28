// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// วิธีที่ 1
for (let i = companyName.length-1 ; i >= 0; i--) {
    reversedCompanyName += companyName[i];
}
console.log(reversedCompanyName)

// วิธีที่ 2
for (let i = 0; i < companyName.length; i++) {
    console.log(companyName[i])
    for (let j = 0; j < companyName.length; j++) {
        reversedCompanyName = companyName[j-i]
    }
    console.log(reversedCompanyName)
} 

