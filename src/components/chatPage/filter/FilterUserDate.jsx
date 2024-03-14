

const archiveMessages = [
    {
        text: 'На мели мы лениво ловили налима и меняли налима мы нам на линя. О любви не меня ли вы мило молили',
        name: 'Alice',
        id: 'r3TUlR1UG7BhcGCfAABJ-0.4626079959470528',
        dateForUser: '29 Февраля',
        data: '2024-02-29T09:00:52.558Z',
    },


    {
        text: 'и в туманы лимана манили меня?',
        name: 'Dima',
        id: 'r3TUlR1UG7BhcGCfAABJ-0.20965390840987275',
        dateForUser: '29 Февраля',
        data: '2024-02-29T09:00:52.558Z',
    },


    {
        text: 'Нали́м (нали́ма) — лат. lota lota, крупная речная рыба до 1,2м до 18кг',
        name: 'Dima',
        id: 'r3TUlR1UG7BhcGCfAABJ-0.20965390840987275',
        dateForUser: '3 Марта',
        data: '2024-03-03T09:00:52.558Z'
    },

    {
        text: 'jjjjjj',
        name: 'Alice',
        id: 'Q7JZVtpiv5W2vELOAAB7-0.23361433527889597',
        dateForUser: '14 Апреля',
        data: '2024-03-14T19:22:04.728Z',
    },

    {
        text: 'jjjjjjjj',
        name: 'Alice',
        id: 'Q7JZVtpiv5W2vELOAAB7-0.8697362800760708',
        dateForUser: '14 Апреля',
        data: '2024-03-14T19:22:06.348Z',
    },

    {
        text: 'jjjjjj',
        name: 'Alice',
        id: 'Q7JZVtpiv5W2vELOAAB7-0.6729058367979186',
        dateForUser: '14 Апреля',
        data: '2024-03-14T19:22:08.738Z',
    }
]
export const filteredData = (data, startDate, endDate) => {

    console.log(data, "массив приходит из метода")
    console.log(startDate, "startDate ")
    console.log(endDate, "endDate  из метода")
    startDate = new Date(startDate).getTime();
    endDate = new Date(endDate).getTime();

    return data.filter(d => {
        let time = new Date(d['data']).getTime();
        console.log(startDate < time && time < endDate, "отфильтровано из метода")
        return (startDate < time && time < endDate)
    });
}



const start = ['2024-01-01', '2024-03-02'][0]
const end = ['2024-02-29', '2024-03-01'][1]
console.log(
    filteredData(archiveMessages, start, end)
);

