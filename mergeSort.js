function mergeSort(array){
    if (array.length > 1){

        let firstHalf = array.slice(0, Math.floor(array.length/2) )
        let secondHalf = array.slice(Math.floor(array.length/2), array.length)
    
        // console.log( firstHalf)
        // console.log( secondHalf)

       return sort(mergeSort(firstHalf),mergeSort(secondHalf))
    
        // return sortedArray
    }

    return array

}



function sort(arr1,arr2){ 
    
    
    let sortedArray = []

    while (arr1.length && arr2.length){
        
        // console.log(arr1[indexArr1], arr2[indexArr2])

        if( arr1[0] <= arr2[0]){

            sortedArray.push(arr1.shift())
            
        }else{
            sortedArray.push(arr2.shift())
        }
       
    }


    return [...sortedArray,...arr1,...arr2]
}


let unsortedArray = [23,4,56,7,687]


export default mergeSort;


