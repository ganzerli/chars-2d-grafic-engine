const positions =[];
const number = 25;

const func = (x,y)=>{
    let x_ =0;
    let y_ =0;
    x_ = x+1;
    y_ = y+1;
    return[x_,y_];
}
function fillPositions(width, height){
    let x =-1 + width;
    let y =-1 + height;

        for (let i = 0; i < number; i++) {
            positions[i]= func(x,y);
            x++;
            y++;
        }
}

fillPositions(10,25);
console.log("filled");

//////////////////////   END EXAMPLE 1  /////////////////////////////




const print2 = (WIDTH, HEIGHT, positions, CHAR)=>{
        let result = [];
        let resultI = 0;
    
        // fill screen
        for (let height = 0; height < HEIGHT; height++) {
            for (let width = 0; width < WIDTH ; width++) {
                result[resultI]= '-';
                resultI ++;
            }
            result[resultI]= '\n';
            resultI ++;
        }
    
        // object to print
        let left = 0 ;
        let top = 0 ;
        let size = 0;
    
        //put elements
        positions.forEach(e => {
            left = e[0];
            top = e[1];
            sizeX = e[2];
            sizeY = e[3];
            // begin of top left
            let top_left = (top * WIDTH ) + left +1;

            const height = (relativePosition) =>{
                for (let i = 0; i < sizeY * WIDTH; i+= WIDTH +1) {
                    if(result[relativePosition + i] == '\n'){
                        relativePosition += 1;
                        break;
                    }            
                    result[relativePosition + i] = CHAR;
                }
            }

            // print row per row
            for (let i = 0; i < sizeX; i++) {
                if(result[top_left + i] == '\n'){
                    top_left += 1;
                    break;
                }            
                result[top_left + i] = CHAR;
                // print 1 column
                height(top_left + i);
            }
        });
        return result;
    }
    









const positions2 = [[23,9,5,3],[0,0,0,0],[0,0,0,0]];
let result2 =[];


result2 = print2(WIDTH,HEIGHT,positions2,'#');

const HEIGHT = 20;
const WIDTH = 60;


console.log(result2.join(""));