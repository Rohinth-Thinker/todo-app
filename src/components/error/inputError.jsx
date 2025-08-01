
export function addError(target, result, setError) {
    const message = <span>Invalid {result}</span>
    const errorMessage = selectError(result, message); 

    target.focus();
    target.classList.add("invalid-input");
    setError(errorMessage)
    // setShowError(prev => ({...prev, ...errorMessage}))
}

export function removeError(target, setError) {
    const errorMessage = selectError(target.name, '');
    setError(errorMessage);

    target.classList.remove("invalid-input");
}


function selectError(result, message) {
    if (result === 'name') {
        return {name : message};
    } else if (result === 'email') {
        return {email : message};
    } else if (result === 'password') {
        return {password : message};
    } else if (result === 'title') {
        return {title : message};
    } else {
        return {deadline : message};
    }
}

