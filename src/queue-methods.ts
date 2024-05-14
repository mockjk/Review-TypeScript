export function createQueue(size: number){ //Function for create queue
    return [...new Array(size)];
};

export function insertQueue(item: any, queue: Array<any>){ //Function for insert something in the queue

    const index = queue.findIndex(element => element === undefined); //Finds and stores the first index than your value whose is undefined

    if(index === -1){
        console.error("Error, the queue is full");
        return;
    };

    console.log("The item has been added to queue");
    queue[index] = item;
    return;
};

export function remove(queue: Array<any>){ //Function to remove the first item from the queue
    
    if(queue[0] !== undefined){
        const removedItem = queue[0]; //Stores the removed item/first item from queue

        for(let i = 0; i < queue.length - 1; i++){
            queue[i] = queue[i + 1];
        };

        queue[queue.length - 1] = undefined;

        return{
            removedItem: removedItem
        };
    };

    console.error("Error, the queue is empty!");
    return;
};