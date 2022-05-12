// // Api data
// const apiData =[
//     {
//         Character: 'Rick Sanchez',
//         image: 'https://i.imgur.com/FU4y4F2.jpg',
//         Status: 'Alive'
//         Species: 'Human'
//         Gender: 'Male'
//         Origin: 'Earth (C-137)'
//     },
//     {
//         Character: 'Morty Smith',
//         image: 'https://i.imgur.com/uujWkAl.jpg',
//         Status: 'Alive'
//         Species: 'Human'
//         Gender: 'Male'
//         Origin: 'Unknown'
//     },
//     {
//         Character: 'Summer Smith',
//         image: 'https://i.imgur.com/kwxs0Ns.jpg',
//         Status: 'Alive'
//         Species: 'Human'
//         Gender: 'Female'
//         Origin: 'Earth (Replacement Dimension)'
//     },
//     {
//         Character: 'Beth Smith',
//         image: 'https://i.imgur.com/C4u5wNX.jpg',
//         Status: 'Alive'
//         Species: 'Human'
//         Gender: 'Female'
//         Origin: 'Earth (Replacement Dimension)' 
//     },
//     {
//         Character: 'Jerry Smith',
//         image: 'https://i.imgur.com/M0SLtPL.jpg',
//         Status: 'Alive'
//         Species: 'Human'
//         Gender: 'Male'
//         Origin: 'Earth (Replacement Dimension)' 
//     },
//     {


//     }
// ]

// variables

const URL = "https://rickandmortyapi.com/api/character";
const $nextCharacterBtn = $('#nextCharacterBtn')
const $mainContent = $('main')


// element references 

const $name = $('#name');
const $status = $('#status');
const $species = $('#species');
const $gender = $('gender');

//Event listeners



//Functions
function handleGetData() {

    $.ajax(URL).then(function (data) {
        console.log('character data is ready')
        console.log(data.results)
        let results = data.results
        
        const nextCharacter = () => {
        
        const randomIndex = Math.floor(Math.random() * results.length)
        const character = results[randomIndex]
        displayCharacter(character)
        }
        const displayCharacter = (character) => {
            
        
        
            $mainContent.empty()
             const $img = $('<img>')
            $img.attr('src', character.image)
            $img.attr('alt', character.title)
            $mainContent.append($img)
        
            
            const $characterInfo = $('<div>')
            $characterInfo.addClass('characterInfo')
            $mainContent.append($characterInfo)
         }
        
        // event listeners =====
        $nextCharacterBtn.on('click', nextCharacter);


        // $name.text(data.name)
        // $status.text(data.status)
        // $species.text(data.species)
        // $gender.text(data.gender)
        // // $results.text(data.results);

    }, function (error) {
        console.log('something is wrong')
        console.log(error)

    })
}
handleGetData()