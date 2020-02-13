let _ = require('lodash')


let customer = [


    { name: 'Jan', salary: 100 },
    { name: 'Jan2', salary: 1000 },
    { name: 'Jan3', salary: 10000 },
    { name: 'Jan4', salary: 100000 },
    { name: 'Jan5', salary: 1000000 }

]


// console.log(customer);

// customer.map((item) =>

//     console.log(item.name + '-' + item.salary
    
//     ))

    // customer.sort( (a,b) => (b.salary > a.salary) ? -1 : 1 )

       console.log( _.sortBy( customer, 'salary'))
