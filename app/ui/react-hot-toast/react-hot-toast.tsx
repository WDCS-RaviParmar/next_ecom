import toast from 'react-hot-toast'

function successTost(msg: string){
    toast.success(msg)// 'Successfully Product Created!'
} 
function errorTost(msg: string){
    toast.error(msg) // "This didn't work."
} 

export {successTost, errorTost}