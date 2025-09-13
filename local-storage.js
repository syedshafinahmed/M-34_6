const addNumberToLS = () =>{
    const number = Math.ceil(Math.random()*100
    );
    console.log(number);
    localStorage.setItem('number', number);
}

const getNUmberFromLS = () =>{
    const number = localStorage.getItem('number')
    console.log("From local storage", number);
}

const setObjectToLS = () =>{
    const customer = {
        name: "Shafin",
        age: 25,
        salary: 25000
    }
    const customerJSON = JSON.stringify(customer)
    localStorage.setItem("customer", customerJSON);
}

const readObjectFromLS = () =>{
    const customerJSON = localStorage.getItem('customer');
    const customer = JSON.parse(customerJSON)
    console.log(customer.name);
}