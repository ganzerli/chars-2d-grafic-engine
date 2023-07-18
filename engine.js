//                                    "  
// WIDTH & HEIGHT are the size of the     screen 
//                                                 "

const print = (WIDTH, HEIGHT, positions, CHAR)=>{
    let result = [];
    let resultI = 0;

    // difining existence of screen
    // print first a blank screen
    // background char is CHAR
    for (let height = 0; height < HEIGHT; height++) {
        for (let width = 0; width < WIDTH ; width++) {
            // SET RESULT ARRAY AS ALL BLANK CHAR
            result[resultI]= CHAR;
            resultI ++;
        }
        result[resultI]= '\n';
        resultI ++;
    }

    // elements
    let left = 0 ;
    let top = 0 ;

    // init char for printing elements
    let el_CHAR = ' ';

    // put elements
    positions.forEach(e => {
        left = e[0] +1;
        top = e[1];
        sizeX = e[2];
        sizeY = e[3];
        el_CHAR = e[4];

        // begin of top left
        let top_left = (top * WIDTH ) + left ;

        // funtction to skip rows based on '\n'
        const height = (relativePosition) =>{
            for (let i = 0; i < sizeY * WIDTH; i+= WIDTH +1) {
                if(result[relativePosition + i] == '\n'){
                    relativePosition += 1;
                    break;
                }            
                result[relativePosition + i] = el_CHAR;
            }
        }

        // print x row per row
        for (let i = 0; i < sizeX; i++) {
            // check if border of right side
            if(result[top_left + i] == '\n'){
                top_left += 1;
                break;
            }
            // set in array new position
            result[top_left + i] = el_CHAR;
            
            // ...() same...
            // print 1 column
            height(top_left + i);
        }
    });
    return result;
}

//  CREATES AN  " M "
function createChar(x,y){
    let arr =  [];
    const CHAR = 'M'
    // fll spot
    arr.push([x,y,2,5,CHAR]);
    arr.push([x+2,y,2,1,CHAR]);
    arr.push([x+4,y+1,2,1,CHAR]);
    arr.push([x+6,y+2,2,1,CHAR]);
    arr.push([x+7,y+1,2,1,CHAR]);
    arr.push([x+7,y,2,1,CHAR]);
    arr.push([x+9,y,2,5,CHAR]);
    return arr;
}

const HEIGHT = 33;
const WIDTH = 128;

const positions = [];
positions.push( ...createChar(20 , 15) );


const EMPTY_SPACE = ' ';
let result=[];
result = print(WIDTH,HEIGHT,positions,EMPTY_SPACE);

console.log(result.join(""));
