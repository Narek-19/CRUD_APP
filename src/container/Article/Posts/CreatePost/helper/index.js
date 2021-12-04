export const randomId = () => {
    const date = new Date();
    const randomNumber = date.getTime() + Math.floor(Math.random() * 100); 
    return randomNumber;
}