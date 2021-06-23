let companies= [
    {name: "Company 1", category:'Finance', start: 1992, end:2001},
    {name: "Company 2", category:'eShop', start: 1988, end:2023},
    {name: "Company 3", category:'Tech', start: 1972, end:2004},
    {name: "Company 4", category:'Retail', start: 1992, end:2033},
    {name: "Company 5", category:'Auto', start: 1998, end:2020},
    {name: "Company 6", category:'Service', start: 1952, end:2013},
    {name: "Company 7", category:'Tech', start: 1982, end:2016},
];


let ages=[12,34,56,34,27,19,28,45,67,9,10,14];

//Foreach/For loop

/*for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]); 
}*/

/*companies.forEach(function(company) {
    console.log(company)
});*/

//Filter

/*let canDrink=[];
for(let i=0;i<ages.length;i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}*/

/*let canDrink=ages.filter(function(age) {
    if(age>=21) {
        return true;
    }
});*/

//let canDrink=ages.filter(age => age >=21); //ES6

//console.log(canDrink);

/*let ctg=companies.filter( function(Cat) {
    if(Cat.start<1990)  {
        return true;
    }
});*/  

//let ctg = companies.filter(Cat => Cat.category==='Tech' );


//map
//Name of companies array

/*let companyNames= companies.map(function(company) {
    return company.name;
});*/

/*let companyNames=companies.map(company => company.name);
let companyStart=companies.map(company => company.start);


console.log(companyNames);
console.log(companyStart);

let square= ages.map(sqr=> sqr+2);

console.log(square);*/


//sort
/*let sortedCompanies=companies.sort(function (c1, c2) {
    if(c1.start>c2.start) {
        return 1;
    }

    else {
        return -1;
    }
});*/

/*let sortedCompanies=companies.sort((a,b) => b.start-a.start);

let sortedAge= ages.sort((a,b) => b-a);
console.log(sortedAge);

console.log(sortedCompanies);*/

//reduce
let ageSum=ages.reduce((total,age) => total+age, 0);
console.log(ageSum);

let startSum=companies.reduce((total, sum) => total + (sum.end-sum.start), 0);
console.log(startSum);

//all combined

let combined= ages
.map(age =>2*age)
.filter(age =>age>=40)
.sort((a,b) => a-b)
.reduce((a,b) =>a+b,0);

console.log(combined);