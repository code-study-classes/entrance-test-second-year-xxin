import numberOfRoom from numberOfRoom.js  

const getStatus = (numberOfRoom) => {
    return numberOfRoom.status;
};

const changeStatus = (getStatus) => {
    if (getStatus === 'Свободен') {
        return 'Занят'
    };
    return getStatus;
};

console.log()