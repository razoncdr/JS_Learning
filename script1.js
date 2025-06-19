// const colors = {
//     color1: 'red',
//     color2: 'blue',
//     color3: 'green'
// }

// for(const key in colors){
//     console.log(key, colors[key])
// }



// // for(const key in nums){
    // //     console.log(nums[key])
    // // }
    
    
    // nums.forEach(f => console.log(f))
    
    // var sum = 0;
    
    // nums.forEach(val=>sum+=val)
    
    // console.log(sum)
    
    
const nums = [1,  2, 3, 4, 5, 7, 4];
let evenNums=[];
nums.forEach(val=> val%2===0 && evenNums.push(val))

console.log(evenNums)

evenNums.splice(0)

evenNums = nums.filter(val=>val%2===0)

console.log(evenNums)