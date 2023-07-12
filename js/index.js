var arrayOfQuotes = [
    {     'quote': 'Beware of what you become in pursuit of what you want.',
          'author': 'Jim Rohn'
    },


    {   'quote': 'It is not what happens to you, but how you react to it that matters.',
        'author': 'Epictetus' 
    },


    {   'quote': 'The best revenge is massive success.',
        'author': 'Frank Sinatra' 
    },


    {   'quote': 'You miss 100% of the shots you do not take.',
        'author': 'Wayne Gretzy' 
    },


    {   'quote': 'Resentment is like drinking poison and waiting for your enemies to die.',
        'author': 'Nelson Mandela' 
    },


    {   'quote': 'Do not take life too seriously. You will not get out alive.',
        'author': 'Elbert Hubbard' 
    },
];

function displayquote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quote').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${arrayOfQuotes[random].author}`;
    
}
