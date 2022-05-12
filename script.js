const URL = "https://rickandmortyapi.com/api/character";
const $nextCharacterBtn = $('#nextCharacterBtn')
const $mainContent = $('main')

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


    }, function (error) {
        console.log('something is wrong')
        console.log(error)

    })
}
handleGetData()