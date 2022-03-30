configureWebpack: {
    devtool: 'cheap-module-source-map'
  }

console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login");
let login_text = login_element.innerText;

let ques = login_text[52];

//[45]==P

console.log(ques)

if (ques == 'a'){
    let operation = login_text.slice(56 , 65);
    let ope = operation.replace('=' , '');

    var m1 = ope.match(/(\d+)/);
    let l1 = m1[0];

    var oped = ope.replace(l1,'');
    var opee = oped.replace('+','');
    let l2 = opee;

    console.log(parseInt(l1),parseInt(l2));



    var answer = parseInt(l1) + parseInt(l2);  
    
    console.log(ope,'.',l1,'.',l2);
    console.log(answer);

    
    
    

}

if (ques == 's'){
    let operation = login_text.slice(61 , 70);
    let ope = operation.replace('=' , '');

    var m1 = ope.match(/(\d+)/);
    let l1 = m1[0];

    var oped = ope.replace(l1,'');
    var opee = oped.replace('-','');
    let l2 = opee;

    console.log(parseInt(l1),parseInt(l2));



    var answer = parseInt(l1) - parseInt(l2);  
    
    console.log(ope,'.',l1,'.',l2);
    console.log(answer);

}

if (ques=='e'){
    let ques2 = login_text[58];
    console.log(ques2);

    if (ques2=='f'){
        let answer_=login_text.slice(70,79);        
        var matches = answer_.match(/(\d+)/);
        var answer = parseInt(matches[0]);
        console.log(answer);

    }

    else if (ques2=='s'){
        let answer_ = login_text.slice(76,83);
        var matches1 = answer_.match(/(\d+)/);
        var answer1 = matches1[0];

        var answer = parseInt(matches1[0]);
        console.log(answer);

        /*

        
        var answers = answer_.replace(answer1 , '');
        var answerss = answers.replace(',' , '');
        
        var matches = answerss.match(/(\d+)/);
        var answer = parseInt(matches[0]);
        console.log(answer);
        */
        
    }

    
}


const captcha_input_element = document.querySelector("#valuepkg3"); 
captcha_input_element.value = answer;

console.log(login_text)

console.log('pp')
