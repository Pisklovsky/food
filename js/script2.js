'use strict';


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   )
// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//     console.log(3);
//     res();
// }).then(() => console.log(4));

// console.log(5);

// const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];


// const positiveFunds = funds.filter(item => item.amount >= 1)
// .reduce((prev, curr) => {
//     return prev + curr.amount;
// }, 0);

// const aFunds = funds.some(item => item.amount < 0 ? funds.reduce((prev, curr) => prev + curr.amount, 0) : positiveFunds()

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

    
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
 
//     console.log(result);
//     return result;

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     result[i] = arr[i];
    // }

    // console.log(result);
    // return result;

//     const lines = 5;
//     let result = '';

// for(let i = 0; i <= lines; i++) {
    
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//         }
    
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
//     }
    

// console.log(result);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function () {
//        const {age} = personalPlanPeter;
//        const {languages} = personalPlanPeter.skills;


//        let str = `Мне ${age} и я владею языками: `; 

//        languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//        });

       
//        console.log(str);
//     }
// };

// personalPlanPeter.showAgeAndLangs();

// let str = '';
// const {programmingLangs} = personalPlanPeter.skills;

// for (let key in programmingLangs) {
//      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
// }

// console.log(str);





// const {js, php} = personalPlanPeter.skills.programmingLangs;



// for (let key in personalPlanPeter) {
//     if (typeof(personalPlanPeter[key]) === 'object') {
//        for (let i in personalPlanPeter[key]) {
//         console.log(`Значение ${i} содержит свойство ${personalPlanPeter[key][i]}`);
//        }
//     } else {
//         console.log(`Значение ${key} содержит свойство ${personalPlanPeter[key]}`);
//     }
// }


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamaly(arr) {
//     if (arr.length === 0) {
//         console.log('Семья пуста');
//     } else {
//         console.log(`Семья состоит из: ${arr.join(' ')}`);
//     }


// }

// showFamaly(family);

// console.log(family.join(' '));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `;
//     });

//     console.log(str);
    

//     return str;
// }



// showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
    
  
//     arr.forEach(data => {
//         console.log(data.toLowerCase());
//       });

// }

// standardizeStrings(favoriteCities);


// const someString = 'This is some strange string';


// function reverse(str) {

//     if(typeof(str) !== 'string') {
//        return  'Ошибка';
//     } else {
//        return str.split('').reverse().join('');
//     }
// }



// reverse(someString);


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// const doubleCurrencies = baseCurrencies.concat(additionalCurrencies);


// function availableCurr(arr, missingCurr) {

//     if(arr == 0) {
//         return 'Нет доступных валют';
//     }  else  {
//         return `${doubleCurrencies} `;
//     }


// }


// console.log(availableCurr(doubleCurrencies, 'UAH'));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });


//     return str;
// }

// console.log(
//     availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let str = '';

    
}