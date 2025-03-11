async function getRandomDogImage(){
    const url ='https://random.dog/woof.json';
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById('dogImage').src = data.url;
}

async function getRandomCatImage(){
    const url ='https://cataas.com/cat?' +
                                         Math.random() * 1000;
    
    document.getElementById('catImage').src = url;
}


async function getRandomPersonImage(){
    const url ='https://thispersondoesnotexist.com/'
    
    document.getElementById('personImage').src = url;
}