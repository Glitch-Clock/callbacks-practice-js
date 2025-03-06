function task1(successCallback, errorCallback){
    if(true) {
        successCallback("Task 1: Success!");
    } else{
        errorCallback("Task 1: Failure!");
    }
}

function task2(successCallback, errorCallback){
    if(false) {
        successCallback("Task 2: Success!");
    } else{
        errorCallback("Task 2: Failure!");
    }
}

function task3(successCallback, errorCallback){
    if(true) {
        successCallback("Task 3: Success!");
    } else{
        errorCallback("Task 3: Failure!");
    }
}

function main(successCallback, errorCallback){
    try{
        task1(function(success){
            console.log(success);
            task2(function(success){
                console.log(success);
                task3(function(success){
                    console.log(success);
                }, function(error){
                    console.log(error);
                    throw new Error("Error");
                });
            }, function(error){
                console.log(error);
                throw new Error("Error");
            });
        }, function(error){
            console.log(error);
            throw new Error("Error");
        });

        successCallback("Task1, Task2, and Task3 all succeeded successfully!");
    } catch(error) {
        errorCallback("Something went wrong:" + error);
    }
}

main(function(success){
    console.log(success);
}, function(error){
    console.log(error);
});
