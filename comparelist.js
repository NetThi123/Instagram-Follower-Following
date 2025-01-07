//imports file system in Node.js and allows you to manipulate files (eg in this case HTML)
const fs = require('fs');
//imports JSDOM library that simualtes web browser DOM allowing Node.js environment to parse and manipulate HTML like in a browser
const { JSDOM } = require('jsdom');

//function to extractfollowers from file 
function ExtractFollowersFromFile(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, 'utf-8', (err,data)=>{
            //return error message if error is encountered
            if (err) {
                return reject(err); // Reject the promise with the error
            }
    
            //parse HTMl file
            const dom = new JSDOM(data);
            const document = dom.window.document;
    
            //extract list of followers
            const followers = [];
            //select all <a> tags 
            const indivFollower = document.querySelectorAll('a');
    
            //foreach loop going through indivFollowers
            indivFollower.forEach(follow=>{
                //get text inside <a> tag
                followers.push(follow.textContent.trim());
            });
    
            //signifies end of async function and returns followers list
            resolve(followers);
        });
    });
}

//compare lists and returns values that aren't common to the two
function compareList(list1, list2){
    //create set from list1 
    const set1 = new Set(list1);

    //verifies if element in list2 exists in set with elements of list1
    //if not then adds element to onlyInList2 
    const onlyInList2 = list2.filter(item => !set1.has(item));

    return {onlyInList2};
}

(async function mainModule(){
    try{
        //stores files of html files 
        const file1 = 'followers_1.html';
        const file2 = 'following.html';

        //extract followers 
        const followers = await ExtractFollowersFromFile(file1);
        const following = await ExtractFollowersFromFile(file2);

        //list with people who don't follow back 
        const {onlyInList2} =  compareList(followers, following);

        //title of list
        console.log('\nNot following back: ');
        console.log(JSON.stringify(onlyInList2, null, 2)); //prints list with no truncation 


    }
    catch(error){
        console.log(error);
    }
})();




