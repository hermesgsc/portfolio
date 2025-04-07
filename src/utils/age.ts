const getAge = () => {
    const bornDate = new Date('2003-10-14')
    const today = new Date()
    const age = today.getFullYear() - bornDate.getFullYear()
    const month = today.getMonth() - bornDate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < bornDate.getDate())) {
        return age - 1;
    }
    return age;
};

export default getAge